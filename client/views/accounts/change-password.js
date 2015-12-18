Template.changePassword.events({
	'submit #change': function(e){
		e.preventDefault();
		var current = $("#current").val();
		var password = $("#password").val();
		var password_c = $("#password_c").val();
		if(password !== password_c){
			alert("Passwords do not match");
			throw new Meteor.Error("Password Mismatch");
		}
		Accounts.changePassword(current, password, function(error){
			if(error){
				alert(error);
			} else {
				Router.go('settings')
			}
		})
		
	}
})