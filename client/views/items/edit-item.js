Template.EditItem.helpers({
  Items: function(){
    return Items.findOne();
  },
  selectedItem: function () {
    return Items.findOne();
  }
});

Template.EditItem.events({
  "submit #editItemsForm": function(e){
    Router.go('items');
  },
  "click #delete": function(e){
    var id = Items.findOne()._id;
    Meteor.call('deleteItem', id);
    Router.go('items');
  }
})