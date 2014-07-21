# 1. Crie uma conta no Github.

http://github.com/seu_username deverá funcionar

# 2. Entenda como funciona o [Github pages](https://pages.github.com/)

Veja o repositório https://github.com/tonylampada/webgl_graphs

Note que ao invés de uma branch "master", ele tem uma branch "gh-pages" 
(ele poderia ter as duas, mas eu deletei a branch master de propósito pq 
não iria precisar dela)

Pro Github, essa branch "gh-pages" tem uma função especial: tudo que for 
colocado nela fica disponível no seu github.io.

Exemplo: o arquivo [oi.html](https://github.com/tonylampada/webgl_graphs/blob/gh-pages/oi.html) pode ser acessado na URL http://tonylampada.github.io/webgl_graphs/oi.html
Já o arquivo [index.html](https://github.com/tonylampada/webgl_graphs/blob/gh-pages/oi.html) pode ser acessado na URL http://tonylampada.github.io/webgl_graphs

# 3. Forka o meu repo [webgl_graphs](https://github.com/tonylampada/webgl_graphs)

Espera uns 10 minutinhos (Github pages novas demoram um pouco pra entrar no ar) e veja se o html fica disponível numa URL do tipo: http://seu_username.github.io/webgl_graphs

# 4. Crie uma Github page "ng-masters"

Ou seja, crie um repositório git com uma branch chamada gh-pages e poe algum html lá, de modo que vc possa abrir um link do tipo:

http://seu_username.github.io/ng-masters/aula1.html; ou
http://seu_username.github.io/ng-masters

Talvez ajude: https://www.youtube.com/watch?v=z9dnZMBkMnc
Talvez ajude (2): http://rogerdudler.github.io/git-guide/index.pt_BR.html 
Talvez ajude (3): http://fadamiao.github.io/git-start/
Talvez ajude (4): http://dev.rbtech.info/curso-controle-versao-git-aula-1/ (se vc ainda nao manja de git, vai ter que aprender um dia mesmo, apoveita o embalo... :-))

# 5. Agora sim, o exercício:

Vc deverá criar uma página capaz de listar issues de um repositório do Github, usando apenas JQuery.

## a) Faça uma página html contendo mais ou menos o seguinte:

```html
Usuario <input type="text" id="user">
Repositório <input type="text" id="reponame">
<button>Vai buscar as issues</button>

<table id="issuestable">
    <tr><th>Numero</th><th>Titulo</th>
</table>
```

## b) Implemente o onclick do botao de modo que ele faça o seguinte:

```javascript
function vaibuscarasissues(){
    function GithubRepo(username, reponame){
        //seu codigo aqui...
    }
    
    //mais um pouco de codigo aqui....
    
    var le_repo = GithubRepo(username, reponame);
    le_repo.busca_issues_e_popula_tabela("#issuestable");
}
```

GithubRepo é "tipo uma classe" que sabe:

* Buscar uma lista de issues de um repositório Github
* Popular uma tabela html com as issues que ela buscou

Pra isso, cada "instância" dessa classe vai precisar armazenar estado, que nesse caso vai ser composto pelo nome do usuario github e do repositorio.

Quando eu digitar nos inputs "freedomsponsors" e "www.freedomsponsors.org", ao clicar no botão, ele deverá mostrar na tabela as [issues do freedomsponsors](https://github.com/freedomsponsors/www.freedomsponsors.org/issues?state=open) que ela foi buscar via API (daqui https://api.github.com/repos/freedomsponsors/www.freedomsponsors.org/issues):

| Numero | Titulo |
| -------- | -------- |
| 297   | Fix email text/plain part   |
| 296   | Exclude from sponsored issues those with only revoked offers  |
| etc   | etc  |

Eu devo ser capaz de trocar de repositório e carregar uma nova tabela de issues sem precisar dar refresh na página.

Use a técnica do closure pra armazenar o estado das "instâncias" de GithubRepo.

## c) Faça uma versão 2 dessa página

Mas dessa vez armazene o estado do GithubRepo no "this" (ao invés de usar o closure), e implemente a função busca_issues_e_popula_tabela no prototype do GithubRepo.

Publique tudo no seu Github pages e manda o link pra galera lá na lista!!!


