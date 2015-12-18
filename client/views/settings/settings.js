Template.Settings.helpers({
  Company : function(){
    return Company.find();
  },
  info: function(){
    return Company.find().count();
  }
});
