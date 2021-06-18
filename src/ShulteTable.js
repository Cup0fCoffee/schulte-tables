import { shuffleArray } from './utils';

function ShulteTable({size=3}) {
  const arr = shuffleArray(Array.from(new Array(size*size).keys()));
  return (
    <div role="grid">
      {new Array(size).fill().map((_, row) => {
        return (
          <div role="row" key={row}>
            {new Array(size).fill().map((_, col) => {
              return (
                <div role="cell" key={col}>
                  {arr[size*row+col]+1}
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
