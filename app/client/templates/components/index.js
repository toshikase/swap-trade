Template.components_index.helpers({
//  accounts: function(){
//    return EthAccounts.find({});
//  }
	'coinbase': function(){
		return web3.eth.coinbase;
	},

  contracts: function(){
    { _id: 100 }; // 動作テスト用
//    return Contracts.find({}); //Contracts collectionから全て取得
  }
});

// 購入ボタンを押した時のイベント
Template.components_index.events({
    'click .btn-success': function(event) {
    event.preventDefault();
    var abi = MultiplyContract.abi;
    var contract_address = "0xcf69fcc3c34933191c54de8901d3c440db6d74fc";
    var cnt = web3.eth.contract(abi).at(contract_address);
    var result = cnt.Respond.sendTransaction(web3.eth.accounts[0], 100000, {from: web3.eth.accounts[0], gas:500000});
    alert( "購入が完了しました!!\nトランザクションアドレスは" + result ); 
    // get the id(account, abi) of pushed
    // send transaction to contract by using web3
    }
});
