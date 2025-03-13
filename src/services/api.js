import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchJobs = () => axios.get(API_URL);
export const fetchJobDetails = (id) => axios.get(`${API_URL}/${id}`);
export const submitApplication = (data) => axios.post(API_URL, data);
