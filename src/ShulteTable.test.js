import {
  render,
  screen,
  getAllByRole,
  queryByText
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
  ])('renders grid with numbers from 1 to n^2', (size) => {
    render(<ShulteTable size={size} />);
    const grid = screen.getByRole('grid');
    new Array(size*size).fill().forEach((_, i) => {
      const n = i + 1;
      const cell = queryByText(grid, new RegExp(`^${n}$`));
      expect(cell).not.toBeNull();
    });
  });
});
