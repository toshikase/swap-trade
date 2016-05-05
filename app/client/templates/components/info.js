Template.contract_detail.helpers({
   details: function(){
     Meteor.subscribe('contracts');  //serverのcontractsをsubscribeする
     return Contracts.findOne({_id: this.params._id});  //info.jsに動的なidで取得したオブジェクトを渡す
   }
});
