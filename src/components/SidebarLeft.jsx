import React from "react";

const SidebarLeft = () => {
  const styles = {
    container: {
      backgroundColor: "#f9f9f9",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
    },
    title: {
      backgroundColor: "#336699",
      color: "#fff",
      textAlign: "center",
      padding: "8px",
      fontWeight: "bold",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    link: {
      color: "#0000EE",
      textDecoration: "underline",
      display: "block",
      marginBottom: "6px",
      fontSize: "14px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>روابط الأعضاء</div>
      <ul style={styles.list}>
        <li>
          <a href="#home" style={styles.link}>
            الصفحة الرئيسية
          </a>
        </li>
        <li>
          <a href="#about" style={styles.link}>
            عن الموقع
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLeft;
