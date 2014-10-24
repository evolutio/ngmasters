Quando o seu grunt começa a ficar grande demais, faz sentido querer quebrá-lo em arquivos menores.

É isso que esse "grunt3" faz, usando o módulo `load-grunt-config`.
Aproveitei e incluí também o `time-grunt`, pra ter uma idéia dos tempos de execução de cada tarefa.

Outra coisa legal é o arquivo `aliases.yaml`, que permite muito facilmente criar os diferentes conjuntos de tasks. Veja como fica a declaração do `concamina_cache`, por exemplo.

Pra usar esse cara, vc faz igualzinho na pasta grunt:

```bash
npm install
grunt concatena
```