import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe('LandingPage', () => {
  // creating a method for reusability
  //so i dont have to type render(<Blha/> over n over)
  const renderApp = (startingRoute = '') => {
    const history = createMemoryHistory();
    //if i pass a value to renderApp method
    //then push to that value
    // otherwise dont push to specific route
    if (startingRoute) {
      history.push(startingRoute)
    }
    return render(
      <Router history={history}>
        <App />
      </Router>
    );
  }

  test('renders landingPage', () => {
    renderApp('/landingPage');
    expect(screen.getByText(/team favorites/i)).toBeInTheDocument();
  })

  test("render dropdown", () => {
    renderApp('/landingPage')

    const inputEl = screen.getByRole('combobox', {name: 'select-dropdown'});
    expect(inputEl).toBeVisible();
  });

})