import { type FC } from "react"
import * as motion from 'motion/react-client'
import Hangman from "./Hangman";
import { useAnimate } from "motion/react";
import { useHangman } from "../hooks";

type GameProps = {
  word: string;
  setWord: (word: string | null) => void;
}

const Game: FC<GameProps> = ({ word, setWord }) => {
  const { guesses, mistakes, isGameOver, isWin, guess } = useHangman(word);
  const [scope, animate] = useAnimate();

  const keyboardLetters = ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'Š', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Č', 'Ć', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', 'Đ', 'Ž'];
  const letters = Array.from(word).map(letter => {
    if (letter === ' ') return ' ';
    return guesses.includes(letter) ? letter : '_';
  });

  const handleClick = (letter: string) => {
    const isCorrectGuess = guess(letter);
    if (!isCorrectGuess) {
      animate(`[data-letter="${letter}"]`, {
        borderColor: ['#000000', '#e60808', '#000000'],
        color: ['#000000', '#e60808', '#000000'],
        scale: [1, 1.1, 1]
      }, { duration: 0.3 });
    }
  };

  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="flex flex-col items-center">
      {isGameOver && (
        <motion.h2
          className="text-5xl font-semibold"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
        >
          You {isWin ? 'Win' : 'Lose'}.
          <span className="hover:opacity-60 cursor-pointer transition-opacity duration-150" onClick={() => setWord(null)}> Click here to reset.</span>
        </motion.h2>
      )}

      <Hangman mistakes={mistakes} />

      <div className="mt-5 flex flex-col items-center gap-20">
        <div className="flex gap-5 text-7xl">
          {letters.map((letter, index) => (
            <div
              key={index}
              className="select-none"
            >
              {isGameOver ? (
                <p className={letter === '_' ? 'text-red-500' : ''}>
                  {letter !== '_' ? letter : word[index]}
                </p>
              ) : (
                <p>
                  {letter}
                </p>
              )}
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-11 gap-2"
          ref={scope}
        >
          {keyboardLetters.map((letter) => {
            const wasGuessed = guesses.includes(letter);
            const isCorrect = wasGuessed && word.includes(letter);
            return (
              <motion.button
                onClick={() => handleClick(letter)}
                key={letter}
                disabled={isGameOver || wasGuessed}
                className={`text-4xl font-semibold border-2 flex justify-center items-center px-4 py-3 rounded-xl select-none ${!wasGuessed ? 'cursor-pointer' : ''}`}
                animate={{
                  opacity: wasGuessed && !isCorrect ? 0.25 : 1,
                  backgroundColor: isCorrect ? '#0bb5fb' : '#ffffff',
                  color: isCorrect ? '#ffffff' : '#000000',
                  borderColor: '#000000'
                }}
                whileHover={
                  !wasGuessed && !isGameOver ? {
                    backgroundColor: '#7de2fa'
                  } : undefined
                }
                data-letter={letter}
              >
                {letter}
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Game
