import { fireEvent, render, screen } from "@testing-library/react";
import InputForm from "../../src/components/InputForm";

describe("Test input form component", () => {
  test("input form should be rendered", async () => {
    render(<InputForm />);
    const inputEl = await screen.findByTestId("form_input");
    expect(inputEl).toBeInTheDocument();
  });

  test("button should be rendered", () => {
    render(<InputForm />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
});
