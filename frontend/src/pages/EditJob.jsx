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

  return (   // ✅ THIS must be inside function
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-800">Edit Job</h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full rounded-xl border px-4 py-3"
            />

            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Role"
              className="w-full rounded-xl border px-4 py-3"
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
              Update Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditJob;