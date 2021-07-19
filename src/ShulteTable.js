import { useState, useEffect } from 'react';
import { shuffleArray } from './utils';
import './ShulteTable.css';

function ShulteTable({size=3, onComplete=() => {}}) {
  const generateNumbersGrid = () => {
    return shuffleArray(Array.from(Array(size*size).keys()))
      .reduce((acc, cur, i) => {
        if (i % size === 0)
          acc.push([]);
        acc[acc.length - 1].push(cur);
        return acc;
      }, []);
  };

  const [count, setCount] = useState(0);
  const [grid, setGrid] = useState(generateNumbersGrid);

  useEffect(() => {
    if (count === size*size) {
      onComplete();
      setCount(0);
      setGrid(generateNumbersGrid());
    }
  }, [count]);

  return (
    <div className="shulte-table" role="grid">
      {grid.map((arr, row) => (
        <div className="shulte-table__row" role="row" key={row}>
          {arr.map((n, col) => (
            <div
              className="shulte-table__cell"
              onClick={() => { if (n === count) setCount(() => count + 1); }}
              role="cell"
              key={col}>
              <div className="shulte-table__cell-text">
                {n+1}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ShulteTable;
