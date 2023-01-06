import { render, screen } from "@testing-library/react";
import App from "../../src/App";

describe("Test App component", () => {
  test("renders app tille", () => {
    render(<App />);
    const titleElement = screen.getByText(/todo list/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders input form", async () => {
    render(<App />);
    const inputForm = await screen.findByTestId("form_input");
    expect(inputForm).toBeInTheDocument();
  });
});
