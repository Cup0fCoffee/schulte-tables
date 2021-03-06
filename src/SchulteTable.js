import { useState, useEffect } from 'react';
import { shuffleArray } from './utils';
import './SchulteTable.css';

function SchulteTable({size=3, width=100, onComplete=()=>{}}) {
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
    const grid = document.querySelector('.schulte-table');
    if (!grid) return;
    const cellHeight = grid.offsetHeight / size;
    setFontSize(cellHeight * 0.3);
  };

  const resetTable = () => {
    setCount(0);
    setGrid(generateNumbersGrid);
  };

  const [count, setCount] = useState(0);
  const [grid, setGrid] = useState([]);
  const [fontSize, setFontSize] = useState(12);

  useEffect(() => {
    resetTable();
    adjustCellsFontSize();
    window.addEventListener('load', adjustCellsFontSize);
    window.addEventListener('resize', adjustCellsFontSize);

    return () => {
      window.removeEventListener('load', adjustCellsFontSize);
      window.removeEventListener('resize', adjustCellsFontSize);
    };
  }, [size]);

  useEffect(() => {
    if (count === size*size) {
      onComplete();
      resetTable();
    }
  }, [count]);

  useEffect(() => {
    adjustCellsFontSize();
  }, [width]);

  return (
    <div className="schulte-table" style={{width: width + '%'}} role="grid">
      {grid.map((arr, row) => (
        <div className="schulte-table__row" role="row" key={row}>
          {arr.map((n, col) => (
            <div
              className="schulte-table__cell"
              onClick={() => { if (n === count) setCount(count + 1); }}
              role="cell"
              style={ { fontSize } }
              key={col}>
              <div className="schulte-table__cell-text">
                {n+1}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SchulteTable;
