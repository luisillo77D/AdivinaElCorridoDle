import React from 'react';

export function SongSuggestions({ suggestions, onSelect, visible }) {
  if (!visible || suggestions.length === 0) return null;

  return (
    <div className="absolute w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
      {suggestions.map((title, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onSelect(title)}
          className="w-full text-left px-4 py-2 hover:bg-gray-700 text-white first:rounded-t-lg last:rounded-b-lg"
        >
          {title}
        </button>
      ))}
    </div>
  );
}