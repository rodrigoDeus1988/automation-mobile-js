const fs = require('fs');
const path = require('path');
const { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } = require('constants');

const appExtensions = {
  ios: ['.ipa', '.app', '.zip'],
  android: ['.apk', '.apks', '.zip']
};

const appPath = dir => {
  const fileName = fs
    .readdirSync(dir)
    .find(name => appExtensions[process.env.profile]?.includes(path.extname(name)));
  return `${dir}/${fileName}`;
};

const ios = {
  app: process.env.APP_PATH || appPath(`${process.cwd()}/app/iOs`),
  platform: 'iOS',
  desiredCapabilities: {
    automationName: 'XCUITest',
    deviceName: process.env.DEVICE_NAME || 'iPhone 11',
    platformVersion: process.env.PLATFORM_VERSION,
    newCommandTimeout: 30000,
    wdaConnectionTimeout: 360000,
    useNewWDA: true,
    waitForQuiescence: false,
    fullReset: true,
    noReset: false,
    nativeInstrumentsLib: true,
    connection_timeout: 30000,
    request_timeout: 30000,
    clearSystemFiles: true,
    showIOSLog: false,
    wdaEventloopIdleDelay: 5,
    showXcodeLog: true
  }
};

const android = {
  app: process.env.APP_PATH || appPath(`${process.cwd()}/app/Android`),
  platform: 'Android',
  desiredCapabilities: {
    automationName: 'Espresso',
    deviceName: process.env.DEVICE_NAME || 'emulator-5554',
    espressoBuildConfig: `${process.cwd()}/config/espresso.json`,
    platformVersion: process.env.PLATFORM_VERSION,
    appPackage: 'br.com.midway.qa',
    fullReset: false,
    noReset: false,
    showGradleLog: true,
    forceEspressoRebuild: process.env.FORCE_ESPRESSO_REBUILD === 'true',
    newCommandTimeout: 300_000,
    autoGrantPermissions: true,
  }
};

const configByPlatform = name =>
  ({
    android,
    ios
  }[name] || 'Unknown platform');

const REPORT_PATH = './allure-master/report';
const SCREENSHOT_PATH = './output';
const STAGE = process.env['STAGE'] || 'qa';

