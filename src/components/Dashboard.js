// import React, { useEffect, useState } from "react";
// import { getEntries } from "../api";

// const Dashboard = () => {
//   const [entries, setEntries] = useState([]);
  
//   useEffect(() => {
//     fetchEntries();
//   }, []);

//   const fetchEntries = async () => {
//     const res = await getEntries();
//     setEntries(res.data);
//   };

//   const totalCalories = entries.reduce((sum, e) => sum + e.caloriesBurned, 0);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <p>Total Activities: {entries.length}</p>
//       <p>Total Calories Burned: {totalCalories}</p>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from "react";
import { getEntries } from "../api";

const Dashboard = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const res = await getEntries();
    setEntries(res.data);
  };

  const totalCalories = entries.reduce((sum, e) => sum + e.caloriesBurned, 0);

  const containerStyle = {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const titleStyle = {
    color: "#333",
    marginBottom: "15px",
  };

  const statStyle = {
    fontSize: "1.1rem",
    margin: "8px 0",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Dashboard</h2>
      <p style={statStyle}>Total Activities: {entries.length}</p>
      <p style={statStyle}>Total Calories Burned: {totalCalories}</p>
    </div>
  );
};

export default Dashboard;
