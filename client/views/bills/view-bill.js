Template.viewBill.helpers({
  formattedDate: function(){
     return moment(this.time).format("DD/MM/YYYY HH:MM:SS");  // or whatever format you prefer
   },
   company: function(){
     return Company.findOne();
   }
})

  // Mousetrap.bind(['return'], function(e) {
  //   window.print();
  // });


Template.viewBill.onRendered(function () {
  // Use the Packery jQuery plugin
  Mousetrap.bind(['return'], function(e) {
    window.print();
  });
});