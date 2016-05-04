// Contracts.find()によって、contracts collectionから全部
// 取得したいが、動作しない
Template.contract.helpers({
  contracts: function(){

   return contracts;
//   return Contracts.find(); 
  }

// 下記のように、サーバーサイドで定義した `find_contracts` メソッドを呼び出してもうまくいかない
// contracts: function(){
//   Meteor.call('find_contracts');
// }
});

//  下記のように、contractsを定数で設定すれば、helperに適切に数字が渡る
// below happend when btn is pushed
Template.contract.events({
  'click .btn-success': function(event) {
    event.preventDefault();

    // get abi & contract_address
    // var abi = MultiplyContract.abi;
    // var contract_address = $(event.target).attr('id');
    // send transaction to contract
    // accountはunlockしていないとエラーになる
    // var cnt = web3.eth.contract(abi).at(contract_address);
    // var result = cnt.Respond.sendTransaction(web3.eth.accounts[0], 100000, {from: web3.eth.accounts[0], gas:500000});
    // alert( "購入が完了しました!!\nトランザクションアドレスは" + result );

    // 以下、transaction collection機能の実装
    var buy_date = new Date(); // 購入日データ
    var done = "false";
    var hogehge // Mongoから購入した商品のデータを取得してくる
    Meteor.call('insert_transactions', address, price, amount, exeday, premium, position, contract_address, abi, buy_date, done); // Mongoに格納

  }
});
