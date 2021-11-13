//
//  About: This script will download the device farm report result
//  How execute it: node deviceFarmGetReport.js report-arn-goes-here folder-to-save-reports
//
const AWS = require('aws-sdk');

const devicefarm = new AWS.DeviceFarm({ region: 'us-west-2' });
const deviceFarmScript = require('./deviceFarm.js');
const util = require('util');

let testArn = process.argv[2];  // Arn of test passed as command line argument.
let reportsPath = process.argv[3];  // Path to store reports passed as command line argument.

var params = {
    arn: testArn, // You can get the Amazon Resource Name (ARN) of the run by using the list-runs CLI command.
};


devicefarm.getRun(params, async function (err, data) {
    if (err) {
        console.log(err, err.stack); // an error occurred
    } else if(data.run.status === 'COMPLETED') {
        console.log(`-- getRun result: ${util.inspect(data)}`);           // successful response
        await deviceFarmScript.downloadRunArtifacts(params, {downloadArtifactsPath: reportsPath});
    } else {
        console.log('-- Device Farm run not completed yet. ')
    }
});
