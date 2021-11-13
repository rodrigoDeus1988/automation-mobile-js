'use strict';

require('events').EventEmitter.defaultMaxListeners = 15;

// required libs
const AWS = require('aws-sdk');
const path = require('path');
const fs = require('fs');
const JSZip = require('jszip');
const shell = require('shelljs');
const util = require('util');
const packageJson = require('./package.json');

const devicefarm = new AWS.DeviceFarm({ region: 'us-west-2' });
const jsonConfigAndroid = require('./config/devicefarmandroid.json');
const jsonConfigIos = require('./config/devicefarmios.json');

const sleep = (ms) => {
  console.log(`-- sleeping for ${ms / 1000} seconds...`);
  return new Promise(resolve => setTimeout(resolve, ms));
}

const uploadTestScheduleRun = (resolve, packageArn, devicePoolARN, testSpecARN, runName, params) => {

  const paramsCreateUploadAppium = {
    name: path.basename(params.appiumTestZipName),
    type: 'APPIUM_NODE_TEST_PACKAGE',
    projectArn: params.projectARN
  }

  devicefarm.createUpload(paramsCreateUploadAppium, async (err, data) => {

    if (err) console.log('--- Create upload appium failed --- ', err, err.stack)
    else {
      const uploadAppiumARN = data.upload.arn
      const uploadAppiumURL = data.upload.url

      if (params.verbose) {
        console.log('--- Appium ARN --- ', uploadAppiumARN, uploadAppiumURL)
        console.log('--- Spec ARN --- ', testSpecARN)
        console.log('--- Project ARN --- ', params.projectARN)
      }
      runName = `${runName}_${new Date().toISOString()}`;
      const paramsScheduleRun = {
        projectArn: params.projectARN,
        appArn: packageArn,
        devicePoolArn: devicePoolARN,
        name: runName,
        test: {
          testSpecArn: testSpecARN,
          type: 'APPIUM_NODE',
          testPackageArn: uploadAppiumARN
        }
      };

      shell.exec(`curl -T ${params.appiumTestZipName} "${uploadAppiumURL}"`, async (code, stdout, stderr) => {

        if (params.verbose) console.log('--- curl appium tests --- ', stdout, code)

        // Do not remove. Necessary for the files to be fully uploaded
        await sleep(10000);

        // Starts the run
        devicefarm.scheduleRun(paramsScheduleRun, (err, data) => {
          if (err) console.log('--- Schedule run failed --- ', err, err.stack)
          else {
            if (params.verbose) console.log('--- Run data --- ' + runName, data)
            resolve(data)
          }
        })
      })
    }
  })
}

const runSchedule = (params, tgzPath) => {

  return new Promise(((resolve, reject) => {
    try {
      if (fs.existsSync(tgzPath)) {

        if (params.verbose) console.log('--- TGZ exists ---')

        try {
          if (fs.existsSync(params.appiumTestZipName)) {

            if (params.verbose) console.log('--- ZIP exists ---')

            // Upload the IPA and run iOS
            if (params.iOSIPAPath) {

              const paramsCreateUploadIPA = {
                name: path.basename(params.iOSIPAPath),
                type: 'IOS_APP',
                projectArn: params.projectARN
              }

              devicefarm.createUpload(paramsCreateUploadIPA, (err, data) => {

                if (err) console.log('--- Create upload IPA failed --- ', err, err.stack)
                else {
                  const uploadIPAARN = data.upload.arn
                  const uploadIPAURL = data.upload.url

                  if (params.verbose) {
                    console.log('--- ipa ARN --- ', uploadIPAARN)
                    console.log('--- ipa URL --- ', uploadIPAURL)
                  }

                  shell.exec(`curl -T ${params.iOSIPAPath} "${uploadIPAURL}"`, (code, stdout, stderr) => {
                    if (params.verbose) console.log('--- curl iOS ipa --- ', stdout, code)
                    uploadTestScheduleRun(resolve, uploadIPAARN, params.iOSDevicePoolARN, params.testSpecIOSARN,
                      params.runNameIOS, params)
                  })
                }
              })
            }

            // Upload the APK and run Android
            if (params.androidAPKPath) {

              const paramsCreateUploadAPK = {
                name: path.basename(params.androidAPKPath),
                type: 'ANDROID_APP',
                projectArn: params.projectARN
              }

              devicefarm.createUpload(paramsCreateUploadAPK, (err, data) => {

                if (err) console.log('--- Create upload APK failed --- ', err, err.stack)
                else {
                  const uploadAPKARN = data.upload.arn
                  const uploadAPKURL = data.upload.url

                  if (params.verbose) {
                    console.log('--- apk ARN --- ', uploadAPKARN)
                    console.log('--- apk URL --- ', uploadAPKURL)
                  }

                  shell.exec(`curl -T ${params.androidAPKPath} "${uploadAPKURL}"`, (code, stdout, stderr) => {
                    if (params.verbose) console.log('--- curl Android apk --- ', stdout, code)
                    uploadTestScheduleRun(resolve, uploadAPKARN, params.androidDevicePoolARN, params.testSpecAndroidARN,
                      params.runNameAndroid, params)
                  })
                }
              })
            }
          } else {
            if (params.verbose) console.log('--- ZIP does not exist ---')
          }
        } catch (err) {
          if (params.verbose) console.log('--- ZIP error --- ', err)
          reject(err)
        }
      } else {
        if (params.verbose) console.log('--- TGZ does not exist ---')
      }
    } catch (err) {
      if (params.verbose) console.log('--- TGZ error --- ', err)
      reject(err)
    }
  }))
}

