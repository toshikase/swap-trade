Template.contract.helpers({
 contracts: function(){
   Meteor.subscribe('contracts');  //serverのcontractsをsubscribeする
   return Contracts.find();  //main.jsにcontractsの配列を返す
 }
});

// below happend when btn is pushed
Template.contract.events({
 'click .btn-success': function(event) {
   event.preventDefault();

   // get abi & contract_address
   var abi = MultiplyContract.abi;
   var contract_address = $(event.target).attr('id');
   // send transaction to contract
   // accountはunlockしていないとエラーになる
   var cnt = web3.eth.contract(abi).at(contract_address);
  //  var transaction_address = cnt.Execution.sendTransaction(1, {from: web3.eth.accounts[0], gas:500000});
   var transaction_address = cnt.Edit.sendTransaction(8,88888,{from: web3.eth.accounts[0], gas:500000});
   alert( "購入が完了しました!!\nトランザクションアドレスは" + transaction_address );

   // 以下、contractsをupdateしてmongoに保存
  //  var _id = $(event.target).parent().prevAll().eq(6).text();
  //  var seller = $(event.target).parent().prevAll().eq(5).text();
  //  var price = $(event.target).parent().prevAll().eq(4).text();
  //  var amount = $(event.target).parent().prevAll().eq(3).text();
  //  var exeday = $(event.target).parent().prevAll().eq(2).text();
  //  var premium = $(event.target).parent().prevAll().eq(1).text();
  //  var position = $(event.target).parent().prevAll().eq(0).text();
  //  var buy_date = new Date(); // 購入日データ
  //  var done = "false";  //実行されたらtrueになる
  //  Meteor.call('update_contracts', _id, seller, price, amount, exeday, premium, position, contract_address, abi, buy_date, done, transaction_address);

   //実行ボタンの書き換え
   $(event.target).removeClass("btn-success").addClass("btn-default");
   $(event.target).text("済");
 }
});
//
// below happend when btn-warning is pushed
// Template.contract.events({
//  'click .btn-warning': function(event) {
//    event.preventDefault();
//
//    // get abi & contract_address
//    var abi = MultiplyContract.abi;
//    var contract_address = $(event.target).attr('id');
//    // send transaction to contract
//    // accountはunlockしていないとエラーになる
//    var current_date = new Date;
//    var current_time = Date.parse(current_date);
//    var cnt = web3.eth.contract(abi).at(contract_address);
//    var transaction_address = cnt.Exercise.sendTransaction(300, current_time, {from: web3.eth.accounts[0], gas:500000});
//    alert( "期日が到来して実行されました!!\nトランザクションアドレスは" + transaction_address );
//
//    // 以下、contractsをupdateしてmongoに保存
//    var _id = $(event.target).parent().prevAll().eq(9).text();
//    var seller = $(event.target).parent().prevAll().eq(8).text();
//    var price = $(event.target).parent().prevAll().eq(7).text();
//    var amount = $(event.target).parent().prevAll().eq(6).text();
//    var exeday = $(event.target).parent().prevAll().eq(5).text();
//    var premium = $(event.target).parent().prevAll().eq(4).text();
//    var position = $(event.target).parent().prevAll().eq(3).text();
//    var buy_date = $(event.target).parent().prevAll().eq(1).text();
//    var done = "true";  //実行されたらtrueになる
//    Meteor.call('update_contracts', _id, seller, price, amount, exeday, premium, position, contract_address, abi, buy_date, done, transaction_address);
//
//    //期日ボタンの書き換え
//    //$(event.target).removeClass("btn-warning").addClass("btn-default");
//  }
// });
