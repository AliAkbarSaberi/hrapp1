import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© WP25K</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f4f4f4",
    color: "#333",
    textAlign: "center",
    padding: "10px 0",
    marginTop: "40px",
    fontFamily: "Arial, sans-serif",
  },
};

export default Footer;
