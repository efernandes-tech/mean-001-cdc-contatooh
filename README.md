[![Build Status](https://travis-ci.org/edersonlrf/mean-001-cdc-contatooh.svg?branch=master)](https://travis-ci.org/edersonlrf/mean-001-cdc-contatooh)

# mean-001-cdc-contatooh

Gerenciador de contatos usando uma stack MEAN.

##### Passos Para Inicializar:

    1 - Instalar o NodeJS e o NPM.
    2 - Instalar o MongoDB.
    3 - Instalações globais: (atenção as permissões de adm da maquina)
        npm install -g nodemon
        npm install -g bower
        npm install -g grunt-cli
        npm install -g karma-cli
        npm install -g protractor
        webdriver-manager update
    4 - Acessar a pasta do projeto com o prompt.
    5 - Executar "npm install".
    6 - Executar "bower install". (arquivos salvos em "public/vendor")
    7 - Executar o Node "sh script/server.sh".
    8 - Rodar os testes "sh script/test.sh".
    9 - Acesse a url: "http://localhost:3000".
    10 - Subir serviços:
        mongod
        karma start config/karma.config.js
        protractor config/protractor.js

##### MongoDB:

    - Instalação:
        md \data\db
        "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath d:\test\mongodb\data
    - Comando para inicializar:
        "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
    - Acessar em outro prompt (ele inicializado no primeiro):
        mongo --port 27017 --host localhost
