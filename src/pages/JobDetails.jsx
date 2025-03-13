import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { JobContext } from "../store/JobContext";
import { fetchJobDetails } from "../services/api";
import "./JobDetails.css";

const JobDetails = () => {
    const { id } = useParams();
    const { setSelectedJob } = useContext(JobContext);
    const [job, setJob] = useState(null);

    useEffect(() => {
        fetchJobDetails(id).then(response => {
            setJob(response.data);
            setSelectedJob(response.data);
        });
    }, [id, setSelectedJob]);

    if (!job) return <p>Loading...</p>;

    return (
        <div className="job-details">
            <h2>{job.title}</h2>
            <p>{job.body}</p>
            <Link to={`/apply/${id}`}>Apply Now</Link>
        </div>
    );
};
export default JobDetails;
