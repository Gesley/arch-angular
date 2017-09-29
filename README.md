### Instalação

---
#### Instalação das ferramentas

* [NodeJS](https://nodejs.org/en/download/)

#### Instalação das dependências
>Para instalar o Webpack em modo global:

>```bash
>$ npm i -g webpack
>```

>Para instalar as dependências do NodeJS execute:

>```bash
>$ npm i
>```

### Ações a serem seguidas após a instalação das dependências
>Deve-se utilizar os scripts descritos no *package.json*

> Iniciar a aplicação
>```bash
>$ npm start
>```

> Gerar arquivos para deploy
>```bash
>$ npm run build
>```

### Guia de codificação
#### Módulos
Os módulos são a "logica" da aplicação, refletindo suas funcionalidades.

A organização dos módulos é feita da seguinte forma:

    + src
        + modules
            + moduleName
                + controllers
                    controllername.controller.js
                + views
                    viewname.ng.html
                moduleName.module.js
                routes.js

##### controllers
Os controllers refletem uma funcionalidade ou conjunto simples de funcionalidades. Pode ser associado a uma rota e controlar todo o comportamento da página ou pode ser associado a um conjundo específico via ng-controller.

##### views
As views são nomeadas com o sufixo .ng para que o webpack reconheça e possa tranformá-las usando o recurso templateCache no angular.

Basicamente cada rota possui uma view. É possível criar views para comportamentos diversos que não necessariamente estão associados a uma rota.

##### O arquivo *.module.js
O arquivo *.module.js é responsável por carregar cada dependência do módulo como: controllers, services, components e directives que possam ser utilizadas por ele. Para cada módulo o webpack vai gerar um "bundle" que posteriormente será carregado pela rota acessada com o recurso de lazy loading da dependência $ocLazyLoad.
Ele é referenciado no arquivo routes.js dentro da rota "pai" do arquivo.

##### O arquivo routes.js
É o responsável por controlar todas as rotas do módulo. A rota principal define o prefixo da rota e é responsável por carregar o módulo e o template padrão a ser utilizado.
Sem o o trecho do resolve, o módulo nao será carregado corretamente. Ele se repete em cada arquivo de rotas.

```javascript
{
            name: 'routename',
            url: '/routeprefix',
            abstract: true,
            templateUrl: templateFile,
            resolve: {
                loadModule: ($q, $ocLazyLoad) => $q(resolve => {
                    require.ensure([], () => {
                        const module = require('./moduleName.module').module;
                        $ocLazyLoad.load({name: module.name});
                        resolve(module.name);
                    });
                })
            }
        }
alert(s);
``` 

