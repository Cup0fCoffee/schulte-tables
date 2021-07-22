import { useState, useEffect } from 'react';
import { shuffleArray } from './utils';
import './ShulteTable.css';

function ShulteTable({size=3, onComplete=()=>{}}) {
  const generateNumbersGrid = () => {
    return shuffleArray(Array.from(Array(size*size).keys()))
      .reduce((acc, cur, i) => {
        if (i % size === 0)
          acc.push([]);
        acc[acc.length - 1].push(cur);
        return acc;
      }, []);
  };

  const adjustCellsFontSize = () => {
    const cell = document.querySelector('.shulte-table__cell');
    if (!cell) return;
    setFontSize(cell.offsetHeight * 0.3);
  };

  const resetTable = () => {
    setCount(0);
    setGrid(generateNumbersGrid);
  };

  const [count, setCount] = useState(0);
  const [grid, setGrid] = useState([]);
  const [fontSize, setFontSize] = useState(12);

  useEffect(() => {
    window.addEventListener('load', adjustCellsFontSize);
    window.addEventListener('resize', adjustCellsFontSize);

    return () => {
      window.removeEventListener('load', adjustCellsFontSize);
      window.removeEventListener('resize', adjustCellsFontSize);
    };
  }, []);

  useEffect(() => {
    resetTable();
    adjustCellsFontSize();
  }, [size]);

  useEffect(() => {
    if (count === size*size) {
      onComplete();
      resetTable();
    }
  }, [count]);

  return (
    <div className="shulte-table" role="grid">
      {grid.map((arr, row) => (
        <div className="shulte-table__row" role="row" key={row}>
          {arr.map((n, col) => (
            <div
              className="shulte-table__cell"
              onClick={() => { if (n === count) setCount(count + 1); }}
              role="cell"
              style={ { fontSize } }
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
