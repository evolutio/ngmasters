# 1. Jogo da vida:

O [Jogo da Vida](http://pt.wikipedia.org/wiki/Jogo_da_vida) é um [autômato celular](http://pt.wikipedia.org/wiki/Aut%C3%B3mato_celular) onde cada
célula de uma matriz possui dois estados possíveis: "viva" e "morta".

A cada dia que passa, o estado de uma célula pode mudar segundo as seguintes regras:

* Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.
* Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.
* Qualquer célula morta com exatamente três vizinhos vivos se torna uma célula viva.
* Qualquer célula viva com dois ou três vizinhos vivos continua no mesmo estado para a próxima geração.

Exemplo: supondo que num dia a matriz esteja assim (O = morto, #=vivo):


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