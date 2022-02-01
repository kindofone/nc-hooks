import { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import Todo from './Todo';
import useTimer from './useTimer';

function App() {
  const [id, setId] = useState(1);
  const seconds = useTimer();

  return (
    <div className="App">
      {seconds}
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>
      <button onClick={() => setId(4)}>4</button>
      <button onClick={() => setId(5)}>5</button>
      <button onClick={() => setId(6)}>6</button>
      <button onClick={() => setId(7)}>7</button>
      <button onClick={() => setId(8)}>8</button>
      <button onClick={() => setId(9)}>9</button>
      <button onClick={() => setId(10)}>10</button>
      <div>
        <h1>Posts</h1>
        <Post id={id} />
      </div>
      <div>
        <h1>Todos</h1>
        <Todo id={id} />
      </div>
    </div>
  );
}

export default App;
