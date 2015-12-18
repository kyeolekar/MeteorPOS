Meteor.methods({
  saveBill: function(customer, data, payed, a, tax){
    var currentno = Bills.findOne({},{sort:{billno:-1}}).billno || 0;
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