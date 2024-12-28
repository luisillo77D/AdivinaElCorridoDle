import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { songs } from '../data/songs';
import { SongSuggestions } from './SongSuggestions';

export function SearchForm({ guess, onGuessChange, onSubmit }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const formRef = useRef(null);
  
  const filteredSongs = songs
    .filter(song => 
      song.titulo.toLowerCase().includes(guess.toLowerCase())
    )
    .map(song => song.titulo);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSongSelect = (title) => {
    onGuessChange(title);
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    onGuessChange(e.target.value);
    setShowSuggestions(true);
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="mb-8 relative">
      <input
        type="text"
        value={guess}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
        placeholder="Escribe el título del corrido"
        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white pr-12"
        autoComplete="off"
      />
      <button 
        type="submit" 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 hover:text-yellow-400"
      >
        <Search size={20} />
      </button>
      
      <SongSuggestions
        suggestions={filteredSongs}
        onSelect={handleSongSelect}
        visible={showSuggestions && guess.length > 0}
      />
    </form>
  );
}