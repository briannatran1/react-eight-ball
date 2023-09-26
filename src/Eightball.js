import { useState } from 'react';
import answers from "./answers";
import getRandom from "./getRandom";
import './Eightball.css';

/** displays color and message on eightball */
/**
 * props:
 * answers
 * ex: [{msg: "this is your fate"...}]
 *
 * states:
 * color
 * message
 *
 * components:
 * Eightball
 */
function Eightball({ answers }) {
  const [color, setColor] = useState('black');
  const [message, setMessage] = useState('Think of a Question.');
  const randomAnswer = getRandom(answers);

  /** changes state of color */
  console.log(`our random answer is`, randomAnswer);
  function handleClick(evt){
    setColor(randomAnswer.color);
    setMessage(randomAnswer.msg);
  }

  return (
    <div className='Eightball' style= {{backgroundColor: `${ color }`}} >
      <p className='Eightball-message' onClick={handleClick} >{message}</p>
    </div>
  );
}

export default Eightball;