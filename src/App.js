import './App.css';
import CardAll from './components/CardAll';
import { useState, useEffect } from 'react'

function App() {

  const [quotes, setQuotes] = useState([]);
  const url = "https://api.quotable.io/random";
  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
    window.open(twitterUrl, "_blank");
  };

  const { content, author, dateAdded } = quotes;
  return (
    <div className="App">
      <div>
        <h1 style={{ color: 'blue', }}>Quoto-Dice</h1>
      </div>
      <CardAll quotes={quotes} getQuote={getQuote} tweetQuote={tweetQuote} />
    </div>
  );
}

export default App;