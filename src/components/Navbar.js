// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => (
//   <nav>
//     <h2>Fitness Tracker</h2>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/dashboard">Dashboard</Link></li>
//       <li><Link to="/activity-log">Activity Log</Link></li>
//     </ul>
//   </nav>
// );

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#0077b6",
    color: "#fff",
  };

  const titleStyle = {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  };

  return (
    <nav style={navStyle}>
      <h2 style={titleStyle}>Fitness Tracker</h2>
      <ul style={ulStyle}>
        <li><Link style={linkStyle} to="/">Home</Link></li>
        <li><Link style={linkStyle} to="/dashboard">Dashboard</Link></li>
        <li><Link style={linkStyle} to="/activity-log">Activity Log</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
