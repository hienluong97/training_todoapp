import { render, screen } from "@testing-library/react";
import App from "../../src/App";

describe("Test App component", () => {
  test("renders learn react link", () => {
    render(<App />);
    const titleElement = screen.getByText(/todo list/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("render input form", async () => {
    render(<App />);
    const inputForm = await screen.findByTestId("form_input");
    expect(inputForm).toBeInTheDocument();
  });
});
