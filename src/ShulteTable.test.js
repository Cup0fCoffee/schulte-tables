import {
  render,
  screen,
  getAllByRole,
  queryByText,
  fireEvent
} from '@testing-library/react';
import ShulteTable from './ShulteTable';

describe('ShulteTable Component Tests', () => {

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
    const getNumbersFromGrid = (grid) => {
      return Array.from(grid.querySelectorAll('.shulte-table__cell-text'))
        .map((cellText) => cellText.textContent);
    };

    render(<ShulteTable />);
    const grid = screen.getByRole('grid');
    const cellsNumbers = getNumbersFromGrid(grid);

    fireEvent.click(screen.getByRole('cell', { name: '1' }));

    const cellsNumbersAfterClick = getNumbersFromGrid(grid);
    expect(cellsNumbers).toEqual(cellsNumbersAfterClick);
  });

  it('resets grid after completion', () => {
    const getNumbersFromGrid = (grid) => {
      return Array.from(grid.querySelectorAll('.shulte-table__cell-text'))
        .map((cellText) => cellText.textContent);
    };

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
});
