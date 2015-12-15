Template.ItemList.helpers({
  Items: function(){
    return Items.find();
  }
});


Template.ItemList.onRendered(function () {

});


Template.ItemList.events({
'click .reactive-table tbody tr': function (event) {
    event.preventDefault();
    var post = this;
    Router.go("/item/"+this._id);
  }
})