const packageTests = (params, tgzPath) => {

  return new Promise(((resolve, reject) => {

    // Zipping the TGZ
    const zip = new JSZip()
    const tgzPromise = new JSZip.external.Promise((resolve, reject) => {
      fs.readFile(tgzPath, function (err, data) {
        if (err) {
          if (params.verbose) console.log('--- Read file err --- ', err)
          reject(err)
        } else {
          if (params.verbose) console.log('--- Read file ok --- ', data)
          resolve(data)
        }
      })
    })
    zip.file('appium-tests.tgz', tgzPromise)

    // Write the zip
    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream(params.appiumTestZipName))
      .on('finish', () => {
        if (params.verbose) console.log('--- Write zip ok --- ')
        resolve('finish')
      })
  }))
}

const createBundle = (params) => {
  return new Promise(((resolve, reject) => {
    shell.cd(path.normalize(params.appiumTestFolderPath));

    // Installing npm-bundle and bundling the test folder
    shell.exec('./node_modules/.bin/npm-bundle', async (code, stdout, stderr) => {
      if (stderr) {
        console.log('--- npm-bundle failed --- ', stderr)
        reject(stderr);
      } else {
        console.log('--- npm-bundle ok --- ', stdout, code)
        resolve(stdout);
      }
    })
  }));
};


const listJobs = async (arn) => {
  return new Promise((resolve, reject) => {
    console.log('-- list jobs to get the execution for each device --');
    var params = {
      arn
    };
    devicefarm.listJobs(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        reject(err);
      } else {
        resolve(data.jobs);           // successful response
      }
    });
  });
};

const listArtifacts = async (arn, type) => {
  return new Promise(((resolve, reject) => {
    console.log(`-- get artifacts with type "${type}" from run with arn "${arn}"`);
    var params = {
      type,
      arn,
    };
    devicefarm.listArtifacts(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        reject(err);
      } else {
        resolve(data.artifacts);           // successful response
      }
    });
  }));
};

const createDirIfNotExists = async (dir) => {
  return new Promise(((resolve, reject) => {
    if (!fs.existsSync(dir)) {
      shell.exec(`mkdir -p "${dir}"`, async (code, stdout, stderr) => {
        if (stderr) {
          console.log(stderr);
          reject(stderr);
        }
        console.log(`--- mkdir ${dir} --- `, stdout, code)
        resolve(stdout);
      });
    }
    resolve(true);
  }));
};

const removeFileIfExists = async (filePath) => {
  return new Promise(((resolve, reject) => {
    if (fs.existsSync(filePath)) {
      shell.exec(`rm -f "${filePath}"`, async (code, stdout, stderr) => {
        if (stderr) {
          console.log(stderr);
          reject(stderr);
        }
        console.log(`--- rm -f ${filePath} --- `, stdout, code)
        resolve(stdout);
      });
    }
    resolve(true);
  }));
};

const downloadFiles = async (fileListWithUrl, destinationPath) => {
  return new Promise(((resolve, reject) => {
    const errors = [];
    fileListWithUrl.forEach(file => {
      const destinationPathFull = `${destinationPath}/${file.name.replace(/\s/g, '').replace(/\./, '')}.${file.extension}`;
      const curlCommand = `curl -L "${decodeURI(file.url)}" -o ${destinationPathFull}`;
      console.log(curlCommand);
      shell.exec(curlCommand, (code, stdout, stderr) => {
        if (stderr) {
          console.log(stderr);
          errors.push(stderr);
        }
        console.log(`--- downloaded file ${destinationPathFull} --- `, stdout, code)
      });
    });
    if (errors.length > 0) {
      reject(errors);
    }
    resolve(true);
  }));
};

const createDeviceInfoFile = (deviceInfo, folder) => {
  return new Promise((async (resolve, reject) => {
    const file = `${folder}/device_info.txt`;
    shell.exec(`echo '${JSON.stringify(deviceInfo)}' >> ${file}`, (code, stdout, stderr) => {
      if (stderr) {
        console.log(stderr);
        reject(stderr);
      }
      console.log(`--- created file ${file} ---`, stdout, code)
      resolve(stdout);
    });
  }));
};

