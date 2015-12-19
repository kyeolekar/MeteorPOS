 Meteor.publish("balance", function () {
    return Balance.find();
  });

 Meteor.publish("party", function () {
    return Party.find();
  });

