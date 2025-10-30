import React from "react";

function PersonCard({ person }) {
  const calculateYears = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    const diffYears = (today - start) / (1000 * 60 * 60 * 24 * 365);
    return diffYears;
  };

  const yearsWorked = calculateYears(person.startDate);

  let message = "";
  if (yearsWorked >= 4.9 && yearsWorked < 5.1) {
    message = "🎉 Schedule recognition meeting.";
  } else if (yearsWorked >= 9.9 && yearsWorked < 10.1) {
    message = "🎉 Schedule recognition meeting.";
  } else if (yearsWorked < 0.5) {
    message = "🔔 Schedule probation review.";
  }

  const animalEmoji = {
    Owl: "🦉",
    Cat: "🐱",
    Dog: "🐶",
    Fox: "🦊",
    Rabbit: "🐰",
    Elephant: "🐘",
    Lion: "🦁",
  }[person.animal] || "❓";

  return (
    <div style={styles.card}>
      <h2>{person.name}</h2>
      <p><strong>Title:</strong> {person.title}</p>
      <p><strong>Department:</strong> {person.department}</p>
      <p><strong>Location:</strong> {person.location}</p>
      <p><strong>Salary:</strong> €{person.salary}</p>
      <p><strong>Start Date:</strong> {person.startDate}</p>
      <p><strong>Years Worked:</strong> {yearsWorked.toFixed(1)}</p>
      {message && <p style={styles.message}>{message}</p>}
      <p><strong>Phone:</strong> {person.phone}</p>
      <p><strong>Email:</strong> {person.email}</p>
      <p><strong>Favorite Animal:</strong> {animalEmoji}</p>
      <p><strong>Skills:</strong> {person.skills.join(", ")}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  message: {
    color: "#e63946",
    fontWeight: "bold",
  },
};

export default PersonCard;
