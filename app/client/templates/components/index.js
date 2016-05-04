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
    var result = cnt.Respond.sendTransaction(web3.eth.accounts[0], 100000, {from: web3.eth.accounts[0], gas:500000});
    alert( "購入が完了しました!!\nトランザクションアドレスは" + result );

    // 以下、transaction collection機能の実装
    var id = "hoge"
    var seller = "hoge"
    var price = "hoge"
    var amount = "hoge"
    var address = "hoge"
    var address = "hoge"
    var address = "hoge"
    var buy_date = new Date(); // 購入日データ
    var done = "false";  //実行されたらtrueになる
    Meteor.call('insert_transactions', seller, price, amount, exeday, premium, position, contract_address, abi, buy_date, done); // Mongoに格納

  }
});
