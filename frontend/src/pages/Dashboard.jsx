import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

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

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.role.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || job.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [jobs, searchTerm, statusFilter]);

  const getStatusClasses = (status) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-700";
      case "Interview":
        return "bg-yellow-100 text-yellow-700";
      case "Offer":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-slate-500 mt-1">
              Track all your job applications
            </p>
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

        {/* Search + Filter */}
        <div className="mb-8 rounded-2xl bg-white p-4 shadow">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Search by company or role"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="All">All Statuses</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow">
            <p className="text-slate-600 text-lg">No matching jobs found.</p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="rounded-2xl bg-white p-6 shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-bold text-slate-800">{job.role}</h2>
                <p className="text-slate-600 mt-2">{job.company}</p>

                <span
                  className={`inline-block mt-4 rounded-full px-3 py-1 text-sm font-medium ${getStatusClasses(
                    job.status
                  )}`}
                >
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