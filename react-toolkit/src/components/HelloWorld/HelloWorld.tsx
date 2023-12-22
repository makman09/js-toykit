import React from 'react';
import logo from './logo.svg';
import styles from './HelloWorld.module.scss';

interface HelloWorldProps {}

function HelloWorld(props?: HelloWorldProps) {
  return (
    <div className={styles.HelloWorld} data-testid="HelloWorld">
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
};

export default HelloWorld;
