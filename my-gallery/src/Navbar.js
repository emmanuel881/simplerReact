import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Gallery</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Favorites">Favorites</Link>
        <Link
          to="/Upload"
          style={{
            background: "#28A745",
            borderRadius: "8px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          Upload
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
