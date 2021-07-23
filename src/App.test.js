import {
  render,
  screen,
  getAllByRole,
  fireEvent
} from '@testing-library/react';
import App from './App';

describe('App Component Tests', () => {
  it('renders ShulteTable', () => {
    render(<App />);
    const shulteTable = document.querySelector('.shulte-table');
    expect(shulteTable).toBeInTheDocument();
  });

  it('ShulteTable size is 3x3 by default', () => {
    render(<App />);
    const shulteTable = document.querySelector('.shulte-table');
    const rows = getAllByRole(shulteTable, 'row');
    expect(rows.length).toBe(3);
    rows.forEach((row) => {
      const cells = getAllByRole(row, 'cell');
      expect(cells.length).toBe(3);
    });
  });

  it('renders Settings', () => {
    render(<App />);
    const settings = document.querySelector('.settings');
    expect(settings).toBeInTheDocument();
  });

  it('default grid size setting is 3', () => {
    render(<App />);
    const gridSizeSlider = screen.getByRole('slider', { name: /grid size/i});
    expect(gridSizeSlider.value).toEqual("3");
  });

  it.each([
    2, 5, 7
  ])('ShulteTable size changes when changing grid size through settings', (newGridSize) => {
    render(<App />);

    const gridSizeSlider = screen.getByRole('slider', { name: /grid size/i});
    fireEvent.change(
      gridSizeSlider,
      { target: { value: newGridSize } }
    );

    const shulteTable = document.querySelector('.shulte-table');
    const rows = getAllByRole(shulteTable, 'row');
    expect(rows.length).toBe(newGridSize);
    rows.forEach((row) => {
      const cells = getAllByRole(row, 'cell');
      expect(cells.length).toBe(newGridSize);
    });
  });

  it('default grid width is 100%', () => {
    render(<App />);
    const gridWidthSlider = screen.getByRole('slider', { name: /grid width/i});
    expect(gridWidthSlider.value).toEqual("100");
  });
});
