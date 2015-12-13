Template.ItemList.helpers({
  Items: function(){
    return Items.find();
  },
  selectedItem: function () {
    return Items.findOne(Session.get("selectedItem"));
  },
  formType: function () {
    if (Session.get("selectedItem")) {
      return "update";
    } else {
      return "insert";
    }
  },
});


Template.ItemList.onRendered(function () {

  Mousetrap.bind(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], function(e) {
      $("input[placeholder='Filter']").focus();
  });

});


Template.ItemList.events({
'click .reactive-table tbody tr': function (event) {
    event.preventDefault();
    var post = this;
    Router.go("/item/"+this._id);
  }
})