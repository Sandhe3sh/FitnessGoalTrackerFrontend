// import React from "react";

// const Footer = () => (
//   <footer>
//     <p>&copy; 2025 Fitness Tracker</p>
//   </footer>
// );

// export default Footer;

import React from "react";

const Footer = () => {
  const footerStyle = {
    textAlign: "center",
    padding: "15px 0",
    backgroundColor: "#333",
    color: "#fff",
    position: "fixed",
    bottom: 0,
    width: "100%",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 Fitness Tracker</p>
    </footer>
  );
};

export default Footer;
