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
    // check if session is set
    // if(Session.get("dateFilter")){
      // var curr = "00"+Session.get("dateFilter");
      // return Balance.find({date+""})
// 
    // } else{
      return Balance.find();
    // }
  },
  numberWithCommas: function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  formatDate: function(date){
    return moment(date).format('DD-MM-YYYY');
  },
  yearseed: function(){
    var a = [];
    for(var i=2014; i<2050; i++){
      a.push(i)
    }
    return a;
  }
});

Template.BalanceList.events({
  'submit #dateFilter': function(e){
    e.preventDefault();
    var month = $('select[name="month"]').val();
    var year = $('select[name="year"]').val();
    Session.set("dateFilter", month+"/"+year);
  }
})

