#!/bin/bash

npm install
# Tag de comunicação e abertura de conexão com o AWS
#   aws configure
        # AWS Access Key ID [None]: "ASIATWM4LBGWOFXLEOUC"
        # AWS Secret Access Key [None]: "ZfZOLmV1mLRMm2svTZ2KdUAfXpu3cuknMa4qqMUx"
        # Default region name [None]: us-west-2
        # Default output format [None]: json

        #Comando para criar e executar os testes em AWS
        #Para a execução com sucesso deste ponto, foi criado um arquivo em devicefarmandroid.json com todas as configurações necessarias para o inicio do mesmo.
#chmod +x ./devopsQa.sh 
 node deviceFarm.js
