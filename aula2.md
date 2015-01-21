# 1. Jogo da vida:

O [Jogo da Vida](http://pt.wikipedia.org/wiki/Jogo_da_vida) (ou simplesmente, "life") é um [autômato celular](http://pt.wikipedia.org/wiki/Aut%C3%B3mato_celular) onde cada
célula de uma matriz possui dois estados possíveis: "viva" e "morta".

A cada dia que passa, o estado de uma célula pode mudar segundo as seguintes regras:

* Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.
* Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.
* Qualquer célula morta com exatamente três vizinhos vivos se torna uma célula viva.
* Qualquer célula viva com dois ou três vizinhos vivos continua no mesmo estado para a próxima geração.

Exemplo: supondo que num dia a matriz esteja assim (o = morto, @=vivo):


```
oooooooo
oo@@@@oo
oo@oo@oo
oo@oo@oo
oo@@@@oo
oooooooo
```

No dia seguinte, deverá estar assim:

```
ooo@@ooo
oo@@@@oo
o@@oo@@o
o@@oo@@o
oo@@@@oo
ooo@@ooo
```

E depois assim:

```
oo@oo@oo
o@oooo@o
oooooooo
oooooooo
o@oooo@o
oo@oo@oo
```

E depois todo mundo morreu... :(

Vc pode brincar com esse jogo aqui, implementado em javascript:
http://projects.abelson.info/life/

# 2. Implementar o "AngulifeJS".

Você vai criar um life usando AngularJS :-)

A idéia:

* Faça um template com uma tabela cujas linhas e colunas são populadas a partir de dois "ng-repeat" aninhados.
* Os dados do ng-repeat vêm de um array[][] bidimensional, inicializado pelo seu controller com, digamos, 50x50 valores "false".
* Cada td da tabela tem um ng-class que pinta a celula de uma cor diferente dependendo do booleano correspondente.
* Cada tb tem um ng-click que muda o estado do booleano correspondente - isso vai permitir que o usuario crie uma configuração inicial pra matriz.
* No seu controller, crie uma função "step" que recalcula o array[][] baseado nas regras do life.
* Crie botões pra controlar a passagem do tempo, que nem o abelson aí :-)
* Refatore de modo que o estado do tabuleiro e as regras do life sejam implementadas num serviço ao invés do controller.

* Pontos bônus pra frufrus do tipo:
** Permitir que o usuario configure o tamanho da matriz
** Permitir que o usuario configure a velocidade da passagem do tempo
** Ser usavel no celular

Boa diversão!!

Vale lembrar que esse tipo de coisa é legal de ter no currículo... 
Não necessariamente no currículo em si, mas numa entrevista, eh muito interessante vc poder mostrar uma brinquedinho como esse.
Isso prova que vc sabe programar - o normalmente já é uma das primeiras preocupações do seu entrevistador!
Faz sentido? Então capricha aí!!