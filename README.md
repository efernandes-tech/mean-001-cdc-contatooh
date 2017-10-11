# mean-001-cdc-contatooh

##### Passos Para Inicializar:

    1 - Instalar o node.
    2 - Instalar o MongoDB, e executar os comandos no prompt:
        md \data\db
        "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath d:\test\mongodb\data
    2 - Acessar a pasta do projeto com o prompt.
    3 - Executar "npm update".
    4 - Executar "bower update" (arquivos salvos em "public/vendor").
    5 - Instalar e executar o NodeMon "npm install nodemon -g" e "nodemon server.js" (atenção as permissões de adm da maquina).
    6 - Se não rodar o NodeMon, use o "node server".
    7 - Acesse a url: "http:\\localhost:3000".

##### MongoDB:

    - Comando para inicializar:
	    "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
    - Acessar em outro prompt (ele inicializado no primeiro):
    	mongo --port 27017 --host localhost

##### Correção de Bugs:

    - https://stackoverflow.com/questions/28651028/cannot-find-module-build-release-bson-code-module-not-found-js-bson
	    - Find in npm module mongodb:
		    ..\node_modules\mongodb\node_modules\bson\ext\index.js
	    - Change path to js version in catch block:
		    bson = require('../build/Release/bson');
	    - To:
		    bson = require('../browser_build/bson');
    - http://thecodeinside.com/trocando-usuario-e-email-em-commits-do-git
	    git filter-branch --env-filter "GIT_AUTHOR_NAME='edersonlrf'; GIT_AUTHOR_EMAIL='edersonluis.rf@gmail.com';" HEAD
