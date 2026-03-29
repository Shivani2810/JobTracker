import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/40 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 font-bold text-slate-950 shadow-lg shadow-emerald-500/20">
            JT
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Job Tracker</h1>
            <p className="text-xs text-slate-400">Track applications beautifully</p>
          </div>
        </Link>

        {token && (
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>

            <Link to="/add-job" className="primary-btn !px-4 !py-2.5 !text-sm">
              Add Job
            </Link>

            <button onClick={handleLogout} className="secondary-btn !px-4 !py-2.5 !text-sm">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;