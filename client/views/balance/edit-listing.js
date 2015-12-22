Template.EditList.events({
    'click .reactive-table tbody tr': function (event) {
    event.preventDefault();
    var post = this;
    Router.go("/edit-company/"+this._id);
  }
})

Template.EditList.helpers({
  Party: function(){
    return Party.find();
  },
  settings: function () {
          return {
              collection: Party,
              rowsPerPage: 10,
              showFilter: true
          };
      }
});
