import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    try {
      const response = await api.get("/jobs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setJobs(response.data.jobs);
    } catch (error) {
      alert("Failed to fetch jobs");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    try {
      await api.delete(`/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Job deleted successfully");
      fetchJobs();
    } catch (error) {
      alert("Failed to delete job");
    }
  };

  return (
    <div>
      <Navbar />

      <h2>Dashboard</h2>

      <h3>Your Jobs</h3>

      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => (
          <div key={job._id}>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Role:</strong> {job.role}</p>
            <p><strong>Status:</strong> {job.status}</p>

            <button onClick={() => navigate(`/edit-job/${job._id}`)}>
              Edit
            </button>

            <button onClick={() => handleDelete(job._id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;