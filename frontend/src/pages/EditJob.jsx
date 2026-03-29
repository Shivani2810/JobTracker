import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

const EditJob = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
  });

  useEffect(() => {
    const fetchSingleJob = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/");
        return;
      }

      try {
        const response = await api.get(`/jobs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFormData({
          company: response.data.job.company || "",
          role: response.data.job.role || "",
          status: response.data.job.status || "Applied",
        });
      } catch (error) {
        alert("Failed to fetch job details");
      }
    };

    fetchSingleJob();
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    try {
      await api.put(`/jobs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Job updated successfully");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update job");
    }
  };

  return (
    <div>
      <Navbar />

      <h2>Edit Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          placeholder="Enter company"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="role"
          placeholder="Enter role"
          value={formData.role}
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button type="submit">Update Job</button>
      </form>
    </div>
  );
};

export default EditJob;