Quando o seu grunt começa a ficar grande demais, faz sentido querer quebrá-lo em arquivos menores.

É isso que esse "grunt2" faz, usando o módulo `load-grunt-config`.
Aproveitei e incluí também o `time-grunt`, pra ter uma idéia dos tempos de execução de cada tarefa.

Outra coisa legal é o arquivo `aliases.yaml`, que permite muito facilmente criar os diferentes conjuntos de tasks. Veja como fica a declaração do `concamina_cache`, por exemplo.

Pra usar esse cara, vc faz igualzinho na pasta grunt:

```bash
npm install

grunt concamina  # concatena / minifica
grunt concamina_cache  # concatena / minifica / cacheia templates
grunt test  # roda o karma
grunt test --phantom=true  # roda o karma com o PhantomJS
```