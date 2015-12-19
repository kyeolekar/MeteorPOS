Items.permit(['insert', 'update', 'remove']).apply();
Bills.permit(['insert']).apply();
Company.permit(['insert', 'update']).apply();
Balance.permit(['insert', 'update']).apply();
Party.permit(['insert', 'update', 'remove']).apply();