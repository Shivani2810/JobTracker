import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

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
      fetchJobs();
    } catch (error) {
      alert("Failed to delete job");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-slate-500 mt-1">Track all your job applications</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/add-job")}
              className="rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
            >
              Add Job
            </button>
            <button
              onClick={handleLogout}
              className="rounded-xl bg-slate-800 px-5 py-3 text-white font-medium hover:bg-slate-900 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {jobs.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow">
            <p className="text-slate-600 text-lg">No jobs found yet.</p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="rounded-2xl bg-white p-6 shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-bold text-slate-800">{job.role}</h2>
                <p className="text-slate-600 mt-2">{job.company}</p>

                <span className="inline-block mt-4 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {job.status}
                </span>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => navigate(`/edit-job/${job._id}`)}
                    className="flex-1 rounded-xl border border-slate-300 py-2 font-medium text-slate-700 hover:bg-slate-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="flex-1 rounded-xl bg-red-500 py-2 font-medium text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;