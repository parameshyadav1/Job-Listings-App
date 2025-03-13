import { Link } from "react-router-dom";
import "./JobCard.css";

const JobCard = ({ job }) => {
    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p>{job.body.substring(0, 100)}...</p>
            <Link to={`/jobs/${job.id}`} className="details-btn">View Details</Link>
        </div>
    );
};

export default JobCard;
