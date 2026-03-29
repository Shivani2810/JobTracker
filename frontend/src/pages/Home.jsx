import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="max-w-2xl">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            MERN Stack Job Tracker
          </div>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Track your job applications with clarity and confidence.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Organize every application, monitor interview progress, update job
            status, and manage your entire job search in one place.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/signup"
              className="rounded-2xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Login
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">Add Jobs</h3>
              <p className="mt-2 text-sm text-slate-600">
                Save every opportunity in seconds.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">
                Track Status
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Move from applied to offer smoothly.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">
                Stay Organized
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Keep your job search focused and structured.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full max-w-lg lg:mt-0">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-800">
              Why use Job Tracker?
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-800">
                  Simple dashboard
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  View all applications in one clean place.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-800">
                  Status management
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Update roles as Applied, Interview, Offer, or Rejected.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-800">
                  Built with MERN
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  A full-stack project using MongoDB, Express, React, and Node.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;