---
layout: post
title: 'Incluindo o Bower no dia-a-dia.'
language: 'en'
image_url: '/assets/posts/bower.jpg'
ico: '/assets/posts/bower-ico.jpg'
categories: Bower
---

A maioria dos projetos web hoje, começam ou incluem bibliotecas de terceiros, e é bem provável que você esteja usando o [HTML5 Boilerplate](http://html5boilerplate.com/), [Bootstrap](http://getbootstrap.com/) ou o [jQuery](http://jquery.com/). A maioria desses projetos está disponível no Github e acessível através do Bower.


## O Que é o Bower??

O que, exatamente, é o Bower? De acordo com o site do projeto:
Bower é um gerenciador de pacotes para a web. Oferece uma solução genérica e imparcial para o problema de gerenciamento de pacotes <b>front-end</b>, expondo o modelo de dependência de pacotes através de uma API que pode ser consumida por um processo de implementações mais dogmático.

Essencialmente, o que isso significa é que o <b>Bower</b> fornece a você uma maneira de especificar quais bibliotecas (ou pacotes) que seu projeto precisa para ser desenvolvido. Ele também é capaz de lidar com as dependências dos projetos que você especificar, de forma automática.

## Instalação

O Bower depende do [Node.js](http://nodejs.org/) e do [NPM](https://www.npmjs.org/) para funcionar, assim, você precisa ter certeza que os tem instalados em sua máquina. Outro requerimento para trabalhar com o Bower é que os repositórios precisam estar no [GitHub](https://github.com/) e ser adicionados ao Catálogo do Bower.
Feito isso, vamos para o terminal/cmd e instalar o bower com o seguinte comando:

{% highlight javascript %}

  npm install -g bower

{% endhighlight %}

O NPM  é um gerenciador de pacotes de programas que rodam com o Node. Um detalhe bem importante é a opção <code class="inline"> -g </code> que está dizendo para o npm instalar o bower globalmente em nossa máquina, assim ele já fica nas nossas variáveis de ambiente e podemos utiliza-lo facilmente em outros projetos.

Feito o passo acima, agora é só adicionar o <b>Bower</b> em seu projeto. Vá até a pasta raiz de seu projeto ou local aonde queira colocar os pacotes de dependências que o <b>Bower</b> vai baixar, e o inicie.

{% highlight javascript %}

  bower init

{% endhighlight %}

O bower irá iniciar um wizard para gerar o arquivo “bower.json” pedindo pra você completar as seguintes informações:

{% highlight javascript %}

   # nome do projeto
  name:seu-projeto

  # versao do projeto
  version:0.0.1

  # descricao do projeto
  description: app tutorial install bower

  # arquivo principal do seu projeto
  main file: assets/scripts/main.js

  # palavras-chaves
  keywords: seu projeto

  # autores do projeto
  authors: "seu nome"

  # tipo de licenca
  license: MIT

  #homepage do projeto
  homepage: "https://github.com/seurepositorio"

  #Gostaria que o bower adicionasse os components ja instalados, como dependencias no arquivo json.
  set currently installed components as dependencies?(y/n) n

  # se voce gostaria de adicionar o ignore list default do bower
  add commonly ignored files to ignore list?(y/n) y

  #Tornar o pacote privado para que nao seja acidentalmente publicado no registro de pacotes do bower.
  would you like to mark this package as private which prevents it from beig accidentally published to  the registry?(y/n) y

{% endhighlight %}

## Bibliotecas de Terceiros

Com o Bower, você pode instalar (ou baixar), facilmente, essas bibliotecas, sem precisar ir ao GitHub. Todas as bibliotecas que você instala com o Bower serão colocadas em um diretório, <code class="inline">bower_components</code>, dentro do diretório raiz do seu projeto. Tudo isso pode ser feito pela linha de comando, assim, não há necessidade de ir e vir do navegador o tempo todo.


## Administrando Dependências

Outro grande recurso do Bower é que ele administra as dependências para você. Ele busca todos os pacotes que seu projeto precisa e todos os pacotes que esses pacotes precisam também. Cada pacote pode requerer uma versão específica de outro pacote, como, por exemplo, uma versão específica da jQuery.

Então, por exemplo, digamos que seu projeto requeira a jQuery. Você também decidie que precisará usar tanto o Bootstrap quanto o [FitVids](http://fitvidsjs.com/). O Bower verifica todos os pacotes e todas as versões dos pacotes dos quais eles dependem, avaliando quais versões são requeridas por todos. Se houver algum conflito, ele avisará.


## Editando o arquivo “bower.json”

Você pode editar o seu arquivo “<b>bower.json</b>” e adicionar

{% highlight javascript %}

  ...  
  "ignore": [
      "**/.*",
      "node_modules",
      "bower_components",
      "test",
      "tests"
    ]
            "dependencies": {
            "jquery": "~2.0.3"
    }
  }

{% endhighlight %}

e em seguida executar:

{% highlight javascript %}

  bower install

{% endhighlight %}

Toda vez que você executa o bower install, ele verifica quais as dependências existentes no seu arquivo “<b>bower.json</b>” e caso elas não estejam presentes na pasta de componentes serão instaladas.

## Executando o comando bower install

Outra maneira é executando o comando <code class="inline"> bower install --package  </code>

{% highlight javascript %}

  bower install jquery --save

{% endhighlight %}

A opção <code class="inline"> -- save </code> serve para adicionar o componente no “dependencies” do “<b>bower.json</b>”.

Por padrão, o diretório que o bower utiliza pra salvar os componentes instalados é “bower_components/”, caso você queira modificar, basta criar um arquivo chamado “.bowerrc” com o seguinte conteúdo:

{% highlight javascript %}

   {
      "directory":"assets/components"
  }

{% endhighlight %}

Depois de alterar o diretório dos componentes, o ideal é que você remova o diretório anterior, “bower_componentes” e execute o bower install, pra ele fazer download das dependências novamente. Ou simplesmente renomeie

Para importar o jquery no nosso projeto.

{% highlight javascript %}

  <script src="assets/components/jquery/jquery.min.js" />

{% endhighlight %}


## Pesquisando componentes

Caso você queira pesquisar mais componentes para adicionar ao seu projeto, é só utilizar o <code class="inline"> bower search </code>. Por exemplo, quero adicionar o bootstrap ao meu projeto, mas não sei o nome correto do pacote.

{% highlight javascript %}

  bower search bootstrap

{% endhighlight %}

Assim você consegue listar todos os pacotes que tenham relação com o bootstrap, é bem confuso de ver no terminal,como acontece na pesquisa de qualquer gerenciador de pacotes, mas da pra encontrar.


## Referências : [Bower](http://bower.io) | [Html5rocks](http://html5rocks.com/)
