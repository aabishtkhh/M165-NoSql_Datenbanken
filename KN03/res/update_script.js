db.category.updateOne(
    { _id: cat_1 },
    { $set: { desc: "Start your meal with our delicious appetizers" } }
);

db.menu_item.updateMany(
    {
        $or: [
            { price: { $gt: 10 } },
            { name: "French Fries" }
        ]
    },
    { $set: { desc: "Updated description for menu item" } }
);

db.customers.replaceOne(
    { email: "john.doe@gmail.com" },
    {
        name: "Johnathan Doe",
        email: "john.doe@gmail.com",
        phone_number: "+41123456789",
        Order: {
            _id: new ObjectId(),
            date: new Date("2024-09-13"),
            menu_items: [menu_item_3, menu_item_4]
        }
    }
);