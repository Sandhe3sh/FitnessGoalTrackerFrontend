// import React, { useState } from "react";
// import { createEntry } from "../api";

// const GoalForm = () => {
//   const [activity, setActivity] = useState("");
//   const [duration, setDuration] = useState("");
//   const [calories, setCalories] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createEntry({
//       activity,
//       duration: Number(duration),
//       caloriesBurned: Number(calories),
//       date: new Date().toISOString().split("T")[0]
//     });
//     setActivity("");
//     setDuration("");
//     setCalories("");
//     alert("Entry added!");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input placeholder="Activity" value={activity} onChange={(e) => setActivity(e.target.value)} required />
//       <input type="number" placeholder="Duration (min)" value={duration} onChange={(e) => setDuration(e.target.value)} required />
//       <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} required />
//       <button type="submit">Add Entry</button>
//     </form>
//   );
// };

// export default GoalForm;

import React, { useState } from "react";
import { createEntry } from "../api";

const GoalForm = () => {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEntry({
      activity,
      duration: Number(duration),
      caloriesBurned: Number(calories),
      date: new Date().toISOString().split("T")[0]
    });
    setActivity("");
    setDuration("");
    setCalories("");
    alert("Entry added!");
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "300px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif"
  };

  const inputStyle = {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px"
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer"
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        placeholder="Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Duration (min)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Add Entry</button>
    </form>
  );
};

export default GoalForm;
