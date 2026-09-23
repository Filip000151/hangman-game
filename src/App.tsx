import { useState, type ChangeEvent } from "react"
import * as motion from 'motion/react-client'
import Game from "./components/Game";

const App = () => {
  const [word, setWord] = useState<string | null>(null);
  const [wordInput, setWordInput] = useState('');

  const wordInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filtered = value.replace(/[^a-zA-ZčćšđžČĆŠĐŽ\s]/g, '');
    setWordInput(filtered.toUpperCase());
  }

  const startGame = () => {
    setWord(wordInput);
    setWordInput('');
  }
  return (
    <div className="h-screen flex flex-col items-center p-5 bg-gray-100">

      {word ? (
        <>
          <Game word={word} setWord={setWord} />
        </>
      ) : (
        <motion.div className="flex flex-col items-center mt-20" animate={{opacity: 1}} initial={{opacity: 0}}>
          <h2 className="font-semibold text-2xl mb-3">Enter Your Word</h2>
          <input 
            type="text" 
            value={wordInput}
            onChange={wordInputHandler}
            onKeyDown={(e) => e.key === 'Enter' && startGame()}
            className="border rounded-xl w-140 px-4 py-2 text-2xl font-semibold text-center focus:outline-none"
          />
          <button 
            onClick={() => startGame()} 
            className="mt-5 px-4 py-2 bg-amber-300 rounded-lg font-bold text-gray-600 cursor-pointer hover:bg-amber-200 transition-colors duration-150"
          >Start Game</button>
        </motion.div>
      )}
    </div>
  )
}

export default App
