---
layout:     post
title:      "Polymer Introdução"
language:   'en'
image_url:  '/assets/posts/polymer.jpg'
ico:        '/assets/posts/polymer-ico.jpg'
categories: polymer
---

Quando se fala em Polymer o que lhe vem à cabeça? Se a Resposta foi Web Components, está correto. Primeiro vou começar falando do que se trata e depois por que surgiu os componentes web, para você entender o que é o Polymer, então vamos lá.

As aplicações web modernas, não são um complexo para projetar, mais são difíceis de desenvolver. A variedade de instrumentos envolvidos, a quantidade de testes necessários, a combinação de Bibliotecas/Frameworks, o processo de desenvolvimento tornou-se menos ágil. Como a aplicação escalas ao longo de um período de tempo, torna-se mais difícil manter o código limpo e fazer instâncias melhores.

<img src="/assets/posts/polymer-001.png" alt="dev-tools" style="padding: 0; border: none !important; background:none;">

Ferramentas de desenvolvimento podem não indicar, necessariamente, a complexidade do código-fonte real, mas isso certamente lhe dá uma visão sobre a estrutura DOM complexo de aplicações web modernas. Isto é principalmente devido ao uso indiscriminado de ```div(s)``` e ```span(s)``` na sua marcação que resulta em um código incontrolável. Muito se tem discutido sobre o valor semântico das marcas HTML5, mas elas ainda ficam aquém de fornecer uma marcação significativa, principalmente por causa de duas razões.

Temos muitos componentes semelhantes em nossa página web, que caem sob a mesma estrutura semântica. Para distingui-los uns dos outros, utilizamos classes, IDs, ou outros atributos disponíveis em tags semânticas, simplesmente não são o suficiente para atingir a grande variedade de componentes que constituem o nosso design. Como resultado, nós caímos de volta para marcas tradicionais como div ou span.

## A Solução para semântica

O W3C pretende abordar este problema através da introdução de componentes Web. Que são um conjunto de especificações que permitem aos desenvolvedores criar seus aplicativos da web como um conjunto de componentes reutilizáveis. “Web Components” fornece uma mudança de paradigma na abordagem tradicional de web design por mudar fundamentalmente a maneira como construímos e conceber aplicações web.

Cada componente vive em sua unidade encapsulada auto-definida com estilo correspondente e lógica de comportamento. Esses componente não só podem ser compartilhado em um único aplicativo web, como também pode ser distribuído na web para uso por outros.

Os Web Components, são compostos de quatro especificações diferentes:

