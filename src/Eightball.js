import { useState } from 'react';
import answers from "./answers";
import getRandom from "./getRandom";
import './Eightball.css';

/** displays color and message on eightball */

function Eightball({ answers }) {
  const [color, setColor] = useState('black');
  const [message, setMessage] = useState('Think of a Question.');
  const randomAnswer = getRandom(answers);

  /** changes state of color */
  function changeColor() {
    setColor(randomAnswer.color);
  }

  /** changes state of message */
  function changeMessage() {
    setMessage(randomAnswer.msg);
  }

  return (
    <div className='Eightball' style={{ color: { color } }}>
      <p className='Eightball-message' onClick={changeMessage}>{message}</p>
    </div>
  );
}

export default Eightball;