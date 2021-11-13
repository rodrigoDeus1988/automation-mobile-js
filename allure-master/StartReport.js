const { isMaster } = require("cluster")

setlocal enableextensions enabledelayedexpansion
set texto = Ambiente: QA

call cp allure-master/history report/allure-results/history -T -r
call cucumber -t @accounts
call allure generate report/allure-master --clean
call powershell -Command "(gc allure-master/widgets/summary.json) -replace '(\"reportName\" : \".*\",)', '\"reportName\" : \"%texto%\",' | Out-File -encoding ASCII allure-master/widgets/summary.json";
call allure open