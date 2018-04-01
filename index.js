
const _ = require('underscore'),
	  https = require('https'),
	  crypto = require('crypto'),
	  url = require('url'),
	  urlencode = require('urlencode'),
 	  querystring = require('querystring');


const strikeLN = function(api_key,verbose) {
	this.verbose = verbose || false;
	this.version = "0.0.1";
	this.host = "api-strike.acinq.co";
	this.uri = "/api/v1/";
	this.baseURL = "https://api-strike.acinq.co";
	this.userAgent = "strikeLN-node";
	this.headers= {
		    'Authorization': 'Basic ' + new Buffer(api_key).toString('base64'),
			'User-Agent': this.userAgent
		}
};


strikeLN.prototype.chargeid = function(id,callback) {
	this.pubRequest("charges/"+id, {}, function(err, data) {
		return callback(err, data);
	});
}	

strikeLN.prototype.listhistory = function(page,size,callback) {
	this.pubRequest("charges?page="+page+"&size="+size, {}, function(err, data) {
		return callback(err, data);
	});
}


strikeLN.prototype.charge = function(amount,currency,description,callback) {
	const data=querystring.stringify({
		amount:amount,
		currency:currency,
		description:description
	});
	this.pubRequestPOST("charges", data, function(err, data) {
		return callback(err, data);
	});
}

strikeLN.prototype.stream = function(size,callback) {
	const duration=30000;
	const page=1;
    const timestamp=Date.now();
    console.log("S! Stream Initialization");
	this.pubRequest("charges?page="+page+"&size="+size, {}, function(err, data) {
		return callback(err, data);
	});
	setInterval(()=>{
		this.pubRequest("charges?page="+page+"&size="+size, {}, function(err, data) {
			return callback(err, data);
		});
	
	}, duration);

}

strikeLN.prototype.pubRequest = function(method, params, callback) {
	var options = {
	  hostname: this.host,
	  path: this.uri + method,
	  port: 443,
	  method: 'GET',
	  verbose: this.verbose,
	  headers:this.headers
	};

	console.log(options.path);
	cb = function(res) {
		if (res.statusCode < 200 || res.statusCode > 299) {
		   callback(res.statusCode);
		 }
		if(res.statusCode==200){

		let str = '';
		res.on('data',(chunk) => {
			str += chunk;
			if (options.verbose) console.log(str);
		});


		res.on('end',() => {
			var objFromJSON;

				try {
					objFromJSON = JSON.parse(str);
					return callback(null, objFromJSON);
				}
				catch (err) {
					return callback(err, null);
				}
		});
		}
	}
	const req = https.request(options, cb);
	req.on('error', (err) =>{
		callback(err.status, null);
	});

	req.end();

};

strikeLN.prototype.pubRequestPOST = function(method, params, callback) {
	var options = {
	  hostname: this.host,
	  path: this.uri + method,
	  port: 443,
	  method: 'POST',
	  verbose: this.verbose,
	  headers:{
	  	'Authorization': this.headers.Authorization,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(params)
	  }
	};

	cb = function(response) {
		// console.log(response);
		if (response.statusCode < 200 || response.statusCode > 299) {
		   callback(response.statusCode);
		 }
		if(response.statusCode==200){

		let str = '';
		response.on('data', function (chunk) {
			str += chunk;
			if (options.verbose) console.log(str);
		});


		response.on('end', function () {
			var objFromJSON;

				try {
					objFromJSON = JSON.parse(str);
					return callback(null, objFromJSON);
				}
				catch (err) {
					return callback(err, null);
				}
		});
		}
	}
	const req = https.request(options, cb);
	req.write(params);

	req.on('error', function(err) {
		callback(err.status, null);
	});

	req.end();

};

module.exports = strikeLN;
