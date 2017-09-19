var fs = require('fs');
var path = require('path');

var specificWordCount = function(filePath, word, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var count= 0;
    var words = data.trim().split(' ');
    for(var i = 0 ; i < words.length ; i++){
      if( words[i] === word ){
        count++;
      }
    }
    callback(null, count);
  });
};

var getTotalSpecificWordCount = function(filePathOne, filePathTwo, word, callback) {
  // YOUR CODE HERE
  
  specificWordCount(filePath , word , callback)
  console.log(count)
  callback(null,count)
  
};

module.exports = getTotalSpecificWordCount;
