import { shuffleArray } from './utils';
import './ShulteTable.css';

function ShulteTable({size=3}) {
  const arr = shuffleArray(Array.from(new Array(size*size).keys()));
  return (
    <div className="shulte-table" role="grid">
      {new Array(size).fill().map((_, row) => {
        return (
          <div className="shulte-table__row" role="row" key={row}>
            {new Array(size).fill().map((_, col) => {
              return (
                <div className="shulte-table__cell" role="cell" key={col}>
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
