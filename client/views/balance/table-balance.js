Template.BalanceList.helpers({
  getNameFromParty: function(id){
    return Party.findOne({_id:id}).name;
  },
  getVATFromParty: function(id){
    return Party.findOne({_id:id}).vat;
  },
  getLBTFromParty: function(id){
    return Party.findOne({_id:id}).lbt;
  },
  balance: function(){
    if(Session.get("dateFilter")){
      var start = $("#startDate").val(), end = $("#endDate").val();
        var gt = new Date(start);
        var lte = new Date(end);
        return Balance.find({"date": { $gt: gt, $lte: lte }});
    }
    return Balance.find();
    
  },
  filterOn: function(){
      if(Session.get("dateFilter")){
      return true;
    } return false;
  },
  taxOn: function(){
    if(Session.get("taxFilter")){
      return true;
    } return false;
  },
  numberWithCommas: function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  formatDate: function(date){
    return moment(date).format('DD-MM-YYYY');
  },
  yearseed: function(){
    var a = [];
    for(var i=2015; i<2050; i++){
      a.push(i)
    }
    return a;
  },
  balanceFound: function(){
    if(Session.get("dateFilterMonth") && Session.get("dateFilterYear")){
      var month = Session.get("dateFilterMonth"),
          year = Session.get("dateFilterYear");
      var gt = new Date(month+"/01/"+year);
      var lte = new Date(month+"/31/"+year);
      return Balance.find({"date": { $gt: gt, $lte: lte }}).count();
    } else{
      return Balance.find().count();
    }
  }
});

Template.BalanceList.events({
  'submit #dateFilter': function(e){
    e.preventDefault();
    Session.set("dateFilter", true);
  },
  'click #unsetDate': function(e){
    Session.set("dateFilter", undefined);
  },
  'click #tax': function(){
    if($("#tax:checked").val()==="on"){
      Session.set("taxFilter", true);
    } else {
      Session.set("taxFilter", undefined);
    }
  }
})

