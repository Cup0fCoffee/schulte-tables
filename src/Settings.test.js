import { render, screen, fireEvent } from '@testing-library/react';
import Settings from './Settings';

describe('Settings Component Tests', () => {
  it.each([
    2, 5, 7
  ])('calls onChange when grid size is changed', (newGridSize) => {
    const onChange = jest.fn();
    render(<Settings onChange={onChange} />);

    const gridSizeSlider = screen.getByRole('slider', { name: /grid size/i});
    fireEvent.change(
      gridSizeSlider,
      { target: { value: newGridSize } }
    );

    expect(gridSizeSlider.value).toEqual(newGridSize.toString());
    // assuming onChange was called with argument like { ..., gridSize: n }
    expect(onChange.mock.calls[1][0].gridSize).toEqual(newGridSize);
  });

  it('default grid size is 3', () => {
    const onChange = jest.fn();
    render(<Settings onChange={onChange} />);

    const gridSizeSlider = screen.getByRole('slider', { name: /grid size/i});

    expect(gridSizeSlider.value).toEqual("3");
    // assuming onChange was called with argument like { ..., gridSize: n }
    expect(onChange.mock.calls[0][0].gridSize).toEqual(3);
  });

  it('min grid size is 2', () => {
    const onChange = jest.fn();
    render(<Settings onChange={onChange} />);

    const gridSizeSlider = screen.getByRole('slider', { name: /grid size/i});
    fireEvent.change(
      gridSizeSlider,
      { target: { value: -999 } }
    );

    expect(gridSizeSlider.value).toEqual("2");
    // assuming onChange was called with argument like { ..., gridSize: n }
    expect(onChange.mock.calls[1][0].gridSize).toEqual(2);
  });

  it('max grid size is 10', () => {
    const onChange = jest.fn();
    render(<Settings onChange={onChange} />);

    const gridSizeSlider = screen.getByRole('slider', { name: /grid size/i});
    fireEvent.change(
      gridSizeSlider,
      { target: { value: 999 } }
    );

    expect(gridSizeSlider.value).toEqual("10");
    // assuming onChange was called with argument like { ..., gridSize: n }
    expect(onChange.mock.calls[1][0].gridSize).toEqual(10);
  });
});
