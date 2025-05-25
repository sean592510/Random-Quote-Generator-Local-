import React, { useState, useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" }
  ];

  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    setQuote(selectedQuote.text);
    setAuthor(selectedQuote.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(
    quote
  )}" - ${encodeURIComponent(author)}`;

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-dark">
      <div id="quote-box" className="card p-4 bg-light text-dark">
        <div id="text" className="card-text fs-4 mb-3">
          <i className="bi bi-quote"></i> {quote}
        </div>
        <div id="author" className="card-text text-end fst-italic mb-3">
          - {author}
        </div>
        <div className="d-flex justify-content-between">
          <a
            id="tweet-quote"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <i className="bi bi-twitter"></i> Tweet
          </a>
          <button
            id="new-quote"
            onClick={handleNewQuote}
            className="btn btn-success"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
