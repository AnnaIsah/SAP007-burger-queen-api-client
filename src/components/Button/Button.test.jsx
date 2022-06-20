import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Button from "./index";

describe("<Button />", () => {
  it("Renderiza um botão corretamente", () => {
    render(<Button>ENTRAR</Button>);
    const button = screen.getByText("ENTRAR");
    expect(button).toBeInTheDocument();
  });
  it("deverá disparar uma função de click", () => {
    const text = "CADASTRAR"
    const onClick = jest.fn();
    render(<Button onClick={onClick}>{text}</Button>);
  
    expect(onClick).toHaveBeenCalledTimes(0);
    user.click(screen.getByText(text));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});