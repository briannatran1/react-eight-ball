import { useState } from 'react';
import answers from "./answers";
import getRandom from "./getRandom";
import './Eightball.css';

/** displays color and message on eightball */
/**
 * props:
 * answers
 * ex: [{msg: "this is your fate", color: 'red'}...]
 *
 * states:
 * color
 * message
 *
 * components:
 * Eightball
 */

// can use default value for answers
function Eightball({ answers }) {
  const [color, setColor] = useState('black');
  const [message, setMessage] = useState('Think of a Question.');

  /** changes state of color */
  function handleClick(evt) {
    const randomAnswer = getRandom(answers);
    setColor(randomAnswer.color);
    setMessage(randomAnswer.msg);
  }

  return (
    <div className='Eightball' style={{ backgroundColor: color }} >
      <p className='Eightball-message' onClick={handleClick} >{message}</p>
    </div>
  );
}

export default Eightball;