Feature: Navegacao e Ordenacao

	Scenario: Navegar por categorias
		Given que estou na pagina de produtos
		When seleciono uma categoria
		Then os produtos correspondentes a categoria devem ser exibidos

	Scenario: Validar navegacao de imagens nos cards
		Given que estou na listagem de produtos
		When navego pelas imagens de um card de produto
		Then a imagem exibida deve ser atualizada conforme a navegacao

	Scenario: Validar navegacao entre categorias de produtos principais
		Given que estou na pagina inicial
		When seleciono uma categoria principal
		Then devo ser direcionado para a categoria selecionada

	Scenario: Navegar entre diferentes produtos
		Given que estou na pagina de produtos
		When acesso diferentes paginas de detalhes de produtos
		Then cada pagina deve carregar as informacoes do produto selecionado

	Scenario: Aplicar filtro de preco
		Given que estou na pagina de produtos
		When aplico um filtro de preco
		Then a listagem deve apresentar produtos compativeis com o filtro aplicado

	Scenario: Aplicar filtro de marca
		Given que estou na pagina de produtos
		When seleciono um filtro de marca
		Then somente produtos da marca selecionada devem ser exibidos

	Scenario: Aplicar filtro de cor
		Given que estou na pagina de produtos
		When seleciono um filtro de cor
		Then os produtos compativeis com a cor devem ser exibidos

	Scenario: Aplicar filtro de tamanho
		Given que estou na pagina de produtos
		When seleciono um filtro de tamanho
		Then os produtos compativeis com o tamanho devem ser exibidos

	Scenario: Aplicar combinacoes de filtros
		Given que estou na pagina de produtos
		When aplico dois ou mais filtros
		Then os resultados devem respeitar todos os filtros aplicados

	Scenario: Remover filtro
		Given que apliquei um filtro na listagem
		When removo o filtro aplicado
		Then os resultados devem ser atualizados sem o filtro

	Scenario: Remover multiplos filtros
		Given que apliquei multiplos filtros na listagem
		When removo todos os filtros
		Then a listagem deve voltar ao estado sem filtros

	Scenario: Validar resultado dos filtros
		Given que aplico filtros na pagina de produtos
		When visualizo os resultados
		Then todos os produtos retornados devem atender aos filtros selecionados
