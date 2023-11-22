import React from 'react';
import './quizchoice.scss';

const QuizChoice = ({ id, label, checked, onChange }) => {
  const handleInputChange = () => {
    onChange(id);
  };

  return (
    <li className='choice'>
      <input
        type='radio'
        id={id}
        name='answer'
        className='answer'
        value={id}
        checked={checked}
        onChange={handleInputChange}
      />
      <label htmlFor={id}>{label}</label>
    </li>
  );
};

export default QuizChoice;