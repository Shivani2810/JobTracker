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
        navigate("/login");
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      await api.put(`/jobs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update job");
    }
  };

  return (
    <div className="page-bg subtle-grid">
      <Navbar />

      <div className="flex items-center justify-center px-4 py-10">
        <div className="glass-card w-full max-w-xl p-8">
          <h1 className="section-title">Edit Job</h1>
          <p className="mt-2 text-slate-300">Update your application details</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="label-text">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company name"
                className="input-field"
              />
            </div>

            <div>
              <label className="label-text">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Enter job role"
                className="input-field"
              />
            </div>

            <div>
              <label className="label-text">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="select-field"
              >
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className="flex gap-3 pt-2">
              <button type="submit" className="primary-btn flex-1">
                Update Job
              </button>

              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="secondary-btn flex-1"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditJob;