import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";

import App, { calcularNovoSaldo } from "./app";

describe("Componente principal", () => {
  describe("Quando eu abro o app do banco", () => {
    it("Mostrar nome do banco", () => {
      render(<App />);

      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it("o saldo é exibido", () => {
      render(<App />);

      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    it("O botão realizar transação é exibido", () => {
      render(<App />);

      expect(screen.getByText("Realizar operação"));
    });
  });

  describe("Quando eu realizo uma transação", () => {
    it(" que é um saque o valor vai diminuir", () => {
      const valores = {
        transacao: "saque",
        valor: 50,
      };

      const novoSaldo = calcularNovoSaldo(valores, 100);

      expect(novoSaldo).toBe(50);
    });

    it("que é um saque, a transação deve ser realizada corretamente", () => {
     render(<App />);

      const saldo = screen.getByText("R$ 1000");
      const operacao = screen.getByLabelText("Saque");
      const valor = screen.getByTestId("valor");
      const botaoTransacao = screen.getByText("Realizar operação")

      expect(saldo.textContent).toBe("R$ 1000");

      fireEvent.click(operacao, {target:{value: "saque"}});
      fireEvent.change(valor, {target:{value: "300"}});
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe("R$ 700");


    })
  });
});
