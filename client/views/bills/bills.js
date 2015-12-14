Template.Bills.helpers({
    items: function(){
      return Items.find();
    }
});

function findItem(val){
  return (Items.findOne({ $or: [
          { 'item' : val },
          { 'description': val }
        ]}));
}

Template.Bills.rendered = function () {
  AutoCompletion.init("input#searchBox");
  // function addToCart(obj){
    
  // }
}
var arrCart = [];
Template.Bills.events = {
  'keyup input#searchBox': function () {
    AutoCompletion.autocomplete({
      element: 'input#searchBox',       // DOM identifier for the element
      collection: Items,              // MeteorJS collection object
      field: 'description',                    // Document field name to search for
      limit: 0,                         // Max number of elements to show
      sort: { price: 1 }});              // Sort object to filter results with
      //filter: { 'gender': 'female' }}); // Additional filtering
  },
  'focusout #searchBox': function(e){
    var val = $("#searchBox").val();
    var item = Items.findOne({ $or: [
            { 'item' : val },
            { 'description': val }
          ]});
    if(item){
      $("#searchBox").val(item.item);
      $('#searchItem').val(item.description);
      $('#searchMrp').val(item.price);
      $('#searchTotal').val(item.price);
      
    }
  },
  'change #searchQty': function(e){
    if($("#searchBox").val()){
    var total = parseInt($('#searchMrp').val()) * $('#searchQty').val();
    $('#searchTotal').val(total);
  }
  },
  'change #searchDisc': function(e){

    if($("#searchBox").val()){
    var total = $('#searchTotal').val();
    var disc = $('#searchDisc').val();
    if(disc){var discAmount = total * (disc/100);}
    else {
      discAmount = 0;
    }
    var ftotal = total - discAmount;
    $("#searchTotal").val(ftotal);
    }
  },
  'submit #addToCart': function(e){
    e.preventDefault();
    var val = $("#searchBox").val();
    var orig = Items.findOne({ $or: [
            { 'item' : val },
            { 'description': val }
          ]});
    var item = {};
    item.code = $("#searchBox").val() || orig.item;      
    item.description = $("#searchItem").val() || orig.description;
    item.qty = $("#searchQty").val() || 1;
    item.mrp = $("#searchMrp").val() || orig.price;
    item.disc = $("#searchDisc").val() || 0;
    item.itemT = item.mrp * item.qty;
    if(item.disc===0){
      item.amount = orig.price * item.qty;
    } else {
      item.amount = $("#searchTotal").val() ;
    }
    
    arrCart.push(item);
    addToTable(item);
    $('#addToCart')[0].reset();
    $("#searchBox").focus();
    $("#searchQty").val(1);
    calcTotal();
  },
  'click .remove': function(e){
    var val = $(e.currentTarget).children('input:hidden').val();
    // var toDel = $(e.target).children('input:hidden').val();
    // alert(toDel);

    // someArray = [{name:"Kristian", lines:"2,5,10"},
    //              {name:"John", lines:"1,19,26,96"},
    //              {name:"Brian",lines:"3,9,62,36" }]
    arrCart = arrCart
                   .filter(function (el) {
                            return el.code !== val;
                           });
    $('#displayTable tr[data-code="'+val+'"]').remove();
    calcTotal();
  },
  'click .increment': function(e){
    // Find the object having the hidden code
    // increment it's quantity
  }
}

function addToTable(obj){
  $('#displayTable tr.sum').before(
    '<tr class="dyn" data-code="'+ obj.code +'" ><td>'+obj.code+'</td>'+
    '<td>'+obj.description+'</td>'+
    '<td class="increment">'+obj.qty+'<input type="hidden" value="'+ obj.code +'" /></td>'+
    '<td>'+obj.mrp+'</td>'+
    '<td>'+obj.disc+'</td>'+
    '<td>'+obj.amount+'</td>'+
    '<td class="remove" > <i class="fa fa-remove" style="color:red;"></i>'+
    '<input type="hidden" value="'+ obj.code +'" /></td></tr>');
}

function calcTotal(){
  var calcTotal = 0;
  var total = 0;
  // console.log(arrCart);
  arrCart.forEach(function(val){
    calcTotal += parseInt(val.amount);
    total += parseInt(val.itemT);
  });
  var saving = total - calcTotal;
  $("#t-total").text(total);
  $("#t-saving").text(saving)
  $("#t-calcTotal").text(calcTotal);

}