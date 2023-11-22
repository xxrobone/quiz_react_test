// Quiz.js
import React, { useState } from 'react';
import QuizHeader from './QuizHeader';
import QuizQuestion from './QuizQuestion';
import { quizData } from '../../assets/quizData';

import './quiz.scss';

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSubmit = () => {
    const currentQuizData = quizData[currentQuiz];
  
    console.log('Selected Answer:', selectedAnswer);
    console.log('Correct Answer:', currentQuizData.correct);
  
    if (selectedAnswer === currentQuizData.correct) {
      setScore(score + 1);
    }
  
    if (currentQuiz + 1 < quizData.length) {
      // Set a timeout to reset selectedAnswer after 500 milliseconds
      setTimeout(() => {
        setSelectedAnswer(null);
        setCurrentQuiz(currentQuiz + 1);
      }, 500);
    } else {
      // If it's the last question, reset immediately
      setCurrentQuiz(quizData.length);
      setSelectedAnswer(null);
    }
  };

  const handleReload = () => {
    setCurrentQuiz(0);
    setScore(0);
  };

  const currentQuizData = quizData[currentQuiz];

  return (
    <div className='quiz-container' id='quiz'>
      {currentQuiz < quizData.length ? (
        <>
          <QuizHeader question={currentQuizData.question} />
          <QuizQuestion
            questionData={currentQuizData}
            selectedAnswer={selectedAnswer}
            onAnswerChange={setSelectedAnswer}
            onAnswerSubmit={handleAnswerSubmit}
          />
        </>
      ) : (
        <div className='quiz-result'>
          <h2>
            {' '}
            You answered correctly on: <br /> {score} / {quizData.length}{' '}
            questions{' '}
          </h2>
          <button onClick={handleReload}>Reload</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
