import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/signup", formData);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="page-bg subtle-grid">
      <div className="container-shell grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center py-12 lg:pr-12">
          <div className="pill-badge mb-6 w-fit">Create account</div>
          <h1 className="hero-title">Start building your job search system.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Sign up to save applications, manage progress, and keep everything
            structured from day one.
          </p>
        </div>

        <div className="flex items-center justify-center py-12">
          <div className="glass-card w-full max-w-md p-8">
            <h2 className="text-3xl font-bold text-white">Sign Up</h2>
            <p className="mt-2 text-sm text-slate-400">
              Create your Job Tracker account
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="label-text">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="input-field"
                />
              </div>

              <div>
                <label className="label-text">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="input-field"
                />
              </div>

              <div>
                <label className="label-text">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="input-field"
                />
              </div>

              <button type="submit" className="primary-btn w-full">
                Create Account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-300">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-emerald-300 hover:text-emerald-200">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;