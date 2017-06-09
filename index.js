/*jslint es6 */
/*global console, require*/
const testFolder = './files-container/';
const fs = require('fs');
fs.readdir(testFolder, function (err, files) {
    'use scrict';
    files.map(function (file, index) {
        fs.rename(testFolder + file,
                testFolder + (index + 1) + "." + file.split(".")[file.split(".").length - 1],
                function (err) {
            if (err) {
                console.log('ERROR: ' + err);
            }
        });
    });
});