import { useState } from "react";

export function useHangman(word: string) {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);


  const isWordGuessed = word.split('').every(l => l === ' ' || guesses.includes(l));

  const isWin = isWordGuessed && mistakes < 6;
  const isGameOver = mistakes === 6 || isWin;

  const guess = (letter: string) => {
    if (isGameOver || guesses.includes(letter)) return;
    setGuesses(prev => [...prev, letter]);

    if (!word.includes(letter)) {
      setMistakes(m => m + 1);
      return false;
    }
    
    return true;
  }

  return { guesses, mistakes, guess, isGameOver, isWin };
}