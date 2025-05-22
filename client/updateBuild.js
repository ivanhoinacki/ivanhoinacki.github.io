var fs = require('fs');

var packageFile = fs.readFileSync('./package.json', 'utf8');
packageFile = JSON.parse(packageFile)
packageFile.buildversion = parseInt(packageFile.buildversion, 10) + 1;
packageFile = JSON.stringify(packageFile, null, 2);
fs.writeFileSync('./package.json', packageFile);

