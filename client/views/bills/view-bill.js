Template.viewBill.helpers({
  formattedDate: function(){
     return moment(this.time).format("DD/MM/YYYY HH:MM:SS");  // or whatever format you prefer
   }
})

Template.viewBill.rendered = function () {
  Mousetrap.bind(['return'], function(e) {
    window.print();
  });

}