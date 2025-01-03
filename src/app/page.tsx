"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.css";

export default function Form() {
    // State to manage form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        age: "",
        gender: "",
        interests: [] as string[],
    });

    // State to store an array of all submitted form data
    const [submittedDataArray, setSubmittedDataArray] = useState<typeof formData[]>([]);

    // Handle form input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const updatedInterests = formData.interests.includes(value)
                ? formData.interests.filter((interest) => interest !== value)
                : [...formData.interests, value];
            setFormData({ ...formData, [name]: updatedInterests });
        } else if (type === "radio") {
            setFormData({ ...formData, [name]: value });
        } else if (e.target.tagName === "SELECT") {
            const selectedOptions = Array.from((e.target as HTMLSelectElement).selectedOptions).map((option) => option.value);
            setFormData({ ...formData, [name]: selectedOptions });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted!");
        setSubmittedDataArray([...submittedDataArray, formData]); // Add current form data to the array
        console.log("Form Data Array:", submittedDataArray); 

        // Reset form after submission
        // setFormData({
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     address: "",
        //     age: "",
        //     gender: "",
        //     interests: [],
        // });
    };

    // Handle form reset
    const handleReset = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            age: "",
            gender: "",
            interests: [],
            
        });
    };

    return (
        <div>
            {/* Form */}
            <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
                {/* First Name */}
                <label htmlFor="firstName" className={styles.label}>
                    First Name:
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.input}
                />

                {/* Last Name */}
                <label htmlFor="lastName" className={styles.label}>
                    Last Name:
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.input}
                />

                
                <label htmlFor="email" className={styles.label}>
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                />

               
                <label htmlFor="address" className={styles.label}>
                    Address:
                </label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={styles.input}
                />

               
                <label htmlFor="age" className={styles.label}>
                    Age:
                </label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className={styles.input}
                />

                
                <label className={styles.label}>Gender:</label>
                <div>
                    <label htmlFor="male" className={styles.label}>
                        Male
                    </label>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="female" className={styles.label}>
                        Female
                    </label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                    />
                </div>
                <hr/><hr/>

                <label className={styles.label}>Interests:</label>
                <div>
                  <label htmlFor="reading" className={styles.label}>
                    Reading
                  </label>
                  <input
                  type="checkbox"
                  id="reading"
                  name="interests"  
                  value="reading"
                  checked={formData.interests.includes("reading")}
                  onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="hiking" className={styles.label}>
                    Hiking:
                  </label>
                  <input
                  type="checkbox"
                  id="hiking"
                  name="interests"
                  value="hiking"
                  checked={formData.interests.includes("hiking")}
                  onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="coding" className={styles.label}>
                    Coding:
                  </label>
                  <input
                  type="checkbox"
                  id="coding"
                  name="interests"
                  value="coding"
                  checked={formData.interests.includes("coding")}
                  onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="music" className={styles.label}>
                    Music:
                  </label>
                  <input
                  type="checkbox"
                  id="music"
                  name="interests"
                  value= "music"
                  checked={formData.interests.includes("music")}
                  onChange={handleChange}
                  />
                </div>
                
                {/* <label htmlFor="interests" className={styles.label}>
                    Interests:
                </label>
                <select
                    id="interests"
                    name="interests"
                    multiple
                    value={formData.interests}
                    onChange={handleChange}
                    className={styles.select}>
                      
                    <option value="coding">Coding</option>
                    <option value="reading">Reading</option>
                    <option value="music">Music</option>
                    <option value="sports">Sports</option>
                    <option value="traveling">Traveling</option>
                </select> */}

                
                <button type="submit" className={styles.button}>
                    Submit
                </button>
                <button type="reset" className={styles.button}>
                    Reset
                </button>
            </form>

            {/* Displaying Submitted Data */}
            {submittedDataArray.length > 0 && (
                <div className={styles.tableContainer}>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Interests</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submittedDataArray.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address}</td>
                                    <td>{data.age}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.interests.join(", ")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}