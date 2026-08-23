Feature: Cadastro

	Scenario: Cadastro com nome vazio
		Given que estou na pagina de cadastro
		When deixo o campo nome vazio
		And preencho email e senha com dados validos
		And clico em Cadastrar
		Then o sistema deve informar que o nome e obrigatorio

	Scenario: Cadastro com email vazio
		Given que estou na pagina de cadastro
		When preencho nome e senha com dados validos
		And deixo o campo email vazio
		And clico em Cadastrar
		Then o sistema deve informar que o email e obrigatorio

	Scenario: Cadastro com senha vazia
		Given que estou na pagina de cadastro
		When preencho nome e email com dados validos
		And deixo o campo senha vazio
		And clico em Cadastrar
		Then o sistema deve informar que a senha e obrigatoria

	Scenario: Cadastro com nome vazio alternativo
		Given que estou na pagina de cadastro
		When nao informo o nome
		And preencho os demais campos corretamente
		And clico em Cadastrar
		Then o sistema deve apresentar uma mensagem de obrigatoriedade para o nome

	Scenario: Cadastro com senha invalida
		Given que estou na pagina de cadastro
		When informo uma senha fora das regras da aplicacao
		And preencho os demais campos corretamente
		And clico em Cadastrar
		Then o sistema deve apresentar uma mensagem de validacao para a senha

	Scenario: Cadastro com email invalido
		Given que estou na pagina de cadastro
		When informo um email em formato invalido
		And preencho os demais campos corretamente
		And clico em Cadastrar
		Then o sistema deve informar que o email e invalido

	Scenario: Cadastro com credenciais validas
		Given que estou na pagina de cadastro
		When preencho todos os campos com dados validos
		And clico em Cadastrar
		Then o cadastro deve ser realizado com sucesso

	Scenario: Cadastro com credenciais vazias
		Given que estou na pagina de cadastro
		When deixo todos os campos obrigatorios vazios
		And clico em Cadastrar
		Then o sistema deve apresentar as validacoes de campos obrigatorios

	Scenario: Validar mensagem de sucesso apos cadastro valido
		Given que estou na pagina de cadastro
		When preencho os campos com dados validos
		And clico em Cadastrar
		Then o sistema deve apresentar mensagem de sucesso ou redirecionar corretamente

	Scenario: Validar mensagem de erro apos cadastro invalido
		Given que estou na pagina de cadastro
		When informo dados invalidos no cadastro
		And clico em Cadastrar
		Then o sistema deve apresentar uma mensagem de erro correspondente a validacao
