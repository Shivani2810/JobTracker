import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const response = await api.post("/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="page-bg subtle-grid">
      <div className="container-shell grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center py-12 lg:pr-12">
         <div className="welcome-badge mb-6 w-fit">
              <span className="welcome-dot"></span>
                  Welcome back
              </div>
          <h1 className="hero-title">Own your job search journey.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Log in to manage applications, update statuses, and keep your
            opportunities organized in one sleek workspace.
          </p>
        </div>

        <div className="flex items-center justify-center py-12">
          <div className="glass-card w-full max-w-md p-8">
            <h2 className="text-3xl font-bold text-white">Login</h2>
            <p className="mt-2 text-sm text-slate-400">
              Continue tracking your applications
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                  placeholder="Enter your password"
                  className="input-field"
                />
              </div>

              <button type="submit" className="primary-btn w-full">
                Login
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-300">
              Don’t have an account?{" "}
              <Link to="/signup" className="font-semibold text-emerald-300 hover:text-emerald-200">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;