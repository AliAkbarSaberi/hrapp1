import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1>hrApp - Step 2</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#004aad",
    color: "white",
    textAlign: "center",
    padding: "15px 0",
    fontFamily: "Arial, sans-serif",
  },
};

export default Header;
