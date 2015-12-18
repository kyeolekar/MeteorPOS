Template.login.events({
    'submit #login': function(event){
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        
        Meteor.loginWithPassword(username, password, function(error){
            if(error){
                alert("Please check your username and password");
                console.log(error.reason);
            } else {
                Router.go("settings");
                }
            });
        }
});