Feature: Pagina Inicial

	Scenario: Validar navegacao para instagram em produtos
		Given que estou na pagina inicial
		When clico no link de instagram em produtos
		Then devo ser redirecionado para a pagina oficial no instagram

	Scenario: Validar links das redes sociais
		Given que estou na pagina inicial
		When clico nos links das redes sociais disponiveis
		Then cada link deve redirecionar para a rede social correta

	Scenario: Validar envio de email
		Given que estou na pagina inicial
		When informo um email valido no campo de newsletter
		And envio o formulario
		Then o sistema deve processar o envio e apresentar mensagem correspondente

	Scenario: Validar exibicao do menu principal
		Given que estou na pagina inicial
		When visualizo o cabecalho do site
		Then o menu principal deve ser exibido com suas opcoes disponiveis

	Scenario: Validar navegacao para a pagina de produtos
		Given que estou na pagina inicial
		When seleciono a opcao de produtos
		Then a pagina de produtos deve ser carregada corretamente
