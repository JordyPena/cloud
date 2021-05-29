import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("Nav", () => {
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

  test("directs to cart when cart text clicked", () => {
    renderApp()
    expect(screen.getByText(/Keep the Summer Vibe Alive/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/cart/i), leftClick);

    // check that the content changed to the new page
    expect(screen.getByText(/bag/i)).toBeInTheDocument();
  });

  test("directs to about page when About Us text clicked", () => {
    renderApp()
    expect(screen.getByText(/Keep the Summer Vibe Alive/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/About Us/i), leftClick);

    expect(screen.getByText(/let it drip/i)).toBeInTheDocument();
  });

  test("directs to home page when Cloud text clicked", () => {
    renderApp('/about')
    expect(screen.getByText(/Let it drip/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByTestId("cloud-element"), leftClick);

    expect(screen.getByText(/keep the summer vibe alive/i)).toBeInTheDocument();
  });

  describe('searchbar', () => {
    test("render searchbar", () => {
      renderApp()
  
      const inputEl = screen.getByRole('textbox', {name: 'search-bar'});
      expect(inputEl).toBeVisible();
    });

    //test submission
    //type a value and 
    // do the action of clicking submit
    test('searchbar should search for input value', () => {
      renderApp()
  
      const inputEl = screen.getByRole('textbox', {name: 'search-bar'})
        userEvent.type(inputEl, 'Hello{enter}')
        expect(screen.getByText(/team favorites/i)).toBeInTheDocument();
    })

    // test empty string redirect
    //all i need to do is check screen text
    test('empty string redirect', () => {
      renderApp()
      
      const inputEl = screen.getByRole('textbox', {name: 'search-bar'})
        userEvent.type(inputEl, '{enter}')
        expect(screen.getByText(/team favorites/i)).toBeInTheDocument();
    })
  })
   
});
