import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AddJob = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await api.post("/jobs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/dashboard");
    } catch (error) {
      alert("Failed to add job");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-slate-800">Add Job</h1>
        <p className="text-slate-500 mt-2">Save a new application entry</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Offer</option>
            </select>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              Save Job
            </button>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;