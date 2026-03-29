import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-bg subtle-grid">
      <section className="container-shell flex min-h-screen flex-col justify-center py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-3xl">
          <div className="pill-badge mb-6">
            MERN Stack Job Tracker
          </div>

          <h1 className="hero-title">
            Track your job applications with clarity, focus, and style.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Organize every application, monitor interview progress, update
            statuses, and manage your full job search journey from one elegant
            dashboard.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/signup" className="primary-btn">
              Get Started
            </Link>

            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="glass-soft p-5">
              <h3 className="text-lg font-semibold text-white">Add Jobs</h3>
              <p className="mt-2 text-sm text-slate-300">
                Save every opportunity in seconds.
              </p>
            </div>

            <div className="glass-soft p-5">
              <h3 className="text-lg font-semibold text-white">Track Status</h3>
              <p className="mt-2 text-sm text-slate-300">
                Move from applied to interview to offer.
              </p>
            </div>

            <div className="glass-soft p-5">
              <h3 className="text-lg font-semibold text-white">Stay Organized</h3>
              <p className="mt-2 text-sm text-slate-300">
                Keep your search focused and structured.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full max-w-xl lg:mt-0">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold text-white">Why use Job Tracker?</h2>

            <div className="mt-6 space-y-4">
              <div className="glass-soft p-5">
                <h3 className="text-lg font-semibold text-white">Simple dashboard</h3>
                <p className="mt-2 text-slate-300">
                  View all your applications in one clean place.
                </p>
              </div>

              <div className="glass-soft p-5">
                <h3 className="text-lg font-semibold text-white">Status management</h3>
                <p className="mt-2 text-slate-300">
                  Update roles as Applied, Interview, Offer, or Rejected.
                </p>
              </div>

              <div className="glass-soft p-5">
                <h3 className="text-lg font-semibold text-white">Built with MERN</h3>
                <p className="mt-2 text-slate-300">
                  Full-stack architecture using MongoDB, Express, React, and Node.
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