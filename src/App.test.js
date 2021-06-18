import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component Tests', () => {
  it('renders ShulteTable', () => {
    render(<App />);
    const shulteTable = screen.getByRole('grid');
    expect(shulteTable).toBeInTheDocument();
  });
});
