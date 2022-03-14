import * as React from "react";
import { render, screen } from "@testing-library/react";
import { AppWrapper } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

describe("nasa app", () => {
  test("renders learn react link", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AppWrapper />
        </Provider>
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/Nasa App/i);
    expect(linkElement).toBeInTheDocument();
  });
});
