import {
  validarNome,
  validarAno,
  validarEmail,
  validarSenha,
} from "./validar.js";

describe("Validando Nome", () => {
  test("Nilton Palmeira Pacifico Junior", () => {
    const name = { target: { value: "Nilton Palmeira Pacifico Junior" } };
    expect(validarNome(name)).toBe(true);
  });

  test("Nilt", () => {
    const name = { target: { value: "Nilt" } };
    expect(validarNome(name)).toBe(false);
  });

  test("Nilton123", () => {
    const name = { target: { value: "Nilton123" } };
    expect(validarNome(name)).toBe(false);
  });
});

describe("Validando Ano", () => {
  test("1990", () => {
    const event = { target: { value: "1990" } };
    expect(validarAno(event)).toBe(true);
  });

  test("1899", () => {
    const event = { target: { value: "1899" } };
    expect(validarAno(event)).toBe(false);
  });

  test("1900", () => {
    const event = { target: { value: "1900" } };
    expect(validarAno(event)).toBe(true);
  });

  test("1901", () => {
    const event = { target: { value: "1901" } };
    expect(validarAno(event)).toBe(true);
  });

  test("2021", () => {
    const event = { target: { value: "2021" } };
    expect(validarAno(event)).toBe(true);
  });

  test("2022", () => {
    const event = { target: { value: "2022" } };
    expect(validarAno(event)).toBe(true);
  });

  test("2023", () => {
    const event = { target: { value: "2023" } };
    expect(validarAno(event)).toBe(false);
  });

  test("Letras", () => {
    const event = { target: { value: "abcd" } };
    expect(validarAno(event)).toBe(false);
  });
});

describe("Validando Email", () => {
  test("Sem @", () => {
    const email = { target: { value: "asdf.com.br" } };
    expect(validarEmail(email)).toBe(false);
  });

  test("Correto com @", () => {
    const email = { target: { value: "asdf@gmail.com" } };
    expect(validarEmail(email)).toBe(true);
  });

  test("com mais de 2 pontos", () => {
    const email = { target: { value: "asdf@test.test.gmail.com" } };
    expect(validarEmail(email)).toBe(false);
  });

  test("Ponto apos @", () => {
    const email = { target: { value: "asdf@.gmail.com" } };
    expect(validarEmail(email)).toBe(false);
  });

  test("final .com.br", () => {
    const email = { target: { value: "asdf@gmail.com.br" } };
    expect(validarEmail(email)).toBe(true);
  });

  test("final .com", () => {
    const email = { target: { value: "asdf@gmail.com" } };
    expect(validarEmail(email)).toBe(true);
  });

  test("final .net", () => {
    const email = { target: { value: "asdf@gmail.com" } };
    expect(validarEmail(email)).toBe(true);
  });

  test("final 3+ letras", () => {
    const email = { target: { value: "asdf@gmail.comm" } };
    expect(validarEmail(email)).toBe(false);
  });
});

describe("Validar Senha", () => {
  test("Só letras", () => {
    const dados = {
      meter: null,
      input: null,
      target: { senha: "Asdfasdf", nome: "Nilton", ano: "1980" },
    };
    expect(validarSenha(dados)).toBe(false);
  });

  test("menor que 6", () => {
    const dados = {
      meter: null,
      input: null,
      target: { senha: "A@1ab", nome: "Nilton", ano: "1980" },
    };
    expect(validarSenha(dados)).toBe(false);
  });

  test("maior que 20", () => {
    const dados = {
      meter: null,
      input: null,
      target: {
        senha: "A@1a2ijasdihi99inv!23",
        nome: "Nilton",
        ano: "1980",
      },
    };
    expect(validarSenha(dados)).toBe(false);
  });

  test("Nome na senha", () => {
    const dados = {
      meter: null,
      input: null,
      target: {
        senha: "A@1niLtonihi99inv!23",
        nome: "Nilton",
        ano: "1980",
      },
    };
    expect(validarSenha(dados)).toBe(false);
  });

  test("Ano na senha", () => {
    const dados = {
      meter: null,
      input: null,
      target: {
        senha: "A@1niLt1980i99inv!23",
        nome: "Nilton",
        ano: "1980",
      },
    };
    expect(validarSenha(dados)).toBe(false);
  });

  test("Sem caracteres especiais", () => {
    const dados = {
      meter: null,
      input: null,
      target: {
        senha: "A1niLt198i99inv23",
        nome: "Nilton",
        ano: "1980",
      },
    };
    expect(validarSenha(dados)).toBe(false);
  });

  test("Não tem letra", () => {
    const dados = {
      meter: null,
      input: null,
      target: {
        senha: "123456!@#$234567890",
        nome: "Nilton",
        ano: "1980",
      },
    };
    expect(validarSenha(dados)).toBe(false);
  });

  test("Não tem numero", () => {
    const dados = {
      meter: null,
      input: null,
      target: {
        senha: "asdfg!@#$",
        nome: "Nilton",
        ano: "1980",
      },
    };
    expect(validarSenha(dados)).toBe(false);
  });

  test("Senha fraca", () => {
    const dados = {
      meter: null,
      input: null,
      target: {
        senha: "!bcd567",
        nome: "Nilton",
        ano: "1980",
      },
    };
    expect(validarSenha(dados)).toBe("fraca");
  });

  test("Senha moderada", () => {
    const dados = {
      meter: null,
      input: null,
      target: {
        senha: "!A345678",
        nome: "Nilton",
        ano: "1980",
      },
    };
    expect(validarSenha(dados)).toBe("moderada");
  });

  test("Senha forte", () => {
    const dados = {
      meter: null,
      input: null,
      target: {
        senha: "!@CDefgh9012",
        nome: "Nilton",
        ano: "1980",
      },
    };
    expect(validarSenha(dados)).toBe("forte");
  });

  test("Quase forte", () => {
    const dados = {
      meter: null,
      input: null,
      target: {
        senha: "!Bcde6789012",
        nome: "Nilton",
        ano: "1980",
      },
    };
    expect(validarSenha(dados)).toBe("moderada");
  });
});
