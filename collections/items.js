Items = new Mongo.Collection("items");
Items.attachSchema(new SimpleSchema({
  item: {
    type: String,
    label: "Item Code",
    max: 200
  },
  description: {
    type: String,
    label: "Item Description"
  },
  price: {
    type: Number,
    label: "Price",
    min: 1
  }
}));