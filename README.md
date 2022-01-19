# Automação de Testes e2e Mobile :iphone:

Essa automação foi construida usando [Appium](http://appium.io/) para testar o aplicativo Banco Midway.

## Setup :construction_worker_woman:

### Java
Você pode instalar o Java acessando [java.com](https://www.java.com/en/), clicando em Java Download e seguindo as instruções do instalador.

#### Shortcut para Linux:

```bash
sudo apt-get install java
```

#### Shortcut para macOS

```bash
brew install java
```

### Node.js

Instale acessando [o site do Node.js](https://nodejs.org/en/download/) e seguindo as instruções de instalação.

### Instalando as dependências do projeto

Para instalar as dependências do projeto, execute o seguinte comando.

```bash
npm install
```

Temos um arquivo chamado **sh install_dependencies.sh** que faz a preparação do seu ambiente, instalando a maior parte das dependências restantes do projeto.

Execute o arquivo da seguinte forma:

```bash
sh install_dependencies.sh
```

### Adicionando variáveis de ambiente
#### Adicionando variáveis de ambiente

No terminal, adicione as seguintes linhas ao seu bash_profile

```bash
export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH/:$ANDROID_HOME/platform-tools
export JAVA_HOME=$(/usr/libexec/java_home)
```

#### Salvando o bash_profile:

Para salvar o bash_profile, execute o seguinte comando:

```bash
sudo vi ~/.bash_profile # .zshrc
```

Execute o comando **appium-doctor** para se certificar que deu tudo certo. Caso apareça algum problema no bin, execute os seguintes comandos:

```bash
export PATH=${JAVA_HOME}/bin:$PATH
```

```bash
sudo vi ~/.bash_profile # .zshrc
```

### Appium Doctor

Use o comando appium-doctor para fazer o diagnóstico do seu ambiente.
```bash
npx appium-doctor
```

Use o comando `appium-doctor --android` para verificar as dependências do Android
```bash
npx appium-doctor --android
```

Use o comando `appium-doctor --ios` para verificar as dependências do iOs
```bash
npx appium-doctor --ios
```

## Rodando o projeto :airplane:

### Android
#### Adicionando a APK de teste ao projeto

Inclua o apk do Android no diretório app/Android

#### Adicionando seu emulador ou device nas configs

Conecte seu device ao seu computador ou inicie seu emulador. Execute o seguinte comando para descobrir o nome do seu device ou emulador:

```bash
adb devices
```

No arquivo **codecept.conf.js**, adicione o seu device na propriedade **deviceName**, na sessão android.

Exemplo:

```bash
deviceName: process.env.DEVICE_NAME || "emulator-5556",
```

### iPhone (iOs)
#### Adicionando o APP de teste ao projeto

Incluia o apk do Android no diretório app/iOs

#### Adicionando seu Simulator ou iPhone real nas configs

Conecte seu device ao seu computador ou inicie seu emulador. Execute o seguinte comando para descobrir o nome do seu device ou emulador:

```bash
xcrun simctl list devices
```


No arquivo **codecept.conf.js**, adicione o seu Simulator ou iPhone real na propriedade **deviceName**, na sessão ios.

Exemplo:

```bash
deviceName: process.env.DEVICE_NAME || "iPhone 11 Pro Max",
```

> **Arquitetura do app iOS**
>
> Dispositivos reais possuem uma arquitetura chamada **ARM** e simuladores
> possuem uma arquitetura **x86**.
>
> Se você estiver desenvolvendo automação utilizando simulador iOs é necessário que o build do mesmo tenha sido feito para a arquitetura do iOS Simulator.
>
> Um build realizado para um device real não funcionará no simulador pois as arquiteturas são diferentes.
> Se você não tem acesso ao código fonte do aplicativo, infelizmente você só poderá testá-lo usando dispositivos iOS reais.

### Iniciando o servidor Appium

Para iniciar o servidor Appium, execute o seguinte comando:

```bash
npm run start
```

Você também pode usar o appium desktop desde que seja a versão **1.18**.

### Rodando seu primeiro teste:

Finalmente, vamos rodar seu primeiro teste. Execute o seguinte comando:

```bash
npm run android -- --grep "@SaibaMaisContaSimples"
```

ou

```bash
npm run ios -- --grep "@SaibaMaisContaSimples"
```

Pronto! Deve ter rodado com sucesso :grin:. Mas não se preocupe, caso tenha tido algum erro, verifique a sessão troubleshooting.

## Troubleshooting :bomb:

### Problema ao iniciar a sessão

Caso tenha problemas ao iniciar a sessão, adicione a seguinte capability no arquivo **codecept.conf.js**:

```bash
forceEspressoRebuild=true
```

### Recurso alocado

Caso receba a mensagem ```EBUSY resource busy or locked``` execute o seguinte comando:

```bash
npm cache clean --force
```

### Memória insuficiente

Caso receba a mensagem ```Could not reserve enough space for 1572864KB object heap```, verifique se seu jdk é 64 bits.
## Gerando relatório de teste

Instalar o allure report:

```bash
npm install allure
```
```bash
npm install allure-commandline -g
```

Após a execução do teste gerar o relatório:

```bash
allure generate allure-master/report/ –clean
```

Abrir o relatório:

```bash
allure open
```

## Cenários de teste

Para verificar os cenários de teste do android, basta rodar o seguinte comando:

```bash
profile=android npm run dry-run
```


## Documentação de apoio

Commands utilizados do CodeceptJS: https://codecept.io/helpers/Appium.html

Caso os commands do CodeceptJS não atendam a necessidade, pode ser utilizada a documentação do Appium:

http://appium.io/docs/en/about-appium/api/

http://appium.io/docs/en/writing-running-appium/caps/


## DeviceFarm

Para rodar os testes no deviceFarm, existe um script "deviceFarm.js" no projeto que pode ser executado.
Antes de executar esse script é necessário ter o app ios e android no diretŕoio app/ com os respectivos nomes:

IOS: app.ipa

Android: app.apk

O projeto está na conta de UAT da aws, por esse motivo é necessário ter as credenciais de uat do aws cli atualizadas e com permissão no deviceFarm.

Para encaminhar a execução, basta executar o seguinte comando:
```bash
node deviceFarm.js
```
