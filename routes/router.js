Router.configure({
  // the default layout
  layoutTemplate: 'Simple'
});
 
Router.route("/",{
  waitOn: function() {
    Meteor.subscribe("company");
    return Meteor.subscribe('Items');
  },
  name: 'items',
  template:"Items",
  title:"Items",
  cache: true
});

Router.route("/item/:id",{
  waitOn: function() {
    Meteor.subscribe("company");
    return Meteor.subscribe('OneItem', this.params.id);
  },
  name: 'editItem',
  template: 'EditItem',
  title: "Edit Item",
  cache: true
})

Router.route("/bills",{
  waitOn: function() {
    Meteor.subscribe("company");
    return Meteor.subscribe('Items');
  },
  name: 'bills',
  template:"Bills",
  title:"Bills",
  cache: true
});

Router.route("/bills-new",{
  waitOn: function() {
    Meteor.subscribe("company");
    return Meteor.subscribe('Items');
  },
  name: 'billsNew',
  template:"BillsNew",
  title:"Bills",
  cache: true
});

Router.route("/bills/:id",{
  waitOn: function() {
     Meteor.subscribe('Items');
    Meteor.subscribe("company");
    return Meteor.subscribe('Bills');
  },
  name: 'viewBill',
  template:"viewBill",
  title:"view bill",
  cache: true,
  data: function(){
    return Bills.findOne({_id: this.params.id});
  }
});

// Router.route("/edit-bill/:id",{
//   waitOn: function() {
//     Meteor.subscribe('Items');
//     return Meteor.subscribe('Bills');
//   },
//   name: 'editBill',
//   template:"editBill",
//   title:"Edit bill",
//   cache: true,
//   data: function(){
//     return Bills.findOne({_id: this.params.id});
//   },
//   onBeforeAction: function (pause) {
//     if (Bills.findOne({_id: this.params.id}).payed===true) {
//       this.redirect('/bills/'+this.params.id);
//     } else{
//       this.next();
//     }
//   }
// });

Router.route("/all-bills",{
  waitOn: function() {
     Meteor.subscribe('Items');
    Meteor.subscribe("company");
    return Meteor.subscribe('Bills');
  },
  name: 'tableBill',
  template:"tableBill",
  title:"All bills",
  cache: true
});

Router.route("/account",{
  waitOn: function(){
    Meteor.subscribe("company");
    return Meteor.subscribe("userData");
  },
  name: 'account',
  template:"Account",
  title:"Account",
  cache: true
});

Router.route("/settings",{
  waitOn: function(){
    Meteor.subscribe("userData");
    return Meteor.subscribe("company");
  },
  name: 'settings',
  template:"Settings",
  title:"Settings",
  cache: true,
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.render('Account');
    } else {
      this.next();
    }
  },
  data: function(){
    return Company.findOne();
  }
});



Router.route("/balance-sheet",{
  waitOn: function(){
    Meteor.subscribe("userData");
    Meteor.subscribe("company");
    Meteor.subscribe("party");
    return Meteor.subscribe("balance");
  },
  name: 'balance',
  template:"Balance",
  title:"Balance Sheet",
  cache: true,
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.render('Account');
    } else {
      this.next();
    }
  }
});

Router.route("/edit-company/:id",{
  waitOn: function(){
    Meteor.subscribe("userData");
    Meteor.subscribe("company");
    Meteor.subscribe("OneParty", this.params.id);
    return Meteor.subscribe("balance");
  },
  name: 'editCompany',
  template:"EditCompany",
  title:"Edit Company Form",
  cache: true,
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.render('Account');
    } else {
      this.next();
    }
  },
  data: function(){
      return Party.findOne({_id: this.params.id});
  }
});

//EditList

Router.route("/edit-company/",{
  waitOn: function(){
    Meteor.subscribe("userData");
    Meteor.subscribe("company");
    Meteor.subscribe("party");
    
    return Meteor.subscribe("balance");
  },
  name: 'EditList',
  template:"EditList",
  title:"Edit List Table",
  cache: true,
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.render('Account');
    } else {
      this.next();
    }
  }
});

Router.route("/show-sheet",{
  waitOn: function(){
    Meteor.subscribe("userData");
    Meteor.subscribe("party");
    Meteor.subscribe("company");
    return Meteor.subscribe("balance");
  },
  name: 'BalanceList',
  template:"BalanceList",
  title:"Complete Balance Sheet",
  cache: true,
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.render('Account');
    } else {
      this.next();
    }
  }
});