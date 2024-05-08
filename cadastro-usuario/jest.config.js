module.exports = {
  // Indica onde estão localizados os testes
  testMatch: ["**/*.test.[jt]s?(x)"],

  // Configurações de cobertura de código
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",

  // Possíveis transformações de código (caso necessário)
  transform: {
    "^.+\\.js$": "babel-jest", // Para transpilar JavaScript com Babel (se necessário)
  },

  // Diretórios a serem ignorados durante os testes
  // Por exemplo, node_modules
  modulePathIgnorePatterns: ["../node_modules", "<rootDir>/node_modules"],

  // Outras configurações de Jest podem ser adicionadas conforme necessário
};
