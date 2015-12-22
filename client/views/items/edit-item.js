Template.EditItem.helpers({
  Items: function(){
      var controller = Router.current();
    return Items.findOne({_id: controller.params.id});
  },
  selectedItem: function () {
      var controller = Router.current();
    return Items.findOne({_id: controller.params.id});
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