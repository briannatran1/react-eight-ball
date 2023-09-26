import './App.css';
import Eightball from './Eightball';
import answers from "./answers";

/** renders and eightball on the DOM
 *
 * props:
 * none
 *
 * states:
 * none
 *
 * components:
 * App -> Eightball
 */
function App() {
  return (
    <div className='Eightball-background'>
      <Eightball answers={answers} />
    </div>
  );
}

export default App;
