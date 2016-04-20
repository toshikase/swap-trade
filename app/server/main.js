if (Meteor.isServer) {
  Meteor.startup(function () {
    Contracts = new Mongo.Collection('contracts');

    Meteor.methods({
      'insert_contracts': function(address, price, amount, exeday, premium, position, contract_address, abi){
         Contracts.insert({
           seller: address,
           price: price,
           amount: amount,
           exeday: exeday,
           premium: premium,
           position: position,
           contract_address: contract_address,
           abi: abi
         });
      }
    });
  });
};
