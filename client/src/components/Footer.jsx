// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© Abhinav</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#222",
    color: "#fff",
    position: "fixed",
    bottom: 0,
    width: "100%",
    
  },
};

export default Footer;
