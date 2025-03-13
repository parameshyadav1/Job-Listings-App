import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>JobFinder</h2>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li className="dropdown">
                    <span>Jobs ▼</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/jobs/1">Job Details</Link></li>
                        <li><Link to="/apply/1">Job Application</Link></li>
                    </ul>
                </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
