import React from "react";
import logoSrc from "./react-redux-toolkit-logo.svg";
import styles from "./ReactReduxToolkit.module.css";

export const ReactReduxToolkit: React.FC = ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <img src={logoSrc} className={styles.logo} alt="logo" />
      {children}
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className={styles.link}
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className={styles.link}
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className={styles.link}
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className={styles.link}
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </header>
  </div>
);
