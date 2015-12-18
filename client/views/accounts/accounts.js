Template.Account.helpers({
	accountFound: function(){
		if(Meteor.users.find().count()>=1){
			return true;
		} else{
			return false;
		}
	}
})
Template.Account.events({
	'click #logout': function(e){
		Meteor.logout(function(err){
			if(err){
				alert(err);
			} else{
				Router.go("items");
			}
		})
	}
})