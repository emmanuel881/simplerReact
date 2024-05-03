const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Gallery</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/liked">Favorites</a>
        <a
          href="/upload"
          style={{
            background: "#28A745",
            borderRadius: "8px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          Upload
        </a>
      </div>
    </div>
  );
};

export default Navbar;
