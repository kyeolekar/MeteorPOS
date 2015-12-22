Meteor.methods({
  saveBill: function(customer, data, payed, a, tax){
      if(Bills.findOne({},{sort:{billno:-1}})){
        var currentno = Bills.findOne({},{sort:{billno:-1}}).billno;
      } else {
        var currentno = 0;
      }
    var billno = currentno + 1;
    var id = Bills.insert({
      customer: customer,
      data: data,
      payed: payed || 'No',
      info: a,
      grand: a.grand,
      time: new Date(),
      billno: billno,
      tax: tax
    });
    if(id){
      data.forEach(function(val){
        console.log(val);
        var qty = parseInt(val.qty);   
        console.log(qty);    
        if(Items.findOne({item: val.code})){
                var total = parseInt(Items.findOne({item: val.code}).stock) || 0;
        } else {
                var total = 0; 
        }
        total = total - qty;
        total = parseInt(total);
        console.log(total);
        Items.update({item: val.code},{
          $set:{
            stock: total
          }
        });
      })
    }
    return id;
  },
  saveEditedBill: function(id, customer, data, payed, a){
    var billno = Bills.findOne({_id:id}).billno;
    var idd = Bills.update({_id: id},{
      customer: customer,
      data: data,
      payed: payed || 'No',
      info: a,
      grand: a.grand,
      time: new Date(),
      billno: billno
    });
    return id;
  }
})