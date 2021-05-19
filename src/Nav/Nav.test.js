import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';


describe('Nav', () => {

  test('directs to home page when cloud text clicked', () => {
    const history = createMemoryHistory();
    render (
      <Router history={history}>
        <App />
      </Router>
    )
    expect(screen.getByText(/Keep the Summer Vibe Alive/i)).toBeInTheDocument()
  
    const leftClick = { button: 0}
    userEvent.click(screen.getByText(/cart/i), leftClick)

    // check that the content changed to the new page
  expect(screen.getByText(/bag/i)).toBeInTheDocument()
  })


})