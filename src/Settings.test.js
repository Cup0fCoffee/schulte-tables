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
});
