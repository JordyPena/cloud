import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("Nav", () => {
  test("directs to cart when cart text clicked", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getByText(/Keep the Summer Vibe Alive/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/cart/i), leftClick);

    // check that the content changed to the new page
    expect(screen.getByText(/bag/i)).toBeInTheDocument();
  });

  test("directs to about page when About Us text clicked", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getByText(/Keep the Summer Vibe Alive/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/About Us/i), leftClick);

    expect(screen.getByText(/let it drip/i)).toBeInTheDocument();
  });

  test("directs to home page when Cloud text clicked", () => {
    const history = createMemoryHistory();
    history.push("/about");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getByText(/Let it drip/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByTestId("cloud-element"), leftClick);

    expect(screen.getByText(/keep the summer vibe alive/i)).toBeInTheDocument();
  });
});
