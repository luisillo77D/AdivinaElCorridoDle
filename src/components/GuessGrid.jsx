import { GuessRow } from './GuessRow';

export function GuessGrid({ attempts, correctAnswer }) {
  return (
    <>
      <div className="grid grid-cols-5 gap-2 mb-4 text-center text-sm font-medium">
        <div>Título</div>
        <div>Artista</div>
        <div>Año</div>
        <div>Álbum</div>
        <div>Popularidad</div>
      </div>
      {attempts.map((attempt, index) => (
        <GuessRow key={index} attempt={attempt} correctAnswer={correctAnswer} />
      ))}
    </>
  );
}