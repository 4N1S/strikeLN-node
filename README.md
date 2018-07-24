# Strike SDK Nodejs Lightning Network Bitcoin for Testnet

## Synopsis

This projects helps you to make HTTP requests to the Strike API by ACINQ.


## Installation

```sh
npm install strikeLN-node
```

```javasctipt
const strikeLN = require('strikeLN-node');
```

```javasctipt
const api_key ="your_api_key";
const client = new strikeLN(api_key);

```

## Strike

Strike is an easy to use, stripe®-like API for Lightning.

Let us handle your Lightning payments, and receive aggregated bitcoin transactions every week, day, or hour!

A user-friendly dashboard allows you to monitor your payments in real time.



## API Index
The API is available  https://strike.acinq.co/#/documentation/api-reference


## Methods

* [chargeid](#chargeid)
* [listhistory](#listhistory)
* [charge](#charge)
* [stream](#stream)



### chargeid

**Response**

```javasctipt
[ 
  { id: 'ch_7bVXiei4wFoYjTtQhyNeuvMf6EwS1Bd8nuxBwY8cBbgx',
      object: 'charge',
      amount: 4294967,
      currency: 'btc',
      amount_satoshi: 4294967,
      payment_hash: '61fc20ab4a5ad827eed5ab7d672886013f7f3e096051bda124fd5124ba578eb5',
      payment_request: 'lntb42949670n1pdvq2pjpp5v87zp262ttvz0mk44d7kw2yxqylh70sfvpgmmgfyl4gjfwjh366sdp9xgjnyvzhdphkcef9xgcyymr0vd4kzcmrd9hx7cqp2xqnfh0rvxwz7dhuaulmx0x8sfeuagqha9fw2h9avhv0um94etgjr34hm7uxcc2zxufca0dmdx22p8mfhnc5yanaq80ulh60p5zmhy2cq2nzjdm',
      description: '2%20Whole%20Blockaccino',
      paid: false,
      created: 1522542642,
      updated: 1522542642 
  } 
]
```

**Examples**
Request:
    /chargeid

    param: 
    id:Information about idpayement


```javasctipt
  client.chargeid(id,function (error, data) {
    if(error) console.log("E!",error)
    console.dir(data);

  });

```


### listhistory

**Response**

```javasctipt
{ 
  id: 'ch_GZij1NsorXxqNVS5UxDkAzfK8rMg48yKLwjHPUm5nriM',
  object: 'charge',
  amount: 4294967,
  currency: 'btc',
  amount_satoshi: 4294967,
  payment_hash: 'e741114aab8a8d82cc0e628bb686dc7ac14a575ff9a638312d834e0e6e4025ca',
  payment_request: 'lntb42949670n1pdvq2zupp5uaq3zj4t32xc9nqwv29mdpku0tq5546llxnrsvfdsd8qumjqyh9qdp9xgjnyvzhdphkcef9xgcyymr0vd4kzcmrd9hx7cqp2hrq2qk3qh580kdxwqzt2cnzq9c92frh4ygs8j0wk8wh2dgnylxv8lt9c9gthljf6lgvqm8d09jlxdcf5k8s7eqqh8ptsuwxeae64u8cp47y9m9',
  description: '2%20Whole%20Blockaccino',
  paid: false,
  created: 1522542684,
  updated: 1522542684 
}
```

**Examples**
Request:
    /listhistory 

    param: 
    page : number of page
    size: number Information about payement account

```javasctipt
let page=0,
    size=1;

client.listhistory(page,size,function (error, data) {
  if(error) console.log("E!",error)
  console.dir(data);

});

```

### charge

**Response**

```javasctipt
{ 
  id: 'ch_GZij1NsorXxqNVS5UxDkAzfK8rMg48yKLwjHPUm5nriM',
  object: 'charge',
  amount: 4294967,
  currency: 'btc',
  amount_satoshi: 4294967,
  payment_hash: 'e741114aab8a8d82cc0e628bb686dc7ac14a575ff9a638312d834e0e6e4025ca',
  payment_request: 'lntb42949670n1pdvq2zupp5uaq3zj4t32xc9nqwv29mdpku0tq5546llxnrsvfdsd8qumjqyh9qdp9xgjnyvzhdphkcef9xgcyymr0vd4kzcmrd9hx7cqp2hrq2qk3qh580kdxwqzt2cnzq9c92frh4ygs8j0wk8wh2dgnylxv8lt9c9gthljf6lgvqm8d09jlxdcf5k8s7eqqh8ptsuwxeae64u8cp47y9m9',
  description: '2%20Whole%20Blockaccino',
  paid: false,
  created: 1522542684,
  updated: 1522542684 
}
```

**Examples**
Request:
    /charge 

    param: 
    amount: quantite (number 1 - 4294967)
    currency: BTC available only,
    description: description payement

```javasctipt
 let  amount=4294967, 
      currency="btc",
      description="2%20Whole%20Blockaccino";

client.charge(amount,currency,description,function(error,data){
  if(error) console.log("E!",error)
  console.dir(data);

});

```

### Stream

**Response**

```javasctipt
[ 
  { id: 'ch_7bVXiei4wFoYjTtQhyNeuvMf6EwS1Bd8nuxBwY8cBbgx',
      object: 'charge',
      amount: 4294967,
      currency: 'btc',
      amount_satoshi: 4294967,
      payment_hash: '61fc20ab4a5ad827eed5ab7d672886013f7f3e096051bda124fd5124ba578eb5',
      payment_request: 'lntb42949670n1pdvq2pjpp5v87zp262ttvz0mk44d7kw2yxqylh70sfvpgmmgfyl4gjfwjh366sdp9xgjnyvzhdphkcef9xgcyymr0vd4kzcmrd9hx7cqp2xqnfh0rvxwz7dhuaulmx0x8sfeuagqha9fw2h9avhv0um94etgjr34hm7uxcc2zxufca0dmdx22p8mfhnc5yanaq80ulh60p5zmhy2cq2nzjdm',
      description: '2%20Whole%20Blockaccino',
      paid: false,
      created: 1522542642,
      updated: 1522542642 
  } 
]
```

**Examples**
Request:
    /stream (30000ms for one page)

    param: 
    size : number of payments of your wallet

```javasctipt
let size=10;

client.stream(amount,currency,description,function(error,data){
  if(error) console.log("E!",error)
  console.dir(data);

});

```

## API Reference

https://strike.acinq.co/#/documentation/api-reference

## Contributors

Anis Haboubi

## License

See [LICENSE.txt](LICENSE.txt) for more info.
