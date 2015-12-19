Template.AddCompany.events({
  'submit #addForm': function(e){
    e.preventDefault();
    // name
    var name = $("#name").val();
    // vat
    var vat = $("#vat").val();
    //lbt
    var lbt = $("#lbt").val();
    var data = {};
    data.name = name;
    data.vat = vat || 'Nil';
    data.lbt = lbt || 'Nil';
    if(name){
      Meteor.call('addCompanyForBalance', data, function(err){
        if(err){
          alert(err);
        } else {
          $("#addForm")[0].reset();
        }
      })
    }

  }
})