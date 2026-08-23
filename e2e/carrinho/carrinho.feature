Feature: Carrinho

	Scenario: Remover produto do carrinho
		Given que tenho um produto adicionado ao carrinho
		When acesso o carrinho e removo o produto
		Then o produto deve ser removido do carrinho

	Scenario: Validar valor total dos produtos do carrinho
		Given que tenho produtos adicionados ao carrinho
		When acesso o carrinho
		Then o valor total deve corresponder a soma dos subtotais

	Scenario: Remover dois produtos em sequencia
		Given que tenho dois produtos adicionados ao carrinho
		When removo o primeiro produto
		And removo o segundo produto
		Then os dois produtos devem ser removidos corretamente

	Scenario: Visualizar itens do carrinho
		Given que adicionei um produto ao carrinho
		When acesso a tela do carrinho
		Then o produto adicionado deve ser exibido corretamente

	Scenario: Limpar carrinho
		Given que tenho produtos adicionados ao carrinho
		When utilizo a opcao de limpar carrinho
		Then todos os produtos devem ser removidos

	Scenario: Aumentar quantidade do item do carrinho
		Given que tenho um produto no carrinho
		When aumento a quantidade do item
		Then a quantidade deve ser atualizada
		And o valor do item deve ser recalculado corretamente

	Scenario: Diminuir quantidade de item do carrinho
		Given que tenho um produto com quantidade maior que um no carrinho
		When diminuo a quantidade do item
		Then a quantidade deve ser atualizada
		And o valor do item deve ser recalculado corretamente

	Scenario: Remover produtos na tela do carrinho
		Given que tenho um produto no carrinho
		When removo o produto diretamente na tela do carrinho
		Then o produto nao deve mais aparecer na listagem do carrinho

	Scenario: Validar valor total do item dentro do carrinho
		Given que tenho um produto no carrinho
		When altero a quantidade do produto
		Then o subtotal do item deve ser atualizado conforme a nova quantidade

	Scenario: Validar aplicacao de cupom invalido
		Given que tenho um produto no carrinho
		When informo um cupom invalido
		Then o sistema deve apresentar mensagem de cupom invalido
		And o total da compra nao deve ser alterado

	Scenario: Validar adicao de item ao carrinho
		Given que estou na pagina de detalhes de um produto
		When adiciono o item ao carrinho
		Then o item deve ser adicionado corretamente ao carrinho

	Scenario: Adicionar produto atraves da listagem
		Given que estou na pagina de listagem de produtos
		When adiciono um produto ao carrinho pela listagem
		Then o produto deve aparecer no carrinho

	Scenario: Validar carrinho vazio
		Given que nao adicionei produtos ao carrinho
		When acesso o carrinho
		Then o sistema deve indicar que o carrinho esta vazio

	Scenario: Validar subtotal do produto
		Given que adicionei um produto ao carrinho
		When acesso o carrinho
		Then o subtotal deve corresponder ao preco do produto multiplicado pela quantidade

	Scenario: Retornar ao carrinho apos navegar pela loja
		Given que adicionei um produto ao carrinho
		When navego para outra pagina da loja
		And retorno ao carrinho
		Then o produto anteriormente adicionado deve permanecer no carrinho

	Scenario: Validar carrinho vazio apos remocoes
		Given que removi todos os produtos do carrinho
		When acesso o carrinho
		Then o sistema deve indicar que o carrinho esta vazio
