Template.components_index.helpers({
//  accounts: function(){
//    return EthAccounts.find({});
//  }
  contracts: function(){
    { _id: 100 }; // 動作テスト用
//    return Contracts.find({}); //Contracts collectionから全て取得
  }
});

// 購入ボタンを押した時のイベント
Template.components_index.events({
    'submit .btn-success': function(event) {
    event.preventDefault();
    // get the id(account, abi) of pushed
    // send transaction to contract by using web3
    }
});
