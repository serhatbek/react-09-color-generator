import './App.css';
import { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#2e8681'
            className={`${error === true ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            Generate
          </button>
        </form>
      </section>
      <section className='colors'>
        <h4>List goes here</h4>
      </section>
    </>
  );
}

export default App;
