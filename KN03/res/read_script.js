db.customers.find()

db.customers.find({ "Order.date": { $gt: new Date("2024-03-01") } }).toArray();

//doesn`t work
db.customers.find({ $or: [{ name: "John Doe" }, { "email": "john.doe@gmail.com" }], });

db.customers.find({
    $and: [
        { name: "John Doe" },
        { _id: "665dcfb878f0c6a3780d331c" }
    ]
});

db.customers.find({
    $and: [
        { name: "Felix Onner" },
        { phone_number: 41123456789 }
    ]
});

db.category.find({ name: { $regex: "a", $options: "i" } });

db.menu_item.find({}, { _id: 0, name: 1, price: 1 });

db.menu_item.find({}, { name: 1, desc: 1 });
