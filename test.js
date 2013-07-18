var report = require("./mongoDB.js");

reportObj = {'data':'1',
             'data2':'2'}

var call = function (data){
  console.log(JSON.stringify(data));
}

//report.pushReport(reportObj, 1);

report.getToolMapping("test", call);






/*
function npmls(cb) {
  require('child_process').exec('npm ls --json', function(err, stdout, stderr) {
    if (err) return cb(err)
    cb(null, JSON.parse(stdout));
  });
}
npmls(console.log);    */