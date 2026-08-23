Feature: Produtos

	Scenario: Validar correspondencia do nome do produto com imagem
		Given que estou na pagina de produtos
		When localizo um produto na listagem
		Then a imagem exibida deve corresponder ao nome do produto

	Scenario: Validar filtro de variacoes do produto
		Given que estou na pagina de detalhes de um produto
		When seleciono uma variacao disponivel
		Then a variacao selecionada deve ser aplicada corretamente

	Scenario: Validar filtro de cor do produto
		Given que estou na pagina de detalhes de um produto
		When seleciono uma cor disponivel
		Then a cor selecionada deve ser aplicada corretamente

	Scenario: Validar adicao de mais de um item no carrinho
		Given que estou na pagina de detalhes de um produto
		When seleciono quantidade maior que um
		And adiciono o produto ao carrinho
		Then a quantidade adicionada no carrinho deve refletir a selecao

	Scenario: Validar adicao de quantidade negativa no carrinho
		Given que tenho um produto no carrinho
		When tento informar uma quantidade menor que um
		Then o sistema deve impedir a quantidade invalida ou apresentar validacao

	Scenario: Validar quantidade de avaliacoes de clientes
		Given que estou na pagina de detalhes de um produto
		When localizo a area de avaliacoes
		Then a quantidade de avaliacoes deve ser exibida corretamente

	Scenario: Validar calculo de desconto de produtos em oferta
		Given que estou na pagina de um produto em oferta
		When comparo preco original e preco promocional
		Then o preco promocional deve corresponder ao desconto apresentado
