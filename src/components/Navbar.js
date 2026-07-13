import "./Navbar.css";

function Navbar() {
  return (
    <header className="topbar">

      <div className="logo">

        <div className="logo-icon">
          🚀
        </div>

        <div>
          <h1>VYRA</h1>
          <small>AI Content Repurposing Platform</small>
        </div>

      </div>

      <div className="profile">

        <span className="welcome">
          Welcome back,
        </span>

        <strong>Tisha</strong>

      </div>

    </header>
  );
}

export default Navbar;