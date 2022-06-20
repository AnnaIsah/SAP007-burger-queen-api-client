import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { InputPassword } from "./index";
  
describe("<InputPassword />", () => {
  it("Renderiza um input corretamente", () => {
    render(<InputPassword placeholder="Senha" />);
    const inputPassword = screen.getByPlaceholderText("Senha");
    expect(inputPassword).toBeInTheDocument();
});
})
