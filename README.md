# <img src="src/images/logo-black.png" width="80px" align="center" alt="InfoUNEB icon"> InfoUNEB
Site oficial da 9ª edição da Semana de Tecnologia da Informação da Universidade do Estado da Bahia

## Tecnologias Utilizadas
- HTML
- CSS/SASS
- Foundation
- Gulp
- Bower

## Gulp Tasks
- ``gulp server `` - Cria um servidor local na porta, que escuta os arquivos para fazer auto refresh.
- ``gulp sass`` - Processa o SASS do diretório ``src/sass`` e joga o CSS em ``src/style``. 
- ``gulp imagemin`` - Comprime o tamanho das imagens.
- ``gulp htmlmin`` - Comprime o tamanho do HTML, removendo quebras de linhas e espaços em branco.
- ``gulp usemin`` - Faz um merge dos assets listados no arquivo ``src/index.html``.
- ``gulp build`` - Utiliza todas as tasks listadas e prepara os arquivos para produção no diretório ``dist``.

## Design
Todo design foi elaborado por [Gui Rodrigues](http://www.guirodrigues.com.br/ "Melhor Designer Ever!").

## Ambiente de Desenvolvimento
Para usar esse projeto você vai precisar instalar primeiramente o [Ruby](https://www.ruby-lang.org/pt/documentation/installation/) e [Node](https://nodejs.org/en/download/) (Caso ainda não tenha).  
Feito isso, basta abrir seu terminal (ou prompt de comando) e rodar os seguintes comandos:  

1. Instalar a [RubyGem](https://pt.wikipedia.org/wiki/RubyGems) SASS: ``gem install sass``  
1. Instalar as depêndencias do Node: ``npm install -g bower gulp-cli``  
1. Clonar este projeto.  
1. Navegar até a pasta clonada (pelo terminal) e instalar as depêndencias do projeto: ``npm install``  
1. Rodar o servidor: ``gulp server``  
1. Abrir o endereço: ``http:\\localhost:8080`` (ou outro endereço indicado no passo anterior) em seu navegador favorito.  

## Licença
Caso tenha gostado, [pode usar](LICENSE.md) :) só mantenha nossas referências no rodapé.  
E me informe, ficaria feliz em vê-lo por aí.
