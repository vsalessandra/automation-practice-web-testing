Feature: Busca

	Scenario: Validar busca de item inexistente
		Given que estou na pagina de produtos
		When abro a busca e informo um produto inexistente
		And executo a busca
		Then deve ser exibida mensagem informando que nao ha produtos para a busca

	Scenario: Validar busca de item existente
		Given que estou na pagina de produtos
		When abro a busca e informo o nome de um produto existente
		And executo a busca
		Then o produto correspondente deve ser exibido

	Scenario: Validar fechamento de aba de busca
		Given que estou na pagina de produtos
		When abro a busca
		And fecho a aba ou campo de busca
		Then a area de busca deve ser fechada corretamente

	Scenario: Validar busca dentro de categoria
		Given que estou em uma categoria de produtos
		When abro a busca e informo o nome de um produto
		And executo a busca
		Then os resultados devem corresponder a busca realizada dentro da categoria

	Scenario: Buscar sem informar produto
		Given que estou na pagina de produtos
		When abro a busca e nao informo nenhum termo
		And executo a busca
		Then o sistema deve impedir a busca vazia ou apresentar validacao

	Scenario: Buscar utilizando numeros
		Given que estou na pagina de produtos
		When abro a busca e informo apenas numeros
		And executo a busca
		Then o sistema deve processar a pesquisa e apresentar resultado correspondente

	Scenario: Validar mensagem de itens nao encontrados
		Given que estou na pagina de produtos
		When pesquiso por um termo sem correspondencias
		Then o sistema deve exibir mensagem de itens nao encontrados

	Scenario: Validar resultado de busca vazia
		Given que estou na pagina de produtos
		When executo uma busca sem termo
		Then o sistema deve apresentar validacao para busca vazia
