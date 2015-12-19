Template.ItemList.helpers({
  Items: function(){
    return Items.find();
  },
  settings: function () {
          return {
              collection: Items,
              rowsPerPage: 10,
              showFilter: true,
              fields: [
                { key: 'item', label: 'Item' },
                { key: 'description', label: 'Description' },
                { key: 'price', label: 'Price' },
                { key: 'stock', label: 'Stock' }
              ]
          };
      }
});


Template.ItemList.events({
'click .reactive-table tbody tr': function (event) {
    event.preventDefault();
    var post = this;
    Router.go("/item/"+this._id);
  }
})