const downloadRunArtifacts = async (runResult, config) => {
  return new Promise((async (resolve, reject) => {
    console.log(`-- Now it\'ll try to get the result artifacts from aws device farm...`);

    const destinationPath = config.downloadArtifactsPath;

    const jobs = await listJobs(runResult.arn);

    await createDirIfNotExists(destinationPath); // create platform folder (given from config)

    for (let i = 0; i < jobs.length; i++) {
      const fileArtifacts = await listArtifacts(jobs[i].arn, 'FILE');
      console.log(`-- file artifacts: ${util.inspect(fileArtifacts)}`);
      const screenshotArtifacts = await listArtifacts(jobs[i].arn, 'SCREENSHOT');
      console.log(`-- screenshot artifacts: ${util.inspect(screenshotArtifacts)}`);
      const logArtifacts = await listArtifacts(jobs[i].arn, 'LOG');
      console.log(`-- log artifacts: ${util.inspect(logArtifacts)}`);

      // create diractories if it not exists
      const deviceFolderName = `${jobs[i].device.name.replace(/\s/g, '').replace(/[\.\{\}\,\(\)]/g, '')}_${jobs[i].device.os.replace(/[\.\{\}\,]/g, '-')}`;
      await createDirIfNotExists(`${destinationPath}/${deviceFolderName}`);
      await createDeviceInfoFile(jobs[i].device, `${destinationPath}/${deviceFolderName}`);

      await createDirIfNotExists(`${destinationPath}/${deviceFolderName}/files`);
      await createDirIfNotExists(`${destinationPath}/${deviceFolderName}/screenshots`);
      await createDirIfNotExists(`${destinationPath}/${deviceFolderName}/logs`);


      await downloadFiles(fileArtifacts, `${destinationPath}/${deviceFolderName}/files`);
      await downloadFiles(screenshotArtifacts, `${destinationPath}/${deviceFolderName}/screenshots`);
      await downloadFiles(logArtifacts, `${destinationPath}/${deviceFolderName}/logs`);
    }
    resolve(true);
  }));
};

const runOnDeviceFarm = async (config, tgzPath) => {
  try {

    const runScheduleResult = await runSchedule(config, tgzPath);
    console.log(`-- runSchedule result: ${util.inspect(runScheduleResult)}`);
    if (config.deletePackageFilesAfterUpload) {
      removeFileIfExists(tgzPath);
      const zipPath = path.normalize(`${process.cwd()}/${config.appiumTestZipName}`);
      console.log(`-- zip file path: ${zipPath}`)
      await removeFileIfExists(zipPath);
    }

    let runArn = runScheduleResult.run.arn; // You can get the Amazon Resource Name (ARN) of the run by using the list-runs CLI command.

    if(process.env.CI) { 
      // Save ARN in an output file
      console.log(`-- Saving CI output file to download the reports soon...`);
      let ci_output_path = './ci_output';
      let ci_output_data = JSON.stringify({
        runArn: runArn,
        downloadArtifactsPath: path.resolve(config.downloadArtifactsPath)
      });

      if (!fs.existsSync(ci_output_path)){
          fs.mkdirSync(ci_output_path);
      }

      fs.writeFile(`${ci_output_path}/${config.ciFileName}`, ci_output_data, function (err) {
        if (err) console.log(err);
      });
    } else {
      console.log(`-- Now it'll wait for the run be completed on aws device farm...it can take some minutes...`);
      let isCompleted = false;
      var params = {
        arn: runArn,
      };
      while (!isCompleted) {
        devicefarm.getRun(params, function (err, data) {
          if (err) {
            console.log(err, err.stack); // an error occurred
          } else {
            console.log(`-- getRun result: ${util.inspect(data)}`);           // successful response
            isCompleted = data.run.status === 'COMPLETED';
          }
        });
        if (isCompleted) {
          console.log('-- test execution is COMPLETED');
          break;
        }
        await sleep(60000);
      }
      await downloadRunArtifacts(runScheduleResult.run, config);
    }
    return runScheduleResult.run;
  } catch (err) {
    console.log(err);
  }
};


const generatePackages = async (config) => {
  const createBundleResult = await createBundle(config);
  console.log(`-- createBundle result: ${util.inspect(createBundleResult)}`);

  const tgzPath = path.normalize(`${config.appiumTestFolderPath}/${packageJson.name}-${packageJson.version}.tgz`);
  console.log(`-- tgzPath: ${util.inspect(tgzPath)}`);
  const packageTestsResult = await packageTests(config, tgzPath);
  console.log(`-- packageTests result: ${util.inspect(packageTestsResult)}`);
  return tgzPath;
}

(async function () {
  const commonConfig = { appiumTestFolderPath: process.cwd(), appiumTestZipName: jsonConfigAndroid.appiumTestZipName }; // set appium test folder path to the project root path
  const tgzPath = await generatePackages(commonConfig);
  runOnDeviceFarm(jsonConfigAndroid, tgzPath);
  runOnDeviceFarm(jsonConfigIos, tgzPath);
}());


module.exports = {
  "downloadRunArtifacts": downloadRunArtifacts
};