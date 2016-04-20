if (Meteor.isServer) {
  Meteor.startup(function () {

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
// 
// 下記メソッドを書いて、クライアント側から呼び出しても上手くいかない
// コンソールから見ると、サーバー側では取得できている??
//    Meteor.methods({
//      'find_contracts': function(){
//        console.log("called find_contracts method");
//        return Contracts.find({});
//    }
//  });
});
};
