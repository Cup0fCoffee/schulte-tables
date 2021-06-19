import { useState, useEffect } from 'react';
import { shuffleArray } from './utils';
import './ShulteTable.css';

function ShulteTable({size=3, onComplete=() => {}}) {
  const generateNumbers = () => {
    return shuffleArray(Array.from(Array(size*size).keys()));
  };

  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(generateNumbers);

  useEffect(() => {
    if (count === size*size) {
      onComplete();
      setCount(0);
      setArr(generateNumbers());
    }
  });

  return (
    <div className="shulte-table" role="grid">
      {Array(size).fill().map((_, row) => {
        return (
          <div className="shulte-table__row" role="row" key={row}>
            {Array(size).fill().map((_, col) => {
              return (
                <div
                  className="shulte-table__cell"
                  onClick={() => { if (arr[size*row+col] === count) setCount(count + 1) }}
                  role="cell"
                  key={col}>
                  <div className="shulte-table__cell-text">
                    {arr[size*row+col]+1}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ShulteTable;
