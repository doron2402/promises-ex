var Promise = require('bluebird');
var Request = require('superagent');


var url = 'httpsa://gist.github.com/visionmedia/9fff5b23c1bf1791c349/raw/3e588e0c4f762f15538cdaf9882df06b3f5b3db6/works.js';


var getTextFromSuperAgentRequest = function(obj){
  return obj.res.text;
};

var p = new Promise(function (resolve, reject) {
  return Request.get(url,resolve);
});

p.then(function(a){
  //console.log('a');
  //console.log(getTextFromSuperAgentRequest(a));

  console.log(getTextFromSuperAgentRequest(a));
}).catch(function(e){
  console.log('eee');
  console.log(e);
  
});

