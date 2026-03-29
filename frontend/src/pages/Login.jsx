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
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left Section */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-blue-700 to-slate-900 px-8 py-12 text-white lg:px-16">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              MERN Stack Project
            </div>

            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              Track every job application in one place.
            </h1>

            <p className="mt-6 text-lg text-slate-200">
              Job Tracker helps you manage applications, update statuses,
              organize opportunities, and stay on top of your career journey.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <h3 className="text-lg font-semibold">Add Jobs</h3>
                <p className="mt-1 text-sm text-slate-200">
                  Save every opportunity quickly.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <h3 className="text-lg font-semibold">Track Status</h3>
                <p className="mt-1 text-sm text-slate-200">
                  Know what is applied, interview, or offer.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <h3 className="text-lg font-semibold">Stay Organized</h3>
                <p className="mt-1 text-sm text-slate-200">
                  Keep your search clean and focused.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-800">Welcome back</h2>
            <p className="mt-2 text-sm text-slate-500">
              Login to continue managing your applications
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold transition hover:bg-blue-700"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-blue-600 hover:underline"
              >
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
