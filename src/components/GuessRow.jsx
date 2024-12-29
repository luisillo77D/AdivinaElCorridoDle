import React from 'react';
import { getColorClass } from '../utils/colors';

export function GuessRow({ attempt, correctAnswer }) {
  return (
    <div className="grid grid-cols-5 gap-2 mb-2">
      {Object.entries(attempt).map(([field, value], index) => (
        <div
          key={index}
          className={`${getColorClass(value, Object.values(correctAnswer)[index], field)} 
            p-2 rounded text-center text-white flex items-center justify-center`}
        >
          {Array.isArray(value) ? value.map((artist)=>{
            return artist + ' '
          }) : value}
        </div>
      ))}
    </div>
  );
}