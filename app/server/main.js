if (Meteor.isServer) {
  Meteor.startup(function () {

    Meteor.methods({
      'insert_transactions': function(address, price, amount, exeday, premium, position, contract_address, abi, buy_date, done){
         Transactions.insert({
           seller: address,
           price: price,
           amount: amount,
           exeday: exeday,
           premium: premium,
           position: position,
           contract_address: contract_address,
           abi: abi,
           buy_date: buy_date,
           done: done
         });
      }
    });

  Meteor.publish('contracts', function contractsPublication() {
    return Contracts.find();
  });

Meteor.methods({
     'find_contracts': function(){
       console.log("called find_contracts method");
       return Contracts.find({});
   }
 });
});
};
