import React, { useState } from 'react';
import Feedback from './Feedback';
import Notification from './Notification';
import Statistics from './Statistics';
import styles from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? ((good / total) * 100).toFixed(2) : 0;
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div className={styles.container}>
      <Feedback
        onGood={() => setGood(good + 1)}
        onNeutral={() => setNeutral(neutral + 1)}
        onBad={() => setBad(bad + 1)}
      />
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};

export { App };
