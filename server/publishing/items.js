 Meteor.publish("Items", function () {
    return Items.find();
  });

  Meteor.publish("OneItem", function (id) {
    return Items.find(id);
  });