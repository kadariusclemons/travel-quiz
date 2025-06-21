import React, { useState } from 'react';
import { sendQuestion } from './api';

const questions = [
  "What is the most popular beach destination?",
  "Name a famous mountain range.",
  "Suggest an amusement park in the world.",
  "What is a scenic forest trail destination?",
];

function TravelQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const handleAsk = async () => {
    setLoading(true);
    const response = await sendQuestion(currentQuestion);
    setAnswer(response);
    setLoading(false);
  };

  const handleNext = () => {
    const nextIndex = (questionIndex + 1) % questions.length;
    setQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
    setAnswer('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>So You Think You Can Travel?</h1>
      <p>
        Test your knowledge about what our world has to offer, and find out how
        you can bring the world a bit closer after you finish our quizzes.
        Beat every category for recommendations on where to go next!
      </p>
      
      <div style={{ margin: '20px 0' }}>
        <p><strong>Question:</strong> {currentQuestion}</p>
        <button onClick={handleAsk} disabled={loading}>
          {loading ? 'Thinking...' : 'Ask Our Travel Bot'}
        </button>
        {answer && (
          <div style={{ marginTop: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <strong>Response:</strong> {answer}
          </div>
        )}
      </div>
      
      <div>
        <button onClick={handleNext}>Next Question</button>
      </div>
    </div>
  );
}

export default TravelQuiz;
