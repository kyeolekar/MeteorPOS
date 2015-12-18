Company = new Mongo.Collection("company");
Company.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Company Name",
  },
  address: {
    type: String,
    label: "Company Address"
  },
  email: {
    type: String,
    label: "Company Email",
    optional: true
  },
  website: {
    type: String,
    label: "Company website",
    optional: true
  },
  phone: {
    type: String,
    label: "Phone Number"
  },
  vat: {
    type: String,
    label: "Company's VAT TIN",
    optional: true
  },
  cst: {
    type: String,
    label: "Company's CST Number",
    optional: true
  },
  tax: {
    type: String,
    label: "Company's Service Tax Number",
    optional: true
  },
  lbt: {
    type: String,
    label: "Company's LBT Number",
    optional: true
  },
  pan: {
    type: String,
    label: "Company's PAN",
    optional: true
  },
  declaration: {
    type: String,
    label: "Declaration",
    optional: true,
    autoform: {
     rows: 3
    }
  }
}));