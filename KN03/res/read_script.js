db.customers.find()

db.menu_item.find({ $or: [{ _id: ObjectId("665dcfb878f0c6a3780d3312") }, { _id: ObjectId("665dcfb878f0c6a3780d3311") }] })

db.customers.find({ "Order.date": { $gt: new Date("2024-03-01") } }).toArray();;

db.customers.find({
    $or: [{ name: "John Doe" }, { "Order.date": { $gt: 2024 } }],
});

db.category.find({
    $and: [{ name: 1, desc: 1, _id: 1 }],
});

db.category.find({ name: { $regex: "a", $options: "i" } });

db.menu_item.find({}, { _id: ObjectId("665dcfb878f0c6a3780d3312"), name: "French Fries", category: "665dc78678f0c6a3780d32f4" });

db.menu_item.find({}, { name: "Mozzarella Sticks" });
