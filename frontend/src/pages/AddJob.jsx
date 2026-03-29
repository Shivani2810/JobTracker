import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

const AddJob = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
  });

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
      await api.post("/jobs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Job added successfully");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add job");
    }
  };

  return (
    <div>
      <Navbar />

      <h2>Add Job</h2>

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

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;