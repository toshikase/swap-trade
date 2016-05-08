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

var source = "";

// Construct Multiply Contract Object and contract instance
var contractInstance;

// When the template is rendered
Template['components_respond'].onRendered(function(){
  TemplateVar.set('state', {isInactive: true});
});

Template['components_respond'].helpers({

  /**
  Get multiply contract source code.

  @method (source)
  */

  'source': function(){
    return source;
  },
});

Template['components_respond'].events({

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

    // get abi & contract_address
    var abi = MultiplyContract.abi;
    var contract_address = $(event.target).attr('id');
    //  var contract_address = MultiplyContract.contract_address;
    // send transaction to contract
    // accountはunlockしていないとエラーになる
    var cnt = web3.eth.contract(abi).at(contract_address);
    var transaction_address = cnt.sendTransaction({from: web3.eth.accounts[0], to: contract_address, value: web3.toWei(event.target.deposit.value,"ether"), gas:500000});
  },
});
