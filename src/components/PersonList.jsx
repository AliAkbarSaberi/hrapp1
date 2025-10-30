import React from "react";
import PersonCard from "./PersonCard";

function PersonList({ employees }) {
  return (
    <div style={styles.list}>
      {employees.map((emp) => (
        <PersonCard key={emp.id} person={emp} />
      ))}
    </div>
  );
}

const styles = {
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "15px",
    padding: "20px",
  },
};

export default PersonList;
