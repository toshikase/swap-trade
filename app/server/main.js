if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({
      'insert_contracts': function(fixedSide, floatedSide, price, issuedDate, expiredDate, fixedRate, spread, contract_address, abi){
        Contracts.insert({
          fixedSide: fixedSide,
          floatedSide: floatedSide,
          price: price,
          issuedDate: issuedDate,
          expiredDate: expiredDate,
          fixedRate: fixedRate,
          spread: spread,
          contract_address: contract_address,
          abi: abi,
        });
      }
    });
    // var helloWorld = function () {
    //   console.log('hello world');
    // }
    // new Meteor.Cron({
    //   events: {
    //      "* * * * *": helloWorld
    //   }
    // });

    // Meteor.methods({
    //   'update_contracts': function(_id, seller, price, amount, exeday, premium, position, contract_address, abi, buy_date, done, transaction_address){
    //     Contracts.update({contract_address: contract_address}, {
    //       _id: _id,
    //       seller: seller,
    //       price: price,
    //       amount: amount,
    //       exeday: exeday,
    //       premium: premium,
    //       position: position,
    //       contract_address: contract_address,
    //       abi: abi,
    //       buy_date: buy_date,
    //       done: done,
    //       transaction_address: transaction_address,
    //     });
    //     }
    // });

    Meteor.publish('contracts', function() {  //client側にpublishする
      return Contracts.find({});  //全ての配列
    });

  });
};
