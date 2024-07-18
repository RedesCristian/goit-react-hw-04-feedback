import React from 'react';
import styles from './App.module.css'; // Importăm modulele CSS

const Feedback = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className={styles.cont}>
      <h1>Please leave feedback</h1>
      <button className={styles.feedbackButton} type="button" onClick={onGood}>
        Good
      </button>
      <button
        className={styles.feedbackButton}
        type="button"
        onClick={onNeutral}
      >
        Neutral
      </button>
      <button className={styles.feedbackButton} type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

export default Feedback;
