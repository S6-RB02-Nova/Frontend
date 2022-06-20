import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home Component', () => {
  it('Renders landing  page', async () => {
    render(<Home />);
    expect(screen.getByText('Consumption dashboard')).toBeInTheDocument();
  });
});
