import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { InputInfoClient } from "./index";
  
describe("<InputInfoClient />", () => {
  it("Renderiza um input corretamente", () => {
    render(<InputInfoClient placeholder="CLIENTE" />);
    const inputNameClient = screen.getByPlaceholderText("CLIENTE");
    expect(inputNameClient).toBeInTheDocument();
    render(<InputInfoClient placeholder="MESA" />);
    const inputTableClient = screen.getByPlaceholderText("MESA");
    expect(inputTableClient).toBeInTheDocument();
  });
});
