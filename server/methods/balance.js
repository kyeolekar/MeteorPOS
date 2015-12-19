Meteor.methods({
  addCompanyForBalance: function(data){
    if(data.name){
      if(!Party.findOne({name: data.name})){
        Party.insert({
          name: data.name,
          vat: data.vat,
          lbt: data.lbt
        });
      }
    }
  },
  addToBalanceSheet: function(data){
    if(data.name && data.date && data.amount){
      var id = Party.findOne({name: data.name})._id;
      var inserted = Balance.insert({
        name: data.name,
        id: id,
        date: data.date,
        amount: data.amount
      });
      return inserted;
    }
    return "Please fill all the fields";
  }
});