const strikeLN = require('../index.js');
// Public API
const api_key =api_key;
const client = new strikeLN(api_key);
let page=0,
 	size=1;
client.listhistory(page,size,function (error, data) {
	if(error) console.log("E!",error)
	console.dir(data);

});

let amount=4294967, 
 	currency="btc",
 	description="2%20Whole%20Blockaccino";

client.charge(amount,currency,description,function(error,data){
	if(error) console.log("E!",error)
	// console.dir(data);
	let id=data.id;

	client.chargeid(id,function (error, data) {
		if(error) console.log("E!",error)
		console.dir(data);

	});
	
})

size=10;
client.stream(size,function (error, data) {
	if(error) console.log("E!",error)
	console.dir(data);

});