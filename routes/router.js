Router.configure({
  // the default layout
  layoutTemplate: 'Simple'
});
 

// Router.route("/",{
//   name: 'home',
//   template:"Home",
//   title:"Welcome Home !",
//   cache: true 
// });

Router.route("/",{
  waitOn: function() {
    return Meteor.subscribe('Items');
  },
  name: 'items',
  template:"Items",
  title:"Items",
  cache: true
});

Router.route("/item/:id",{
  waitOn: function() {
    return Meteor.subscribe('OneItem', this.params.id);
  },
  name: 'editItem',
  template: 'EditItem',
  title: "Edit Item",
  cache: true
})

Router.route("/bills",{
  waitOn: function() {
    return Meteor.subscribe('Items');
  },
  name: 'bills',
  template:"Bills",
  title:"Bills",
  cache: true
});