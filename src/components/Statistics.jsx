import React from 'react';
import styles from './App.module.css'; // Importăm modulele CSS

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul className={styles.statisticsList}>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positiveFeedback}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
