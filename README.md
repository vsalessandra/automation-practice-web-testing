# Automation Practice - Testes E2E

Projeto de estudo de automação de testes, usando Cypress + Cucumber (BDD/Gherkin) para testar o site [Automation Pratice](https://www.automationpratice.com.br), uma loja virtual fictícia usada pra prática.

A ideia foi cobrir os principais fluxos de um e-commerce: login, cadastro, busca, navegação/filtros, carrinho, favoritos e checkout, escrevendo os cenários em Gherkin e implementando os steps em JS.

## Stack

- Cypress
- @badeball/cypress-cucumber-preprocessor - pra rodar os arquivos `.feature` (Gherkin) no Cypress
- @bahmutov/cypress-esbuild-preprocessor - bundler usado no preprocessamento dos testes
- GitHub Actions - roda a suíte a cada push/PR na main

## Estrutura

```
├── .github/workflows/cypress.yml   # pipeline de CI
├── cypress/
│   ├── fixtures/                    # massa de dados
│   └── support/                     # config padrão do Cypress (commands, e2e.js)
├── e2e/                              # cenários .feature, um diretório por funcionalidade
│   ├── busca/
│   ├── cadastro/
│   ├── carrinho/
│   ├── favoritos/
│   ├── home/
│   ├── login/
│   ├── navegacao/
│   ├── pagamento/
│   └── produtos/
├── support/
│   ├── helpers.js                   # funções repetidas (limpar carrinho, ir pro carrinho/favoritos etc.)
│   └── step_definitions/            # implementação (Given/When/Then) de cada feature
└── cypress.config.js
```

Cada funcionalidade segue o mesmo padrão: `e2e/<nome>/<nome>.feature` com os cenários e `support/step_definitions/<nome>.js` com a implementação.

## O que está coberto

- Home ([home.feature](e2e/home/home.feature)) - redes sociais, newsletter, menu principal
- Login ([login.feature](e2e/login/login.feature)) - credenciais válidas/inválidas, campos obrigatórios
- Cadastro ([cadastro.feature](e2e/cadastro/cadastro.feature)) - validação de campos, formato de email/senha
- Busca ([busca.feature](e2e/busca/busca.feature)) - termo existente/inexistente, busca vazia, busca por número
- Carrinho ([carrinho.feature](e2e/carrinho/carrinho.feature)) - adicionar/remover, quantidade, subtotal/total, cupom
- Favoritos ([favoritos.feature](e2e/favoritos/favoritos.feature)) - adicionar/remover da wishlist, mover pro carrinho
- Navegação e filtros ([navegacao.feature](e2e/navegacao/navegacao.feature)) - categorias, preço, marca, cor, tamanho
- Pagamento ([pagamento.feature](e2e/pagamento/pagamento.feature)) - campos do checkout, cálculo do total
- Produtos ([produtos.feature](e2e/produtos/produtos.feature)) - detalhes, variações, avaliações, desconto

No total são 86 cenários espalhados nessas 9 features.

## Rodando localmente

Precisa de Node 18+ (o CI usa a versão 20).

```bash
git clone https://github.com/vsalessandra/automation-practice-web-testing.git
cd automation-practice-web-testing
npm install
```

Pra abrir o Cypress no modo interativo:

```bash
npm run cy:open
```

Pra rodar tudo headless (é o que o CI usa):

```bash
npm test
```

A baseUrl (`https://www.automationpratice.com.br`) tá configurada no [cypress.config.js](cypress.config.js).

## CI

O workflow em [.github/workflows/cypress.yml](.github/workflows/cypress.yml) roda a suíte inteira a cada push ou PR pra main: instala as dependências com `npm ci` e executa `npm test`.