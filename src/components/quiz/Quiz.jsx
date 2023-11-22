import React, { useState } from 'react';
import QuizHeader from './QuizHeader';
import QuizQuestion from './QuizQuestion';
import { quizData } from '../../assets/quizData';

import './quiz.scss';

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(quizData.length).fill(null)
  );
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSubmit = (selectedAnswer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuiz] = selectedAnswer;
    setSelectedAnswers(updatedAnswers);

    if (selectedAnswer === quizData[currentQuiz].correct) {
      setScore(score + 1);
    }

    if (currentQuiz + 1 < quizData.length) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleReload = () => {
    setCurrentQuiz(0);
    setScore(0);
    setSelectedAnswers(Array(quizData.length).fill(null));
    setQuizCompleted(false);
  };

  const currentQuizData = quizData[currentQuiz];

  return (
    <div className='quiz-container' id='quiz' data-testid='quiz'>
      {quizCompleted ? (
        <div className='quiz-result'>
          <h3>You answered correctly on:</h3>
          <h4>
            {score} / {quizData.length} questions{' '}
          </h4>
          <h3 className='special'>Details:</h3>
          <ul>
            {quizData.map((question, index) => (
              <li key={index}>
                Question {index + 1}:{' '}
                <span
                  className={`${
                    selectedAnswers[index] === question.correct
                      ? 'right'
                      : 'wrong'
                  }`}
                >
                  {selectedAnswers[index] === question.correct
                    ? 'Correct'
                    : 'Wrong'}
                </span>
              </li>
            ))}
          </ul>
          <button onClick={handleReload}>Reload</button>
        </div>
      ) : (
        <>
          <QuizHeader question={currentQuizData.question} />
          <QuizQuestion
            questionData={currentQuizData}
            selectedAnswer={selectedAnswers[currentQuiz]}
            onAnswerSubmit={handleAnswerSubmit}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
