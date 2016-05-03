var world = function () {
 console.log('World!');
}

var myBirthDay = function () {
 console.log('My Birth Day!');
}

var cron = new Meteor.Cron( {
 events:{
   "* * * * *"  : world,
   "0 0 4 6 *" : myBirthDay
 }
});
