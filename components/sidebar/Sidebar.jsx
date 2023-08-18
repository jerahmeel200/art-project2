import React from "react";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.container}>
      <ul>
        <li>All</li>
        <li>Originals</li>
        <li>Hip Hop Art</li>
        <li>Beauty And Aesthetic</li>
        <li>Sport And Sneakers</li>
        <li>Activism</li>
        <li>Erotic</li>
      </ul>
    </div>
  );
}

export default Sidebar;
