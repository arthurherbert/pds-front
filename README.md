# Seleto - Seleção de Fotos Online

## Equipe

Arthur Herbert Silva Melo
Igor Oliveira Valente da Silveira
Júlia Amorim de Araújo
Vitor Ribeiro dos Santos

## Escopo

Aplicativo WEB para fotógrafos, onde os mesmos poderão fazer o upload dos ensaios de seus clientes, disponibiliizando as fotos em nuvem para que seus clientes possam fazer comentários sobre edições, favoritar fotos, escolher quais farão parte da entrega final, entre outras funcionalidades.

## Tecnologia do projeto

Usaremos ReactJS no frontend e NestJS no banckend, ambos escritos utilizando TypeScript.
Usaremos AWS como infraestrutura, seguindo a arquitetura abaixo:

![PDS Architecture](https://user-images.githubusercontent.com/26313549/137907219-0859d05c-f41f-485b-a099-eddfdd200933.png)

## Backlog Produto

- Como fotógrafo, eu quero criar álbuns
- Como fotógrafo, eu quero fazer upload de fotos
- Como fotógrafo, eu quero convidar clientes para ver, comentar e escolher fotos dentro dos álbuns
- Como fotógrafo, eu quero filtrar as fotos de um álbum (escolhidas, comentadas, etc)
- Como fotógrafo, eu quero gerar um link com as fotos finais do cliente

- Como cliente, eu quero visualizar um álbum com minhas fotos
- Como cliente, eu quero pré-selecionar fotos, comentar e marcá-las como favorita
- Como cliente, eu quero receber um link com todas as minhas fotos selecionadas.

(Arquitetura)

- Preparar ambiente frontend (React + AWS)
- Preparar ambiente backend (NestJS + AWS)
- Preparar banco de dados (RDS AWS + Entidades)
- Preparar camada de autenticação

### Sprint 1

    - Tarefas Técnicas
    	- Preparar ambiente da AWS [Arthur]
    	- Preparar ambiente de desenvolvimento (VSCode, Dependências, Lint) [Júlia]
    	- Preparar ambiente da AWS [Arthur]
    	- Preparar ambiente de desenvolvimento (VSCode, Dependências, Lint) [Vitor]
    	- Preparar ambiente da AWS [Arthur]
    	- Discutir e criar esquema do banco de dados [Arthur, Júlia, Vitor, Igor]

    - História: Como fotógrafo, eu quero criar álbuns
    - Tarefas:
    	- Projetar e testar a interface web [Júlia]
    	- Implementar interface Web [Júlia]
    	- Criar e testar rota para buscar álbum [Igor]
    	- Criar e testar rota para remover álbum [Vitor]
    	- Criar e testar rota para criar álbum [Vitor]

    - História: Como fotógrafo, eu quero fazer upload de fotos
    - Tarefas:
    	- Projetar e testar a interface web [Arthur]
    	- Implementar interface Web [Arthur]
    	- Implementar e testar mecanismo de marca d'água nas fotos [Júlia]
    	- Criar e testar comunicação com o S3 [Vitor]
    	- Criar e testar rota para adicionar as fotos [Igor]
    	- Criar e testar rota para remover as fotos [Vitor]
    	- Criar e testar rota para buscar as fotos [Igor]
    	- Criar e testar camada de autenticação [Igor]
        
        
### Sprint 2

    - Tarefas Técnicas
    	- Criar testes unitários front-end [Júlia]
    	- Criar testes unitários back-end [Igor]
        
    - História: Como fotógrafo, eu quero fazer upload de fotos
    - Tarefas:
    	- Implementar e testar mecanismo de marca d'água nas fotos [Júlia]
    	- Criar e testar comunicação com o S3 [Vitor]
    	- Criar e testar camada de autenticação [Igor]
        
    - História: Como fotógrafo, eu quero convidar clientes para ver, comentar e escolher fotos dentro dos álbuns
    - Tarefas:
    	- Criar interface web para convidar cliente [Arthur]
        - Criar interface web para comentar fotos [Júlia]
        - Criar interface web para selecionar fotos [Arthur]
    	- Criar e testar rota para comentar fotos [Vitor]
    	- Criar e testar rota para escolher fotos [Igor]
    	- Criar e testar rota para convidar cliente [Vitor]

    - História: Como fotógrafo, eu quero filtrar as fotos de um álbum (escolhidas, comentadas, etc)
    - Tarefas:
    	- Projetar e testar a interface web [Arthur]
    	- Criar e testar rota para filtrar as fotos [Igor]
        
    - História: Como fotógrafo, eu quero gerar um link com as fotos finais do cliente
    - Tarefas:
    	- Projetar e testar a interface web [Júlia]
    	- Criar e testar rota para gerar link [Vitor]


### Sprint 3

    - Tarefas Técnicas
        - Criar testes de integração [Igor e Vitor]
        - Criar testes de interface [Arthur e Júlia]
        - Reabilitar a integração contínua com a AWS [Arthur]
        
    - História: Como cliente, eu quero visualizar um álbum com minhas fotos.
    - Tarefas:
        - Implementar e testar visão de cliente da tela de álbum [Júlia]
        - [Técnica] Integrar a busca do álbum pelo link com o backend [Júlia e Igor]
        
    - História: Como cliente, eu quero pré-selecionar fotos, comentar e marcá-las como favorita.
    - Tarefas:
        - Implemntar e testar interfaces de comentário e marcar como favorito [Arthur]
        - [Técnica] Integrar as ações de comentar e favoritar com o backend. [Arthur e Igor]

    - História: Como cliente, eu quero receber um link com todas as minhas fotos selecionadas.
    - Tarefas:
        - Implementar e testar interface do e-mail de recebimento do link. [Júlia]
        - Implementar e testar interface de envio do link. [Júlia]
        - [Técnica] Integrar a ação de enviar o e-mail com o backend. [Júlia e Vitor]
        
