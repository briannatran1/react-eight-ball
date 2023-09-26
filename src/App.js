import './App.css';
import Eightball from './Eightball';
import answers from "./answers";

function App() {
  return (
    <div className='Eightball-background'>
      <Eightball answers={answers} />
    </div>
  );
}

export default App;
