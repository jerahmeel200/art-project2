import React from "react";
import styles from "./styles.module.css";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

function Icons({ icon: Icon }) {
  return (
    <div className={styles.wrapper}>
      <Icon />
    </div>
  );
}

export default Icons;
