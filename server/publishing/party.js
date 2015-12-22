Meteor.publish("OneParty", function(id){
   return Party.find({_id:id}) 
});