* [Custom Elements](http://w3c.github.io/webcomponents/spec/custom/) - Estes permitem que os desenvolvedores criem seus próprios elementos que são relevantes para o seu projeto como parte da estrutura do DOM com a capacidade de style/script como qualquer outro tag HTML.

* [HTML Templates](http://www.html5rocks.com/en/tutorials/webcomponents/template/) - Estes permitem definir fragmentos de marcação que pode ficar consistente em páginas da web com a habilidade de injetar conteúdo dinâmico usando JavaScript.

* [Shadow DOM](http://w3c.github.io/webcomponents/spec/shadow/) - Isto é projetado para abstrair todas as complexidades da marcação, definindo limites funcionais entre a árvore DOM e as sub-árvores escondidos atrás de uma raiz sombra.

* [HTML Imports](http://w3c.github.io/webcomponents/spec/imports/) - Semelhante para importar um arquivo CSS para outro, estes permitem que você incluir e reutilizar documentos HTML em outros documentos HTML.

## O que é Polymer?

Por fim, não menos importante, agora você vai entender o que é o nosso amigo Polymer. As especificações introduzidas acima são muito novas e não é de surpreender ao saber que o [suporte ao browser](http://caniuse.com/#search=web%20components) não é muito bom. Mas, graças à biblioteca [Polymer](www.polymer-project.org), criado pelos impressionantes desenvolvedores da Google, podemos usar todos esses recursos em navegadores modernos hoje. Ele também fornece um conjunto de polyfills que nos permite usar os Web Components em navegadores não compatíveis com um quadro easy-to-use.

## O que ele faz?

* Permite-nos criar elementos personalizados com esquemas de nomeação definidas pelo usuário. Estes elementos personalizados podem então ser distribuído em toda a rede e utilizada por outras pessoas com Importações HTML.

* Permite que cada elemento personalizado possa ter o seu próprio modelo acompanhado de estilos e comportamentos necessários para utilizar esse elemento.

* Fornecendo um conjunto de ready-made UI e non-UI elementos para usar e estender em seu projeto.

*Nota: [X-Tag](http://x-tags.org/) é um projeto semelhante pela Mozilla que traz a promessa de elementos personalizados para todos os navegadores modernos*

Este artigo concentra-se principalmente sobre o uso de elementos visuais que fazem parte da biblioteca Polymer. A recolha de elementos é dividido em duas secções.

* Core Elements -  Estes são um conjunto de elementos visuais e não visuais, projetados para trabalhar com o layout a interação do usuário.

* Paper Elements -  Implementa a filosofia de [Materia para Design](http://www.google.com/design/), lançado pelo Google recentemente no [Google I/O 2014](https://www.google.com/events/io), e estas incluem tudo, desde um simples botão de uma caixa de diálogo com efeitos visuais puras.

## Instalando o Polymer

A maneira recomendada de instalar Polymer (v0.3.4) é através do [Bower](http://bower.io/). É um gerenciador de pacotes que gerencia as dependências para o seu projeto. Caso você não esteja familiarizado com ele, então eu recomendo que você o meu Artigo sobre [Bower no dia-a-dia](http://ivanhoinacki.com/blog/bower/2015/01/15/incluindo-o-bower-no-dia-a-dia.html) ou leia as instruções no próprio site do bower para saber como instalar e começar com ele.

*Supondo que você tenha uma configuração de pasta de projeto com um arquivo ```bower.json```, você pode instalar a última versão do Polymer executando o seguinte através da linha de comando*

{% highlight javascript %}

bower install --save Polymer/polymer

{% endhighlight %}

Isto irá instalar a biblioteca do Polymer, platform e os polyfills dentro da pasta ```bower-components```

{% highlight javascript %}

bower_components/
├── core-component-page
├── platform
└── polymer

{% endhighlight %}

*Nota: ```--save``` irá adicionar o pacote como uma dependência para o arquivo ```bower```. Isso é útil quando você quer atualizar os pacotes usados ​​em seu projeto. *

Desde a instalação Polymer, você pode começar criando o arquivo ```index.html``` na pasta raiz do seu projeto.

{% highlight javascript %}

├── bower_components/
├── bower.json
└── index.html

{% endhighlight %}

Adicionar o ```platform.js / polyfill ``` no ```<head>``` do documento e, em seguida, você estará pronto para usar elementos personalizados predefinidos em seus documentos.

{% highlight javascript %}

<script src="bower_components/platform/platform.js"></script>

{% endhighlight %}

## Usando elementos personalizados

Usando elementos personalizados na sua marcação tipicamente envolve as seguintes etapas.

* 1- Baixe o pacote elemento personalizado via Bower.
* 2- Importar o correspondente na pasta do seu documento ```.html```.
* 3- Use o elemento markup em qualquer lugar em seu documento.

Neste exemplo, vamos experimentar com a ```paper-input``` [custom element](https://www.polymer-project.org/0.5/docs/elements/paper-input.html#paper-input) e usá-lo em nossa página HTML.
Você pode instalar ```paper-input``` diretamente do ```Bower``` e ele vai baixar automaticamente outras dependências necessárias.

{% highlight javascript %}

bower install --save Polymer/paper-input

{% endhighlight %}

Antes de usar qualquer elemento personalizado em sua página, você precisará importar o correspondente arquivo ```.html```

{% highlight javascript %}

<link href="bower_components/paper-input/paper-input.html" rel="import">

{% endhighlight %}

Agora você pode usar o elemento ```paper-input``` em qualquer lugar dentro da tag ```<body>```

{% highlight javascript %}

<paper-input></paper-input>

{% endhighlight %}

Existem muito poucas variações possíveis com o grande número de atributos que acompanham este elemento personalizado. O [Component Page](https://www.polymer-project.org/0.5/docs/elements/paper-input.html#paper-input) tem uma lista completa de atributos que podem ser utilizados com ```paper-input``` Com a ajuda do [Polymer Designer Tool](https://polymer-designer.appspot.com/) você pode criar um demonstrativo utilizando vários atributos.

<img src="/assets/posts/polymer-002.gif" alt="dev-tools" style="padding: 0; border: none !important; background:none;">

O que eu particularmente gosto é a técnica de flutuação etiqueta, que se tornou muito popular e [um grande número de pessoas tem escrito sobre ele](http://bradfrost.com/blog/post/float-label-pattern/). Todas essas técnicas são grandes, porem pode ser mais simples do que apenas adicionar um atributo para a marca.

{% highlight javascript %}

<paper-input floatingLabel label="Floating Label"></paper-input>

{% endhighlight %}

## Elementos com Estilos Customizados

Elementos personalizados são "*HTML Puro*" de primeira classe, o que significa que eles podem ser decorados via CSS e script, como qualquer outro elemento HTML.
Por exemplo, o estilo do nosso elemento customizado ```paper-input``` podemos usar o nome da marca como o seletor de estilo de todos os elementos ```paper-input```.


{% highlight css %}

paper-input {
    width: 400px;
    height: 15px;
}

{% endhighlight %}

Ou estilo um monte deles com a mesma classe:


{% highlight css %}

.first-name {
    width: 400px;
    height: 15px;
}

{% endhighlight %}

Ou como alvo um específico elemento ```paper-input``` com um ID:


{% highlight javascript %}

$('#first-name').addClass('show');

{% endhighlight %}

Pode haver casos em que você deseja substituir os estilos padrão do elemento personalizado que pode não necessariamente ser afetadas pelos seletores acima. Isso acontece porque a marcação que torna-se um elemento personalizado vive sob a sombra DOM, que permanece imune aos estilos aplicados diretamente ao elemento personalizado.

Felizmente, o Polymer oferece o ```::shadow``` pseudo-element e o ```/deep/``` combinado para perfurar através dos limites da Sombra DOM e nos permite estilizar elementos sob diferentes árvores de sombra de fora do elemento personalizado.

Por exemplo, digamos que você deseja substituir o esquema padrão azul do nosso-de entrada de papel para verde.

<img src="/assets/posts/polymer-003.png" alt="dev-tools" style="padding: 0; border: none !important; background:none;">

Olhando para a marcação do elemento personalizado sob a sombra DOM, você pode descobrir o que você precisa alterar os estilos de ```.focusedColor```para alterar o esquema de cores.
Assim, ```paper-input::shadow``` corresponderá ```#shadow-root``` dentro do elemento ```paper-input``` De lá, você pode escrever um seletor descendente normal a direcionado a os elementos individuais.

{% highlight css %}

paper-input::shadow .focusedColor {
    color: white;
    background: red;
}

{% endhighlight %}

Da mesma forma, o combinado ```/deep/``` pode ignorar completamente todas as fronteiras de sombra, permitindo-lhe atravessar em qualquer número de árvores de sombra para chegar ao elemento de destino.

{% highlight css %}

paper-input /deep/ .focusedColor {
    color: white;
    background: red;
}

{% endhighlight %}

*Nota:Neste exemplo, tanto ```::shadow``` e ```/deep/``` iria trabalhar da mesma forma ```/deep/``` irá tornar-se útil quando você deseja direcionar elementos descendentes de elementos personalizados que vivem sob limites sombra concêntricos*

A combinação dos seletores ```::shadow``` e ```/deep/``` permite elementos de estilo em todo o componente. Mas, ao mesmo tempo, denominando elementos personalizados de fora não adicionar camadas de estilos substituídas cancelados que foram previamente criados para o elemento personalizado.

<img src="/assets/posts/polymer-004.png" alt="dev-tools" style="padding: 0; border: none !important; background:none;">

## Compatibilidade com o Browser

O Polymer visa apoiar a versão mais recente do [evergreen browsers](http://tomdale.net/2013/05/evergreen-browsers/)(O que significa que os navegadores de atualização automática). Na prática, o elemento customizado ```paper-input``` deve trabalhar o mesmo nas versões mais recentes de todos os principais navegadores.

Isto tem uma ressalva, porém, porque os nossos estilos específicos para substituir o esquema de cores padrão do elemento ```paper-input``` elemento não funcionam como esperado no Safari. No caso de você não está ciente, a Apple tem a [sombra DOM removido a partir do Safari](http://trac.webkit.org/changeset/164131), o que significa ```::shadow``` e ```/deep/``` representam seletores inválidos para o Safari, o que força o analisador CSS ignorar completamente os conjuntos de regras definidos com estes seletores.

<img src="/assets/posts/polymer-005.png" alt="dev-tools" style="padding: 0; border: none !important; background:none;">

Tal como está, a última versão do Safari (v7.0.4) expõe os elementos dentro do Sombra DOM ao nível externo, o que significa que podemos usar seletores descendentes CSS padrão para conseguir o mesmo efeito.

{% highlight css %}

paper-input .focusedColor {
    color: white;
    background: red;
}

{% endhighlight %}

*Nota: Não combine conjuntos de regras com selectores para outros navegadores com este um, caso contrário Safari irá ignorar [a regra de todo o conjunto.](http://stackoverflow.com/questions/13816764/invalid-css-selector-causes-rule-to-be-dropped-what-is-the-rationale)*

## Muitas solicitações HTTP?

É difícil imaginar que o uso de um elemento simples como ```paper-input``` resultaria em tantas solicitações HTTP!

<img src="/assets/posts/polymer-006.png" alt="dev-tools" style="padding: 0; border: none !important; background:none;">

Isto pode ser atribuído à natureza modular do Polymer, onde cada componente é constituído por várias outras unidades funcionais, com cada unidade possuindo a capacidade de correr independentemente.

Usando esses elementos personalizados em uma aplicação web de grande escala poderia degradar drasticamente o desempenho da rede do seu site. Para combater este problema, a equipe Polymer contriu o [Vulcanize](https://github.com/Polymer/vulcanize). Ele deixa em linha todas as suas importações HTML, achata suas dependências, e produz uma saída que gera muito menos pedidos de rede.

Addy Osmani escreveu: [um artigo em profundidade sobre Vulcanize](https://www.polymer-project.org/0.5/articles/concatenating-web-components.html) no blog Polymer, descreve o processo de concatenação e inlining ativos usando o Vulcanize.

É importante não esquecer que ainda está em Polymer [developer preview](https://www.polymer-project.org/0.5/resources/faq.html) e está continuamente sendo trabalhada pela comunidade ([você pode contribuir também](https://github.com/Polymer/tools/blob/master/CONTRIBUTING.md)!).

Dito isto, isso não deve nos impedir de construção de aplicações web de hoje com os poderosos recursos de polímero e componentes web.

## Referências : [Polymer](http://polymer-project.org) | [Html5rocks](http://html5rocks.com/)
