import type { FC } from "react";
import * as motion from 'motion/react-client'

const Hangman: FC<{mistakes: number;}> = ({mistakes}) => {
  const gallows = [
    { id: 'base', d: 'M 20 240 L 120 240' },
    { id: 'pole', d: 'M 60 240 L 60 40' },
    { id: 'beam', d: 'M 60 40 L 140 40' },
    { id: 'rope', d: 'M 140 40 L 140 70' }
  ];

  const bodyParts = [
    { id: 'head', d: 'M 140 70 A 20 20 0 1 1 140 110 A 20 20 0 1 1 140 70' },
    { id: 'body', d: 'M 140 110 L 140 180' },
    { id: 'left-arm', d: 'M 140 130 L 105 165' },
    { id: 'right-arm', d: 'M 140 130 L 175 165' },
    { id: 'left-leg', d: 'M 140 180 L 110 225' },
    { id: 'right-leg', d: 'M 140 180 L 170 225' }
  ];

  return (
    <svg 
      viewBox="0 0 200 250" 
      width={300} 
      height={375}
    >
      {gallows.map((part) => (
        <path
          key={part.id}
          d={part.d}
          fill="none"
          stroke="#222"
          strokeWidth={4}
          strokeLinecap="round"
        />
      ))}

      {bodyParts.map((part, index) => (
        <motion.path
          key={part.id}
          d={part.d}
          fill="none"
          stroke="#c0392b"
          strokeWidth={4}
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={1}
          initial={{strokeDashoffset: 1}}
          animate={{
            strokeDashoffset: index < mistakes ? 0 : 1
          }}
          transition={{duration: 0.5, ease: 'easeInOut'}}
        />
      ))}
    </svg>
  )
}

export default Hangman
