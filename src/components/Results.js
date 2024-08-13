import React from 'react';

function Results({ score, totalQuestions }) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div>
      <h2>Your Score: {percentage.toFixed(2)}%</h2>
    </div>
  );
}

export default Results;
