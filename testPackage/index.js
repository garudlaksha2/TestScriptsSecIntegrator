reportObj = {'data':'1',
             'data2':'2'}

var testfun = function (){
  console.log("in package testing");
}

var getToolInfo = function (callBack){
  console.log("in get info");
  callBack(reportObj);
}

var runTool = function(scanID, callBack){
  console.log("run tool");
  callBack("ok");
}

exports.testfun = testfun;
exports.getToolInfo = getToolInfo;
exports.runTool = runTool;