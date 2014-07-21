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
Talvez ajude (2): http://dev.rbtech.info/curso-controle-versao-git-aula-1/ (se vc ainda nao manja de git, vai ter que aprender um dia mesmo, apoveita o embalo... :-))

# 5. Agora sim, o exercício:

Vc deverá criar uma página capaz de listar issues de um repositório do Github, usando apenas JQuery.

## a) Faça uma página html contendo mais ou menos o seguinte:

```html
Usuario <input type="text" id="user">
Repositório <input type="text" id="reponame">
<button>Vai buscar as issues</button>

<table id="issuestable"></table>
```
