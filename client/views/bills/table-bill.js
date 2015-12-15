Template.tableBill.helpers({
  Bills: function(){
    return Bills.find();
  },
  settings: function () {
          return {
              collection: Bills,
              rowsPerPage: 10,
              showFilter: true,
              fields: [
                { key: 'billno', label: 'Bill Number' },
                { key: 'grand', label: 'Total' },
                { key: 'time', label: 'Date & Time' }
              ]
          };
      }
})

Template.tableBill.onRendered(function(){
  Mousetrap.unbind('return');
})
arrCart = [];
Template.tableBill.events({
'click .reactive-table tbody tr': function (event) {
    event.preventDefault();
    var post = this;
    if(this.payed === 'No' || this.payed === false){
      Router.go("/edit-bill/"+this._id);
    } else{
      Router.go("/bills/"+this._id);
    }
  }
})