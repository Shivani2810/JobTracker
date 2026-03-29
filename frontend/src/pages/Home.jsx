import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-bg subtle-grid">
      <section className="container-shell flex min-h-screen flex-col justify-center py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">

        {/* ── LEFT SIDE ── */}
        <div className="max-w-3xl">

          {/* Animated badge */}
          <div className="hero-tag mb-6 w-fit">
            <span className="hero-tag-ring"></span>
            <span className="hero-tag-text">MERN Stack Job Tracker</span>
          </div>

          {/* Headline with gradient accent */}
          <h1 className="hero-title leading-tight">
            Track your job applications with{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                clarity
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6 Q25 1 50 5 Q75 9 100 4 Q125 -1 150 5 Q175 9 200 4"
                  stroke="url(#squiggle-grad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="squiggle-grad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#22d3ee" />
                    <stop offset="0.5" stopColor="#818cf8" />
                    <stop offset="1" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            , focus, and style.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Organize every application, monitor interview progress, update
            statuses, and manage your full job search journey from one elegant
            dashboard.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/signup"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/40"
            >
              <span className="relative z-10">Get Started</span>
              <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>

            <Link
              to="/login"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600/60 bg-slate-800/50 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-slate-500 hover:bg-slate-700/60 hover:text-white"
            >
              Login
              <svg className="h-4 w-4 opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </Link>
          </div>

          {/* Tech stack badges — honest & resume-worthy */}
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">Built with</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "MongoDB", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" },
                { label: "Express.js", color: "border-slate-500/30 text-slate-300 bg-slate-500/10" },
                { label: "React", color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10" },
                { label: "Node.js", color: "border-green-500/30 text-green-400 bg-green-500/10" },
                { label: "JWT Auth", color: "border-violet-500/30 text-violet-400 bg-violet-500/10" },
                { label: "REST API", color: "border-sky-500/30 text-sky-400 bg-sky-500/10" },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className={`inline-flex items-center rounded-lg border px-3 py-1 text-xs font-medium ${color}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: "➕",
                label: "Add Jobs",
                desc: "Save every opportunity in seconds.",
                accent: "from-cyan-500/10 to-sky-500/5 border-cyan-500/20",
                dot: "bg-cyan-400",
              },
              {
                icon: "🚦",
                label: "Track Status",
                desc: "Move from applied to interview to offer.",
                accent: "from-emerald-500/10 to-green-500/5 border-emerald-500/20",
                dot: "bg-emerald-400",
              },
              {
                icon: "🗂️",
                label: "Stay Organized",
                desc: "Keep your search focused and structured.",
                accent: "from-violet-500/10 to-purple-500/5 border-violet-500/20",
                dot: "bg-violet-400",
              },
            ].map(({ icon, label, desc, accent, dot }) => (
              <div
                key={label}
                className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${accent} p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
              >
                <span className={`absolute right-3 top-3 h-1.5 w-1.5 rounded-full ${dot} opacity-70`} />
                <div className="mb-2 text-xl">{icon}</div>
                <h3 className="text-sm font-semibold text-white">{label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{desc}</p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              { icon: "🔒", text: "Secure & Private" },
              { icon: "⚡", text: "Real-time Updates" },
              { icon: "🆓", text: "Free to Use" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-xs text-slate-500">
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT SIDE (unchanged) ── */}
        <div className="mt-12 w-full max-w-2xl lg:mt-0">
          <div className="feature-panel p-8 md:p-10">
            <div className="feature-panel-glow"></div>

            <div className="relative z-10">
              <div className="feature-heading-badge mb-5 w-fit">
                Product Highlights
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Why use Job Tracker?
              </h2>

              <p className="mt-3 max-w-xl text-slate-300">
                Designed to make your job search feel organized, focused, and easy to manage.
              </p>

              <div className="mt-8 space-y-5">
                <div className="feature-item feature-cyan">
                  <div className="feature-icon-wrap">
                    <span className="feature-icon">📋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Simple dashboard</h3>
                    <p className="mt-2 text-slate-300">
                      View all your applications in one clean place with quick actions and better visibility.
                    </p>
                  </div>
                </div>

                <div className="feature-item feature-emerald">
                  <div className="feature-icon-wrap">
                    <span className="feature-icon">🚦</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Status management</h3>
                    <p className="mt-2 text-slate-300">
                      Update roles as Applied, Interview, Offer, or Rejected and keep your progress updated.
                    </p>
                  </div>
                </div>

                <div className="feature-item feature-violet">
                  <div className="feature-icon-wrap">
                    <span className="feature-icon">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Built with MERN</h3>
                    <p className="mt-2 text-slate-300">
                      A full-stack app powered by MongoDB, Express, React, and Node for real-world project experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;