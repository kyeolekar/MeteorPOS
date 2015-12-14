Template.Bills.helpers({
    items: function(){
      return Items.find();
    }
});

Template.Bills.rendered = function () {
  AutoCompletion.init("input#searchBox");
  function findItem(val){
    return (Items.findOne({ $or: [
            { 'item' : val },
            { 'description': val }
          ]}));
  }
  function addToCart(obj){
    
  }
}

Template.Bills.events = {
  'keyup input#searchBox': function () {
    AutoCompletion.autocomplete({
      element: 'input#searchBox',       // DOM identifier for the element
      collection: Items,              // MeteorJS collection object
      field: 'description',                    // Document field name to search for
      limit: 0,                         // Max number of elements to show
      sort: { price: 1 }});              // Sort object to filter results with
      //filter: { 'gender': 'female' }}); // Additional filtering
  },
  'submit #quickAdd': function(e){
    e.preventDefault();
    var val = $("#searchBox").val();
    // addToCart(val);

  }
}