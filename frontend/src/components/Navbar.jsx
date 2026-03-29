import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/add-job")}>Add Job</button>
      <button onClick={handleLogout}>Logout</button>
      <hr />
    </div>
  );
};

export default Navbar;