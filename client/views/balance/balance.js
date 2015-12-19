Template.balance.helpers({
  "Balance": function(){
    return Balance.find();
  }
});

Template.balance.onRendered(function(){
  AutoCompletion.init("input#searchBox");
})

Template.balance.events({
  'keyup input#searchBox': function () {
    AutoCompletion.autocomplete({
      element: 'input#searchBox',       // DOM identifier for the element
      collection: Balance,              // MeteorJS collection object
      field: 'name',                    // Document field name to search for
      limit: 0                         // Max number of elements to show
    });      
  },
  'focusout #searchBox': function(e){
    var val = $("#searchBox").val();
    var company = Balance.findOne({ 'name' : val });
    if(company){
      $("#vat").val(company.vat);
      $('#lbt').val(company.lbt);
    }
    if(company.vat){
      $("#vat").attr("disabled", true);
    }
    if(company.lbt){
      $("#lbt").attr("disabled", true);
    }
  },
})