import React, { useState, useEffect } from "react";
import './styles/App.css'
import randomCharacters from './helpers/characters.js'
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Instructions from './components/Instructions';

const App = () => {
  // Initialize
  const [score, setScore] = useState(0); // Score
  const [best, setBest] = useState(0); // Best Score
  const [guessed, setGuessed] = useState([]); // Guesses

  // Reset game
  const resetGame = () => {
    setGuessed([]);
    setScore(0);
  }

  // Handle Click
  const handleClick = (character) => {
    if (guessed.includes(character)) {
      resetGame();
      return;
    }
    setGuessed(guessed.concat(character));
    setScore(score + 1);
    if (score >= best) { setBest(best + 1) }
  }

  // Get best score from localStorage on component mount
  useEffect(() => {
    const storedBest = parseFloat(localStorage.getItem('Best'));
    if (storedBest) { setBest(storedBest); }
  }, []);

  // Save best score in localStorage whenever 'best' updates
  useEffect(() => {
    localStorage.setItem('Best', best);
  }, [best]);

  // Check if player has clicked all cards
  useEffect(() => {
    if (score === 22) {
      resetGame();
      alert('You have completed the game!')
    }
  }, [score])

  return (
    <>
      <Header score={score} best={best}/>
      <main>
        <div className='CardGrid'>
          {randomCharacters().map((character) => <Card key={character.id} character={character} handleClick={handleClick}/>)}
        </div>
        <Footer/>
      </main>
      <Instructions/>
    </>
  )
}

export default App;
