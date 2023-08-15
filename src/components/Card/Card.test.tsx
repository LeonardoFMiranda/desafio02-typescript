import { handleWelcomeClick } from "./Card"; // Substitua pelo caminho correto para o arquivo que contém a função

describe("handleWelcomeClick", () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
  it("exibe um alerta de boas-vindas", () => {
    handleWelcomeClick();
    expect(mockAlert).toHaveBeenCalledWith("Bem-vindo ao nosso aplicativo!");
  });
});
