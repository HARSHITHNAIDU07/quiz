import { useState } from 'react';
import '../quiz.css';
import Results from './Results.jsx';
const Questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
    answer: "Harper Lee"
  }
];

function Quiz() {
  const [qno, setQno] = useState(0);
  const [cur, setCur] = useState('Next');




  const [selectedOptions, setSelectedOptions] = useState(Array(Questions.length).fill(null));

  function handleOptionSelect(option) {
    const updated = [...selectedOptions];
    updated[qno] = option;
    setSelectedOptions(updated);
  }

  function handleNext() {
    if (qno === Questions.length - 1) {
      setCur('Submit');
      
       
    } else {
      setQno(qno + 1);
      
    }
  }

  const currentQuestion = Questions[qno];
  const selected = selectedOptions[qno];

if(cur==='Submit'){
        return(
            <Results questions={Questions} selected={selectedOptions}/>
        )
    }

  return (
    <>
      <div className='box'>
        <h2>Welcome to the Quiz</h2>
        <div className='question'>{currentQuestion.question}</div>

        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option ${selected === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}

        <button className='nav' onClick={handleNext}>{cur}</button>
      </div>
    </>
  );
}

export default Quiz;
