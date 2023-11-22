import React from 'react';
import './quizheader.scss'

const QuizHeader = ({ question }) => {
  return (
    <div className="quiz-header" data-testid='quiz-header'>
      <h2 id="question">{question}</h2>
    </div>
  );
};

export default QuizHeader;