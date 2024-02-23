import React, { useState } from 'react';
import Sentiment from 'sentiment';

function SentimentAnalyzer() {
  const [text, setText] = useState('');
  const [sentimentResult, setSentimentResult] = useState(null);

  const analyzeSentiment = () => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    setSentimentResult(result);
    console.log(result)
  };

  return (
    <div>
      <h1>Sentiment Analyzer</h1>
      <p>Enter text and analyze the sentiment</p>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
      />
      <br />
      <button onClick={analyzeSentiment}>Analyze Sentiment</button>
      {sentimentResult && (
        <div>
          <h2>Analysis Result</h2>
          <p>Score: {sentimentResult.score}</p>
          <p>Comparative: {sentimentResult.comparative}</p>
          <p>Positive Words: {sentimentResult.positive.join(', ')}</p>
          <p>Negative Words: {sentimentResult.negative.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default SentimentAnalyzer;
