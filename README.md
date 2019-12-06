# GoStack - Gerenciador de Projetos
Desafios da jornada GoStack

Com esta API, o usuário irar criar todo um projeto, desde seu nome até as suas tarefas.
Nas operações para atualizar o projeto ou a tarefa, vai ser necessário informa o ID(lowcase) e o Title (lowcase).

# Modo de Uso:

    A api, possui 3(três) rotas, que por sua vez permitiram todo o processo de criação e gerenciamento dos projetos.

    1ª Rota: Seu Host/projects/1(id do projeto):
        Nesta rota, o usuário irar atualizar ou deletar o seu projeto, a partir do seu id informado na URL.
        Para atualizar, vai ser necessário informar o id pela URL e o campo title (Nome do projeto) pelo corpo da requisição.

    2ª Rota: Seu Host/projects:
         Nesta rota, o usuário irar criar ou listar seu(s) projeto(s), informando o seu nome através do campo title (Nome do                    projeto), que deve ser enviado pelo corpo da requisição.

    3ª Rota: Seu Host/projects/1(id do projeto)/task:
        Nesta rota, o usuário irar adicionar  tarefas de seu projeto, informado o seu id pela URL e o title (Nome da Tarefa)
        pelo corpo da requisição.


Como se trata de uma API, o usuário final será o responsável pela sua interface de requisições!

Você pode usar softwares que ajudam a testar API's, o insomnia é uma ótima opção! https://insomnia.rest/
        
    
