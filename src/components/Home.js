// import React from "react";
// import GoalForm from "./GoalForm";

// const Home = () => (
//   <div>
//     <h1>Welcome to Fitness Tracker</h1>
//     <GoalForm />
//   </div>
// );

// export default Home;
import React from "react";
import GoalForm from "./GoalForm";

const Home = () => {
  const homeStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f0f8ff",
    minHeight: "100vh"
  };

  const headingStyle = {
    color: "#333",
    marginBottom: "20px"
  };

  return (
    <div style={homeStyle}>
      <h1 style={headingStyle}>Welcome to Fitness Tracker</h1>
      <GoalForm />
    </div>
  );
};

export default Home;
