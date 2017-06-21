console.log('The script is starting')

 //var Package = require('package') // import the package,library
 var Twit = require('twit');
 var config = require('./config');

//console.log(config);
//var T = new Package(config);
//console.log('Hello, ' + config.consumer_key);
//var T = new Package(config.consumer_key);
var T = new Twit(config);

var params = { 
	q: 'trump', 
	count: 100 
}
T.get('search/tweets', params,gotData); 
    //{ q: 'banana since:2017-07-11', count: 100 }, 
	// gotData);

function gotData(err, data, response) {
// 	fs.writeFile(twiter01.txt,console.log(data),function(err)){
// 		if (err) {
//              console.erro(err)

// 		} else {
// 			console.log('Success')
// 		}
// 	}
  console.log(data);
}