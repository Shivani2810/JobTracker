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
      navigate("/login");
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
        return "status-applied";
      case "Interview":
        return "status-interview";
      case "Offer":
        return "status-offer";
      case "Rejected":
        return "status-rejected";
      default:
        return "pill-badge";
    }
  };

  return (
    <div className="page-bg subtle-grid">
      <Navbar />

      <div className="container-shell py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="section-title">Dashboard</h1>
            <p className="mt-1 text-slate-300">
              Track all your job applications
            </p>
          </div>

          <div>
            <button
              onClick={() => navigate("/add-job")}
              className="primary-btn"
            >
              Add Job
            </button>
          </div>
        </div>

        <div className="glass-card mb-8 p-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Search by company or role"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="select-field"
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
          <div className="glass-card p-10 text-center">
            <p className="text-lg text-slate-300">No matching jobs found.</p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="glass-card p-6 transition hover:-translate-y-1 hover:bg-white/[0.10]"
              >
                <h2 className="text-2xl font-bold text-white">{job.role}</h2>
                <p className="mt-2 text-slate-300">{job.company}</p>

                <span
                  className={`mt-4 inline-flex rounded-full px-3 py-1 text-sm font-medium ${getStatusClasses(
                    job.status
                  )}`}
                >
                  {job.status}
                </span>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => navigate(`/edit-job/${job._id}`)}
                    className="secondary-btn flex-1 !py-2.5"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(job._id)}
                    className="danger-btn flex-1 !py-2.5"
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