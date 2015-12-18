Template.register.events = {
  'submit #register': function(e){
    e.preventDefault();
    // Create new user
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var password_c = $("#password_confirmation").val();
    if(password!=password_c){
      alert("Passwords do not match.")
      throw new Meteor.Error("Please check your password");
    }
    if(email && email && password){
      Accounts.createUser({
          username: username,
          email : email,
          password : password,
        });
      Router.go('settings');
    }
  }
}