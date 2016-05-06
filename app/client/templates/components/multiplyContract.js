//Contracts = new Mongo.Collection('contracts');
/**
Template Controllers

@module Templates
*/

/**
The multiply contract template.

Note, the MultiplyContract object is now housed in client/lib/contracts/MultiplyContract.sol

@class [template] components_multiplyContract
@constructor
*/

// solidity source code
// var source = "" +
// "contract test {\n" +
// "   function multiply(uint a) returns(uint d) {\n" +
// "       return a * 7;\n" +
// "   }\n" +
// "}\n";

var source = "";

// Construct Multiply Contract Object and contract instance
var contractInstance;

// When the template is rendered
Template['components_multiplyContract'].onRendered(function(){
  TemplateVar.set('state', {isInactive: true});
});

Template['components_multiplyContract'].helpers({

  /**
  Get multiply contract source code.

  @method (source)
  */

  'source': function(){
    return source;
  },
});

Template['components_multiplyContract'].events({

	/**
	On "Create New Contract" click

	@event (click .btn-default)
	*/

  //	"click .btn-default": function(event, template){ // Create Contract
  "submit .conditions": function(event, template){ // Create Contract
    TemplateVar.set('state', {isMining: true});
    event.preventDefault();

    // Set coinbase as the default account
    web3.eth.defaultAccount = web3.eth.coinbase;

    // Get Abi definition
    var abi = MultiplyContract.abi

    // assemble the tx object w/ default gas value
    var transactionObject = {
      data: MultiplyContract.bytecode,
      gasPrice: web3.eth.gasPrice,
      gas: 5000000,
      from: web3.eth.accounts[0]
    };


    // var issuer = web3.eth.accounts[0];
    var fixedSide = web3.eth.accounts[0];
    var floatedSide = web3.eth.accounts[1];
    var client = event.target.client.value;
    var price = event.target.price.value;
    var issuedYear = event.target.issuedYear.value;
    var issuedMonth = event.target.issuedMonth.value;
    var issuedDay = event.target.issuedDay.value;
    var expiredYear = event.target.expiredYear.value;
    var expiredMonth = event.target.expiredMonth.value;
    var expiredDay = event.target.expiredDay.value;
    var fixedRate = event.target.fixedRate.value;
    var spread = event.target.spread.value;
    var position = event.target.position.value;
    var issuedDate = new Date(issuedDay + "/" + issuedMonth + "/" + issuedYear);
    var parseIssuedDate = Date.parse(issuedDate);
    var expiredDate = new Date(expiredDay + "/" + expiredMonth + "/" + expiredYear);
    var parseExpiredDate = Date.parse(expiredDate);

    // estimate gas cost then transact new MultiplyContract
    web3.eth.estimateGas(transactionObject, function(err, estimateGas){
      if(!err)
      transactionObject.gas = estimateGas * 10;

      MultiplyContract.new(fixedSide, floatedSide, price, parseExpiredDate, fixedRate, spread, transactionObject,
        function(err, contract){
          if(err)
          return TemplateVar.set(template, 'state', {isError: true, error: String(err)});

          if(contract.address) {
            TemplateVar.set(template, 'state', {isMined: true, address: contract.address, source: source});
            contractInstance = contract;
            var contract_address = contract.address;

            //Mongoにコントラクト情報を保存
            Meteor.call('insert_contracts',parseIssuedDate, fixedSide, floatedSide,  price, parseExpiredDate, fixedRate, spread, contract_address, abi);
          }
        });
      });
    },


    /**
    On Multiply Number Input keyup

    @event (keyup #multiplyValue)
    */

    "keyup #multiplyValue": function(event, template){
    // the input value
      var value = template.find("#multiplyValue").value;

      // call MultiplyContract method `multiply` which should multiply the `value` by 7
      contractInstance.multiply.call(value, function(err, result){
        TemplateVar.set(template, 'multiplyResult'
        , result.toNumber(10));

        if(err)
        TemplateVar.set(template, 'multplyResult'
        , String(err));
      });
    },
});
