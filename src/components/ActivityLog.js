// import React, { useEffect, useState } from "react";
// import { getEntries, deleteEntry } from "../api";

// const ActivityLog = () => {
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     fetchEntries();
//   }, []);

//   const fetchEntries = async () => {
//     const res = await getEntries();
//     setEntries(res.data);
//   };

//   const handleDelete = async (id) => {
//     await deleteEntry(id);
//     fetchEntries();
//   };

//   return (
//     <div>
//       <h2>Activity Log</h2>
//       <ul>
//         {entries.map(e => (
//           <li key={e.id}>
//             {e.date} - {e.activity} - {e.duration} min - {e.caloriesBurned} cal
//             <button onClick={() => handleDelete(e.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ActivityLog;

import React, { useEffect, useState } from "react";
import { getEntries, deleteEntry } from "../api";

const ActivityLog = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const res = await getEntries();
    setEntries(res.data);
  };

  const handleDelete = async (id) => {
    await deleteEntry(id);
    fetchEntries();
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    color: "#333",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const listItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 8px",
    marginBottom: "8px",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
    borderRadius: "4px",
  };

  const buttonStyle = {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Activity Log</h2>
      <ul style={listStyle}>
        {entries.map((e) => (
          <li key={e.id} style={listItemStyle}>
            {e.date} - {e.activity} - {e.duration} min - {e.caloriesBurned} cal
            <button
              style={buttonStyle}
              onClick={() => handleDelete(e.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
