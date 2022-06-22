import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { Input } from "./index";

describe("<Input />", () => {
  it("Renderiza um input corretamente", () => {
    render(<Input placeholder="E-mail" />);
    const input = screen.getByPlaceholderText("E-mail");
    expect(input).toBeInTheDocument();
  });
});