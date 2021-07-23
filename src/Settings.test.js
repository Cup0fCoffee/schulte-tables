import { render, screen, fireEvent } from '@testing-library/react';
import Settings from './Settings';

describe('Settings Component Tests', () => {
  it.each([
    2, 5, 7
  ])('calls onSizeChange when grid size is changed', (newGridSize) => {
    let size = 3;
    const onSizeChange = jest.fn(x => size = x);
    const {rerender} = render(<Settings size={size} onSizeChange={onSizeChange} />);

    const gridSizeSlider = screen.getByRole('slider', { name: /grid size/i});
    fireEvent.change(
      gridSizeSlider,
      { target: { value: newGridSize } }
    );

    rerender(<Settings size={size} onSizeChange={onSizeChange} />);

    expect(gridSizeSlider.value).toEqual(newGridSize.toString());
    expect(onSizeChange).toHaveBeenCalledWith(newGridSize);
  });

  it('default grid size is 3', () => {
    render(<Settings />);
    const gridSizeSlider = screen.getByRole('slider', { name: /grid size/i});
    expect(gridSizeSlider.value).toEqual("3");
  });

  it('min grid size is 2', () => {
    let size = 3;
    const onSizeChange = jest.fn(x => size = x);
    const {rerender} = render(<Settings size={size} onSizeChange={onSizeChange} />);

    const gridSizeSlider = screen.getByRole('slider', { name: /grid size/i});
    fireEvent.change(
      gridSizeSlider,
      { target: { value: -999 } }
    );

    rerender(<Settings size={size} onSizeChange={onSizeChange} />);

    expect(gridSizeSlider.value).toEqual("2");
    expect(onSizeChange).toHaveBeenCalledWith(2);
  });

  it('max grid size is 10', () => {
    let size = 3;
    const onSizeChange = jest.fn(x => size = x);
    const {rerender} = render(<Settings size={size} onSizeChange={onSizeChange} />);

    const gridSizeSlider = screen.getByRole('slider', { name: /grid size/i});
    fireEvent.change(
      gridSizeSlider,
      { target: { value: 999 } }
    );

    rerender(<Settings size={size} onSizeChange={onSizeChange} />);

    expect(gridSizeSlider.value).toEqual("10");
    expect(onSizeChange).toHaveBeenCalledWith(10);
  });

  it('default grid width is 100%', () => {
    render(<Settings />);
    const gridWidthSlider = screen.getByRole('slider', { name: /grid width/i});
    expect(gridWidthSlider.value).toEqual("100");
  });

  it('min grid width is 0%', () => {
    let gridWidth = 100;
    const onGridWidthChange = jest.fn(x => gridWidth = x);
    const {rerender} = render(
      <Settings
        gridWidth={gridWidth}
        onGridWidthChange={onGridWidthChange} />);

    const gridWidthSlider = screen.getByRole('slider', { name: /grid width/i});
    fireEvent.change(
      gridWidthSlider,
      { target: { value: -999 } }
    );

    rerender(
      <Settings
        gridWidth={gridWidth}
        onGridWidthChange={onGridWidthChange} />);

    expect(gridWidthSlider.value).toEqual("0");
    expect(onGridWidthChange).toHaveBeenCalledWith(0);
  });

  it('max grid width is 0%', () => {
    let gridWidth = 0;
    const onGridWidthChange = jest.fn(x => gridWidth = x);
    const {rerender} = render(
      <Settings
        gridWidth={gridWidth}
        onGridWidthChange={onGridWidthChange} />);

    const gridWidthSlider = screen.getByRole('slider', { name: /grid width/i});
    fireEvent.change(
      gridWidthSlider,
      { target: { value: 999 } }
    );

    rerender(
      <Settings
        gridWidth={gridWidth}
        onGridWidthChange={onGridWidthChange} />);

    expect(gridWidthSlider.value).toEqual("100");
    expect(onGridWidthChange).toHaveBeenCalledWith(100);
  });
});
