import React from "react";
import styles from "./Header.module.css";
import feedLogo from "../../Assets/newsfeed.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={feedLogo} alt="Logo Feed" />
      <h1>The Feed</h1>
    </header>
  );
}
