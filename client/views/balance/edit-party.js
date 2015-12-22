Template.EditCompany.helpers({
    
});

Template.EditCompany.events({
    "submit #editForm": function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var vat = $("#vat").val();
        var lbt = $("#lbt").val();
        var data = {};
        data.name = name;
        data.vat = vat || 'Nil';
        data.lbt = lbt || 'Nil';
        
        var controller = Router.current();
        // return the _id parameter or whatever
                
        Meteor.call("editCompany", controller.params.id, data, function(err){
            if(err){
                alert(err);
            } else {
                Router.go("EditList")
            }
        });
    }
})