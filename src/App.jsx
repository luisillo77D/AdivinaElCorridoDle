import  { useState } from 'react';
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

  const validacion = (guessSong) => {
    const areArtistsEqual = (guessSong.artista.length === correctAnswer.artista.length) &&
      guessSong.artista.every((artist, index) => artist === correctAnswer.artista[index]);
    if (guessSong.nombre === correctAnswer.nombre &&
      guessSong.album === correctAnswer.album &&
    areArtistsEqual ) {
    alert('¡Adivinaste la canción!');
  }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const guessSong = songs.find((song) => song.titulo.toLowerCase() === guess.toLowerCase());
    if (!guessSong) {
      return alert('No se encontró la canción');
    }
    setAttempts([...attempts, guessSong]);
    validacion(guessSong);
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
