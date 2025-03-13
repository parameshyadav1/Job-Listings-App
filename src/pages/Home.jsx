import { useContext, useState } from "react";
import { JobContext } from "../store/JobContext";
import JobCard from "../components/JobCard";
import "./Home.css";

const Home = () => {
    const { jobs } = useContext(JobContext);
    const [search, setSearch] = useState("");

    // Filter jobs based on search input
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home-container">
            <header className="hero">
                <h1>Find Your Dream Job</h1>
                <p>Browse thousands of job opportunities and apply today!</p>
                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-bar"
                />
            </header>
            <div className="jobs-list">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
                ) : (
                    <p className="no-jobs">No jobs found.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
