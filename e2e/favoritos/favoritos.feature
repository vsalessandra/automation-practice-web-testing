Feature: Favoritos

	Scenario: Remover item dos favoritos
		Given que adicionei um produto aos favoritos
		When acesso a lista de desejos e removo o produto
		Then o produto deve ser removido da lista de desejos

	Scenario: Remover itens dos favoritos em sequencia
		Given que adicionei dois ou mais produtos aos favoritos
		When removo os produtos um por vez na lista de desejos
		Then todos os produtos removidos nao devem mais ser exibidos

	Scenario: Verificar abertura correta da lista de desejos
		Given que estou autenticado na loja
		When acesso a lista de desejos
		Then a pagina de favoritos deve abrir corretamente

	Scenario: Validar preco do produto na lista de desejos
		Given que adicionei um produto aos favoritos
		When acesso a lista de desejos
		Then o preco exibido deve corresponder ao preco atual do produto

	Scenario: Validar adicao de produto da lista de desejos ao carrinho
		Given que adicionei um produto aos favoritos
		When adiciono esse produto ao carrinho a partir da lista de desejos
		And acesso o carrinho
		Then o produto deve ser adicionado corretamente ao carrinho

	Scenario: Validar nome do produto
		Given que adicionei um produto aos favoritos
		When acesso a lista de desejos
		Then o nome do produto exibido deve corresponder ao item favoritado
