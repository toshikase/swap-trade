if (Meteor.isServer) {
  Meteor.startup(function () {
    Contracts = new Mongo.Collection('contracts');

    Meteor.methods({
      'insert_contracts': function(address, price, amount, exeday, premium, position){
         Contracts.insert({
           seller: address,
           price: price,
           amount: amount,
           exeday: exeday,
           premium: premium,
           position: position
         });
      }
    });
  });
};
