Feature: Pagamento

	Scenario: Validar pagamento com nome vazio
		Given que estou no checkout
		When deixo o campo nome vazio
		And preencho os demais dados
		And tento finalizar a compra
		Then o sistema deve indicar que o nome e obrigatorio

	Scenario: Validar pagamento com sobrenome vazio
		Given que estou no checkout
		When deixo o campo sobrenome vazio
		And preencho os demais dados
		And tento finalizar a compra
		Then o sistema deve indicar que o sobrenome e obrigatorio

	Scenario: Validar pagamento com nome da empresa vazio
		Given que estou no checkout
		When deixo o campo nome da empresa vazio
		And preencho os demais dados obrigatorios
		And tento finalizar a compra
		Then o sistema deve respeitar a regra de validacao do campo empresa

	Scenario: Validar pagamento com email vazio
		Given que estou no checkout
		When deixo o campo email vazio
		And tento finalizar a compra
		Then o sistema deve indicar que o email e obrigatorio

	Scenario: Validar pagamento com email invalido
		Given que estou no checkout
		When informo um email invalido
		And tento finalizar a compra
		Then o sistema deve indicar que o email informado e invalido

	Scenario: Validar pagamento com cidade e estado vazios
		Given que estou no checkout
		When deixo os campos cidade e estado vazios
		And tento finalizar a compra
		Then o sistema deve indicar que os campos sao obrigatorios

	Scenario: Validar campo de CEP
		Given que estou no checkout
		When deixo o campo CEP vazio
		And tento finalizar a compra
		Then o sistema deve indicar que o CEP e obrigatorio

	Scenario: Validar pagamento com endereco vazio
		Given que estou no checkout
		When deixo o campo endereco vazio
		And tento finalizar a compra
		Then o sistema deve indicar que o endereco e obrigatorio

	Scenario: Validar calculo total de pagamento
		Given que adicionei um produto ao carrinho
		And acessei o checkout
		When visualizo os valores da compra
		Then o total deve corresponder aos valores apresentados no resumo

	Scenario: Validar pagamento com pais vazio
		Given que estou no checkout
		When deixo o campo pais vazio
		And tento finalizar a compra
		Then o sistema deve indicar que o pais e obrigatorio

	Scenario: Validar mensagem de sucesso ao adicionar pagamento
		Given que adicionei um produto ao carrinho
		And estou no checkout
		When preencho os dados validos de pagamento
		And finalizo a compra
		Then a compra deve ser finalizada com mensagem de sucesso
