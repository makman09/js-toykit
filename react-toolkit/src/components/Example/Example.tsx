import React, { FC } from 'react';
import styles from './Example.module.scss';

interface ExampleProps {}

const Example: FC<ExampleProps> = () => (
  <div className={styles.Example} data-testid="Example">
    <h1>Example Content</h1>
    <h2>Example Component</h2>
    <h3>Example Component</h3>
    <h4>Example Component</h4>
    <h5>Example Component</h5>
    <h6>Example Component</h6>
  </div>
);

export default Example;
