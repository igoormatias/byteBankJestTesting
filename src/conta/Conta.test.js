import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Conta from "./Conta";

describe("Component de conta", () => {
  it("Exibir o saldo da conta como valor monentário", () => {
    render(<Conta saldo={1000} />);

    const saldo = screen.getByTestId("saldo-conta");

    expect(saldo.textContent).toBe("R$ 1000");
  });

  it("Chama a funcao de realizar transacao, quando o button é clicado", () => {
    const funcaoRealizarTransacao = jest.fn();

    render(<Conta realizarTransacao={funcaoRealizarTransacao} />);

    fireEvent.click(screen.getByText("Realizar operação"));

    expect(funcaoRealizarTransacao).toHaveBeenCalled();
  });
});
