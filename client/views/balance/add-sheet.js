Template.AddSheet.helpers({
  company: function(){
    return Party.find();
  },
  hola: function(){
    return true;
  }
});

Template.AddSheet.events({
  'submit #addSheet': function(e){
    e.preventDefault();
    var data = {};
    // name
    data.name = $('select[name="name"]').val();
    // date
    data.date = moment($('#date').val()).format('DD-MM-YYYY');
    // amount
    data.amount = $('#amount').val();
    Meteor.call('addToBalanceSheet', data, function(err){
      if(err){
        alert(err);
      } else {
        $("#addSheet")[0].reset();
      }
    })
  }
})