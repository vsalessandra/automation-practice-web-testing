Feature: Login

   Scenario: Login com email valido
      Given que estou na pagina de login
      When informo um email valido
      And informo uma senha valida
      And clico em Entrar
      Then o usuario deve ser autenticado com sucesso

   Scenario: Login com email invalido
      Given que estou na pagina de login
      When informo um email em formato invalido
      And informo uma senha valida
      And clico em Entrar
      Then o sistema deve informar que o email e invalido

   Scenario: Login com senha valida
      Given que estou na pagina de login
      When informo um email valido
      And informo uma senha valida
      And clico em Entrar
      Then o sistema deve permitir o acesso

   Scenario: Login com senha invalida
      Given que estou na pagina de login
      When informo um email valido
      And informo uma senha invalida
      And clico em Entrar
      Then o login deve ser recusado
      And uma mensagem de erro deve ser apresentada

   Scenario: Login com senha vazia
      Given que estou na pagina de login
      When informo um email valido
      And deixo o campo senha vazio
      And clico em Entrar
      Then o sistema deve informar que a senha e obrigatoria

   Scenario: Login com email vazio
      Given que estou na pagina de login
      When informo uma senha valida
      And deixo o campo email vazio
      And clico em Entrar
      Then o sistema deve informar que o email e obrigatorio

   Scenario: Login com email e senha vazios
      Given que estou na pagina de login
      When deixo os campos email e senha vazios
      And clico em Entrar
      Then o sistema deve apresentar as validacoes dos campos obrigatorios

   Scenario: Login com credenciais validas
      Given que estou na pagina de login
      When informo credenciais validas
      And clico em Entrar
      Then o sistema deve apresentar a confirmacao de login

   Scenario: Validar mensagem apresentada apos login invalido
      Given que estou na pagina de login
      When informo credenciais invalidas
      And clico em Entrar
      Then uma mensagem de erro deve ser apresentada ao usuario

   Scenario: Validar mensagem de sucesso apos login valido
      Given que estou na pagina de login
      When informo credenciais validas
      And clico em Entrar
      Then o sistema deve apresentar mensagem de sucesso