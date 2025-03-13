import { useState } from "react";
import { useParams } from "react-router-dom";
import { submitApplication } from "../services/api";
import "./JobApplication.css";

const JobApplication = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({ name: "", email: "", resume: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        submitApplication({ ...formData, jobId: id }).then(() => {
            alert("Application Submitted!");
        });
    };

    return (
        <form className="application-form" onSubmit={handleSubmit}>
            <h2>Apply for Job #{id}</h2>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            {/* <textarea type="email" name="resume" placeholder="Resume" onChange={handleChange} required /> */}
            <input type="file" />
            <button type="submit">Submit Application</button>
        </form>
    );
};
export default JobApplication;
