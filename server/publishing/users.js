Meteor.publish("userData", function () {
    return Meteor.users.find();
});

Meteor.publish("company", function(){
    return Company.find();
})