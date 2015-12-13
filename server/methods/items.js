Meteor.methods({
  deleteItem: function(id){
    Items.remove(id);
  }
});