---
layout: post
title: 'Iniciando com GruntJS'
language: 'en'
image_url: '/assets/posts/gruntjs.jpg'
ico: '/assets/posts/gruntjs-ico.jpg'
categories: GruntJS
---

<center>" GruntJS – Por onde começar? "</center>

O que é o GruntJS? Como usar o GruntJS? Por onde começo? Nesse tutorial, vou explicar passo a passo o que é o GruntJS, como ele funciona e como aplicar o [GruntJS](http://gruntjs.com/) no seu projeto para melhorar seu workflow!

<!-- more -->

## O que é e pra que serve o GruntJS?

O GruntJS é um “Task Runner”. Ele roda a partir do Terminal e serve para automatizar tarefas como: <i>concatenação de scripts, compilação, minificação, testes unitários, linting</i>, <b>etc</b>. O <b>GruntJS</b> faz praticamente tudo o que você pode imaginar. A vantagem disso é que você não precisa utilizar uma ferramenta pra cada uma dessas tarefas, pois o <b>GruntJS</b> dá conta de tudo.


## Por onde começar

O Grunt precisa do <b>Node.JS</b> e <b>NPM</b>. Então primeiro baixe e instale o [Node.JS](http://nodejs.org/download/), é super simples, no proprio site tem os passos de instalação, se a instalação for no sistema operacional windows, será necessário reiniciar sua maquina. Então após o reboot, verifique se o <b>Node.JS</b> foi instalado com sucesso, digitando o comando a baixo no Terminal.

{% highlight javascript %}

  node -v

{% endhighlight %}

Não tem segredo. Se você já tinha o <b>GruntJS</b> instalado, remova-o com o comando abaixo no Terminal:

{% highlight javascript %}

  npm uninstall -g grunt

{% endhighlight %}

Se por acaso você não tiver permissão para desinstalar, provavelmente vai precisar usar o sudo:

{% highlight javascript %}

  sudo npm uninstall -g grunt

{% endhighlight %}

Após isso, instale o <b>GruntJS</b> com o comando:

{% highlight javascript %}

  npm install -g grunt-cli

{% endhighlight %}

Agora você já tem o comando <u>grunt</u> disponível no seu terminal.

Perceba que foi instalado o <b>grunt-cli</b> e não o <b>grunt</b>. Isso permite que você tenha versões diferentes do <b>GruntJS</b> rodando para vários projetos sem maiores problemas, outro detalhe bem importante é a opção <code class="inline"> -g </code> que está dizendo para o npm instalar o bower globalmente em nossa máquina, assim ele já fica nas nossas variáveis de ambiente e podemos utiliza-lo facilmente em outros projetos.

## Tá, mas e como ele funciona?

Para o <b>GruntJS</b> funcionar, você vai precisar criar dois arquivos na raiz do seu projeto: <b>package.json</b> e <b>Gruntfile.js</b>.

## O package.json

O <b>package.json</b> é um arquivo do <b>Node.JS</b>. Nele estarão algumas informações sobre o seu projeto e os plugins que o <b>GruntJS</b> vai utilizar.

O seu <b>package.json</b> deve se parecer com isso:

{% highlight javascript %}

  {
  "name": "project_name",
  "version": "1.0.0",
  "title": "Project Title",
  "homepage": "http://www.yoursite.com.br"
  }

{% endhighlight %}

Preencha <i>name, version, title e homepage</i> conforme o seu projeto.


## O Gruntfile.js

O <b>Gruntfile.js</b> é o arquivo de configuração do <b>GruntJS</b>. Nele você vai dizer tudo o que o Grunt deve fazer.

Seu arquivo <b>Gruntfile.js</b> deve ter a seguinte estrutura:

{% highlight javascript %}

    module.exports = function( grunt ) {

    grunt.initConfig({
      // Tasks que o Grunt deve executar
    });
  };

{% endhighlight %}

Agora que você tem os dois arquivos necessários, vamos ver o Grunt funcionando!

## Criando um projeto com Grunt

Para iniciar um projeto com o Grunt existem algumas opções: você pode optar pelo grunt-init que gera o scaffolding para alguns modelos de aplicações, como:

* jquery: cria um projeto para um plugin jQuery
* commonjs: cria um projeto para um módulo commonjs
* Gruntfile: cria um arquivo Gruntfile.js básico
* gruntplugin: cria um plugin grunt
* node: cria um módulo Node.JS

Você também pode baixar outros templates, além dos oficiais. Para criar um projeto a partir de um dos template como os descritos acima basta usar o comando:

{% highlight javascript %}

  grunt-init

{% endhighlight %}

## Como rodar?

Mais simples impossível, depois de tudo configurado, você pode executar todas as tarefas descritas no <b>Gruntfile.js</b> com o comando:

{% highlight javascript %}

  grunt

{% endhighlight %}

## Referências : [Tableless](http://tableless.com.br/) | [GruntJS](http://gruntjs.com/getting-started) | [Treehouse](http://blog.teamtreehouse.com/)
