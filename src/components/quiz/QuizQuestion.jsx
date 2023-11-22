import React, { useState } from 'react';
import QuizChoice from './QuizChoice';

import './quizquestion.scss';

const QuizQuestion = ({ questionData, onAnswerSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (value) => {
    setSelectedAnswer((prevSelectedAnswer) => {
      console.log('Previous Selected Answer:', prevSelectedAnswer);
      console.log('New Selected Answer:', value);
      return value;
    });
  };

  const handleSubmit = () => {
    onAnswerSubmit(selectedAnswer);
    setSelectedAnswer(null);
  };

  return (
    <div className='question'>
      <ul>
        {['a', 'b', 'c', 'd'].map((choiceId) => (
          <QuizChoice
            key={choiceId}
            id={choiceId}
            label={questionData[choiceId]}
            checked={selectedAnswer === choiceId}
            onChange={handleAnswerChange}
          />
        ))}
      </ul>
      <button id='submit' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default QuizQuestion;
