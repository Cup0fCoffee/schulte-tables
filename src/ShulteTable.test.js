import {
  render,
  screen,
  getAllByRole,
  queryByText,
  fireEvent
} from '@testing-library/react';
import ShulteTable from './ShulteTable';


const getNumbersFromGrid = (grid) => {
  return Array.from(grid.querySelectorAll('.shulte-table__cell-text'))
    .map((cellText) => cellText.textContent);
};


describe('ShulteTable Component Tests', () => {

  beforeAll(() => {
    Object.defineProperties(window.HTMLElement.prototype, {
      offsetHeight: {
        get: () => 100,
      }
    });
  });

  it('renders 3x3 by default', () => {
    render(<ShulteTable />);
    const grid = screen.getByRole('grid');
    const rows = getAllByRole(grid, 'row');
    expect(rows.length).toBe(3);
    rows.forEach((row) => {
      const cells = getAllByRole(row, 'cell');
      expect(cells.length).toBe(3);
    });
  });

  it.each([
    3, 5, 7
  ])('renders grid with equal sides', (size) => {
    render(<ShulteTable size={size} />);
    const grid = screen.getByRole('grid');
    const rows = getAllByRole(grid, 'row');
    expect(rows.length).toBe(size);
    rows.forEach((row) => {
      const cells = getAllByRole(row, 'cell');
      expect(cells.length).toBe(size);
    });
  });

  it.each([
    3, 5, 7
  ])('renders grid with numbers from 1 to size^2', (size) => {
    render(<ShulteTable size={size} />);
    const grid = screen.getByRole('grid');
    Array(size*size).fill().forEach((_, i) => {
      const n = i + 1;
      const cell = queryByText(grid, new RegExp(`^${n}$`));
      expect(cell).not.toBeNull();
    });
  });

  it('exercise is complete if clicked all numbers in ascending order', () => {
    let completed = false;
    render(<ShulteTable onComplete={() => completed = true} />);
    Array(9).fill().forEach((_, i) => {
      const n = i + 1;
      const cell = screen.getByRole('cell', { name: n.toString() });
      fireEvent.click(cell);
    });
    expect(completed).toBe(true);
  });

  it('can not complete by clicking the same cell', () => {
    let completed = false;
    render(<ShulteTable onComplete={() => completed = true} />);
    Array(9).fill().forEach(() => {
      const cell = screen.getByRole('cell', { name: '1' });
      fireEvent.click(cell);
    });
    expect(completed).toBe(false);
  });

  it('does not change order after clicks', () => {
    render(<ShulteTable />);
    const grid = screen.getByRole('grid');
    const cellsNumbers = getNumbersFromGrid(grid);

    fireEvent.click(screen.getByRole('cell', { name: '1' }));

    const cellsNumbersAfterClick = getNumbersFromGrid(grid);
    expect(cellsNumbers).toEqual(cellsNumbersAfterClick);
  });

  it('resets grid after completion', () => {
    render(<ShulteTable />);
    const grid = screen.getByRole('grid');
    const cellsNumbers = getNumbersFromGrid(grid);

    Array(9).fill().forEach((_, i) => {
      const n = i + 1;
      const cell = screen.getByRole('cell', { name: n.toString() });
      fireEvent.click(cell);
    });

    const cellsNumbersAfterCompletion = getNumbersFromGrid(grid);
    expect(cellsNumbers).not.toEqual(cellsNumbersAfterCompletion);
  });

  it('resets grid after grid size change', () => {
    const size = 3;
    const {rerender} = render(<ShulteTable size={size} />);
    const grid = screen.getByRole('grid');
    const cellsNumbers = getNumbersFromGrid(grid);

    const newSize = size + 1;
    rerender(<ShulteTable size={newSize} />);

    const cellsNumbersAfterSizeChange = getNumbersFromGrid(grid);
    expect(cellsNumbers.length).toEqual(size*size);
    expect(cellsNumbers).not.toEqual(cellsNumbersAfterSizeChange);
    expect(cellsNumbersAfterSizeChange.length).toEqual(newSize*newSize);
  });

  it('adjusts font size after grid size changes', () => {
    const size = 3;
    const {rerender} = render(<ShulteTable size={size} />);
    const cell = screen.getByRole('cell', { name: '1' });
    const initialFontSize = cell.style.fontSize;

    const newSize = size + 1;
    rerender(<ShulteTable size={newSize} />);

    const newCell = screen.getByRole('cell', { name: '1' });
    const newFontSize = newCell.style.fontSize;
    expect(initialFontSize).not.toEqual(newFontSize);
  });

  it('default grid width is 100%', () => {
    render(<ShulteTable />);
    const grid = screen.getByRole('grid');
    expect(grid).toHaveStyle('width: 100%');
  });

  it.todo('adjusts font size on load');
  it.todo('adjusts font size on resize');
  it.todo('adjust font size on width change');
});
