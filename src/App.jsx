import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { GuessGrid } from './components/GuessGrid';
import { ColorLegend } from './components/ColorLegend';
import {dailySong, songs} from './data/songs.js';
function App() {
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState([]);

  // Example correct answer (in a real app, this would be fetched from a backend)
  const correctAnswer = dailySong[0];



  const handleSubmit = (e) => {
    e.preventDefault();
    const guessSong = songs.find((song) => song.titulo.toLowerCase() === guess.toLowerCase());
    if (!guessSong) {
      return alert('No se encontró la canción');
    }
    const newAttempt = {
      titulo: guessSong.titulo,
    };
    setAttempts([...attempts, guessSong]);
    setGuess('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-3xl mx-auto">
        <Header />
        <SearchForm 
          guess={guess}
          onGuessChange={setGuess}
          onSubmit={handleSubmit}
        />
        <GuessGrid 
          attempts={attempts}
          correctAnswer={correctAnswer}
        />
        <ColorLegend />
      </div>
    </div>
  );
}

export default App;
