import './App.css';
import InputTextarea from './components/input';
import Show from './components/show';
import { useState } from 'react';

function App() {

  const [text, setText] = useState(String());

  const input = input => {
    setText(input.trim());
  }

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <h3>Enter some text below:</h3>
      <InputTextarea 
        onChange={input} 
      />
      <Show 
        text={text} 
      />
    </div>
  );
}

export default App;
