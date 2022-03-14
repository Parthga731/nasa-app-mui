import React from "react";
import { Home } from "../components/Home";
import { render, screen } from "./test-utils";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("controller components test", () => {
  it("submit button present or not", async () => {
    render(<Home />);
    const sub = await screen.findByText(/submit/i);
    expect(sub).toBeInTheDocument();
  });
  test("submit button disable or not", async () => {
    render(<Home />);
    const sub = await screen.findByText(/submit/i);
    expect(sub).toBeDisabled();
  });
});
