import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
  { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
  // Add more questions as needed
];

function Quiz({ score, setScore, currentQuestion, setCurrentQuestion }) {
  const navigate = useNavigate();

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate('/results');
    }
  };

  return (
    <div>
      <h2>{questions[currentQuestion].question}</h2>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswerOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