exports.config = {
  output: process.env.REPORT_PATH || REPORT_PATH,
  helpers: {
    Appium: {
      host: 'localhost',
      port: 4723,
      appPackage: 'br.com.midway.qa',
      ...configByPlatform(process.env.profile)
    },
    SwipeHelper: {
      require: './support/SwipeHelper.js'
    },
    TapHelper: {
      require: './support/TapHelper.js'
    },
    ScrollHelper: {
      require: './support/ScrollHelper.js'
    },
    AssertHelper: {
      require: './support/AssertHelper.js'
    },
    YmlHelper: {
      require: './support/YmlHelper.js'
    },
    ElementHelper: {
      require: './support/ElementHelper.js'
    },
    PermissionHelper: {
      require: './support/PermissionHelper.js'
    },
    DateHelper: {
      require: './support/DateHelper.js'
    },
    REST: {
      endpoint:
        process.env['ENDPOINT'] || `https://api-${STAGE}.bancomidway.com.br/channel-mass-engine-v1`,
      timeout: 60000,
      defaultHeaders: {
        'Content-Type': 'application/json',
        'x-api-key':
          STAGE.toLowerCase() === 'qa'
            ? 'UfICeQf7eY1jB9oKwtqJ6jxu33sdiha1FtJFpWsd'
            : 'rMT3dbZQ7N9ZFqO6I0n8M25XvlA85M4N98XMjA9B',
        Accept: 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Origin: `https://api-${STAGE}.bancomidway.com.br`,
        'User-Agent': 'PostmanRuntime/7.26.8'
      }
    },
    TakeNoteHelper: {
      require: './support/TakeNoteHelper.js'
    },
    // -- Mass Engine Helpers --
    CPFHelper: {
      require: './support/mass_engine/CPFHelper.js',
      documentNotRegisteredPath: '/document-not-registered'
    },
    PaymentAccountHelper: {
      require: './support/mass_engine/PaymentAccountHelper.js',
      paymentAccountPath: '/payment-account',
      addBalanceToAccountPath: '/add-balance-to-account',
      addDeviceToAccountPath: '/add-device-to-account'
    },
    PaymentAccountWithCardHelper: {
      require: './support/mass_engine/PaymentAccountWithCardHelper.js',
      paymentAccountWithCardPath: '/payment-account-with-card'
    },
    PaymentAccountWithBlockedBalanceHelper: {
      require: './support/mass_engine/PaymentAccountWithBlockedBalanceHelper.js',
      accountWithBlockedBalancePath: '/account-with-blocked-balance'
    },
    PaymentAccountWithTransfersHelper: {
      require: './support/mass_engine/PaymentAccountWithTransfersHelper.js',
      paymentAccountWithTransfersPath: '/payment-account-with-transfers',
      addTransfersToAccountPath: '/add-transfers-to-account'
    },
    PaymentAccountToClosureHelper: {
      require: './support/mass_engine/PaymentAccountToClosureHelper.js',
      accountToClosurePath: '/account-to-closure'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions: {
      mochaFile: 'allure-master/result.xml'
    }
  },
  bootstrap: null,
  teardown: null,
  translation: 'pt-BR',
  hooks: [],
  gherkin: {
    translation: 'pt-BR',
    features: './features/*.feature',
    steps: [
      './step_definitions/saldo/SaldoSteps.js',
      './step_definitions/login/LoginSteps.js',
      './step_definitions/login/TermosSteps.js',
      './step_definitions/extrato/ExtratoSteps.js',
      './step_definitions/depositoPorBoleto/DepositoPorBoletoSteps.js',
      './step_definitions/encerramentoContaPagamento/EncerramentoContaPagamentoSteps.js',
      './step_definitions/onboarding/ContaPagamentoStep.js',
      './step_definitions/home/HomeSteps.js',
      './step_definitions/transferenciaContasMidway/TransferenciaContasMidwaySteps.js',
      './step_definitions/transferenciaFavorecido/TransferenciaFavorecidoSteps.js',
      './step_definitions/transferenciaOutrosBancos/TransferenciaOutrosBancosSteps.js',
      './step_definitions/cartao/HomeCartaoSteps.js',
      './step_definitions/outros/ContaPremiadaSteps.js',
      './step_definitions/outros/ContaRemuneradaSteps.js',
      './step_definitions/primeiroAcesso/PrimeiroAcessoSteps.js',
      './step_definitions/cartao/SolicitarCartaoSteps.js',
      './step_definitions/segundaViaComprovantes/SegundaViaComprovantesSteps.js',
      './step_definitions/pagamentos/PagamentosSteps.js',
      './step_definitions/habilitar_credito/HabilirarCreditoSteps.js',
      './step_definitions/cartao/BloqueioCartoesSteps.js',
      './step_definitions/cartao/ConfiguracaoSenhaCartaoSteps.js',
      './step_definitions/recargaCelularContasMidway/RecargaSteps.js',
      './step_definitions/cartao/ParcelamentoFaturaCartaoSteps.js',
      './step_definitions/emprestimos/EmprestimosSteps.js',
      './step_definitions/cartao/CambioSteps.js',
      './step_definitions/cartao/PagamentoFaturaCartaoSteps.js',
    ]
  },
  plugins: {
    allure: {
      outputDir: process.env.REPORT_PATH || REPORT_PATH,
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
      enabled: true,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true,
      addAttachment: true
    },
    screenshotOnFail: {
      enabled: true
    },
    addAttachment: {
      name: SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG,
      content: true
    },
    addEnvironment: {
      name: true,
      value: true
    },
    stepByStepReport: {
      enabled: false,
      screenshotsForAllureReport: false,
      output: process.env.SCREENSHOT_PATH || SCREENSHOT_PATH
    }
  },
  tests: './*_test.js',
  name: 'automationMobileJS',
  translation: 'pt-BR'
};
