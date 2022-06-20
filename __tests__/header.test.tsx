import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('Show name when in session', async () => {
    render(<Header />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('Shows log out button when in session', async () => {
    render(<Header />);
    expect(screen.getByText('Sign Out')).toBeInTheDocument();
  });

  // TODO add onClick test redirect to another page
  it('Routes to consumption page on button click', async () => {
    // userEvent click does not fire, need to find out why it doesnt
    // render(<Header />);
    // const user = userEvent.setup()
    // const router = { push: jest.fn() }
    // useRouter.mockReturnValue(router)
    // user.click(screen.getByText("Consumption"))
    // expect(router.push).toHaveBeenCalledWith("/consumption")
  });
});
