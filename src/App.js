import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JobProvider } from "./store/JobContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import JobApplication from "./pages/JobApplication";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
    return (
        <JobProvider>
            <Router>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/jobs/:id" element={<JobDetails />} />
                        <Route path="/apply/:id" element={<JobApplication />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </JobProvider>
    );
}

export default App;
