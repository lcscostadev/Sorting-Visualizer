import React, { useState, useEffect } from 'react';
import { BarList } from './components';
import './App.css';

function App() {

  const [values, setValues] = useState([]);
  const [swappingBars, setSwappingBars] = useState([]);

  useEffect(() => {
    const initialValues = generateRandValues(50);
    setValues(initialValues);
  }, []);

  const generateRandValues = (length) => {
    const values = [];
    for (let i = 0; i < length; i++) {
      values.push(Math.floor(Math.random() * 100) + 1);
    }
    return values;
  }

  const handleSort = async () => {
    const sortedValues = [...values];
    for (let i = 0; i < sortedValues.length - 1; i++) {
      for (let j = 0; j < sortedValues.length - i - 1; j++) {
        setSwappingBars([j, j + 1]); //mark the swapping bars
        if (sortedValues[j] > sortedValues[j + 1]) {
          const temp = sortedValues[j];
          sortedValues[j] = sortedValues[j + 1];
          sortedValues[j + 1] = temp;
          setValues([...sortedValues]); //update the state and re-render
          await new Promise(resolve => setTimeout(resolve, 30)); //delay for 100ms
        }
        setSwappingBars([]); //unmark the swapping bars
      }
    }
  };

  return (
    <>
      <div className="sorting-visualizer">
        <h1>Sorting Visualizer</h1>
        <div className="item-list">
          {/* List of items will be rendered here */}
          <BarList values={values} swappingBars={swappingBars} />

        </div>
        <button onClick={() => setValues(generateRandValues(50))}>Generate Random Values</button>
        <button onClick={handleSort}>Sort</button>
      </div>
    </>
  )
}

export default App;