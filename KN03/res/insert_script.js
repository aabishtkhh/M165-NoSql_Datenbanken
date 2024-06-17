var cat_1 = new ObjectId();
var cat_2 = new ObjectId();
var cat_3 = new ObjectId();
var cat_4 = new ObjectId();
var cat_5 = new ObjectId();
var cat_6 = new ObjectId();


db.category.insertMany([
    {
        _id: cat_1,
        name: "Appetizers",
        desc: "Start your meal with a burst of flavors"
    },
    {
        _id: cat_2,
        name: "Sides",
        desc: "Enhance your meal with a variety of flavorful sides"
    },
    {
        _id: cat_3,
        name: "Wings",
        desc: "Experience the best wings with bold and delicious flavors"
    },
    {
        _id: cat_4,
        name: "Burgers",
        desc: "Enjoy our succulent, hearty and flavourful burgers"
    },
    {
        _id: cat_5,
        name: "Drinks",
        desc: "Refresh yourself with a cooling drink"
    },
    {
        _id: cat_6,
        name: "Dips",
        desc: "Complement your meal with dips of sweet and savory flavors"
    }
]);

var menu_item_1 = new ObjectId();
var menu_item_2 = new ObjectId();
var menu_item_3 = new ObjectId();
var menu_item_4 = new ObjectId();
var menu_item_5 = new ObjectId();
var menu_item_6 = new ObjectId();

db.menu_item.insertMany([
    {
        _id: menu_item_1,
        name: "Mozzarella Sticks",
        desc: "Crispy and cheesy mozzarella sticks served with marinara sauce",
        price: 5.50,
        category: [cat_1, cat_2]
    },
    {
        _id: menu_item_2,
        name: "French Fries",
        desc: "Golden, crispy French fries",
        price: 3.00,
        category: [cat_2, cat_1]
    },
    {
        _id: menu_item_3,
        name: "Teriyaki Wings",
        desc: "Spicy and tangy teriyaki wings",
        price: 12.00,
        category: [cat_3]
    },
    {
        _id: menu_item_4,
        name: "Classic Burger",
        desc: "Juicy chicken zinger burger with lettuce, tomato, and cheese",
        price: 8.00,
        category: [cat_4]
    },
    {
        _id: menu_item_5,
        name: "Coca-Cola",
        desc: "Refreshing Coca-Cola",
        price: 2.00,
        category: [cat_5]
    },
    {
        _id: menu_item_6,
        name: "Ranch Dip",
        desc: "Creamy ranch dip",
        price: 1.00,
        category: [cat_6, cat_2]
    }
]);

var customer1 = new ObjectId();
var customer2 = new ObjectId();
var customer3 = new ObjectId();

db.customers.insertOne({
    _id: customer1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone_number: +41123456789,
    Order: {
        _id: new ObjectId(),
        date: new Date("2024-09-13"),
        menu_items: [menu_item_1, menu_item_2]
    }
});

db.customers.insertOne({
    _id: customer2,
    name: "Felix Onner",
    email: "felix.onner@gmail.com",
    phone_number: +41123456789,
    Order: {
        _id: new ObjectId(),
        date: new Date("2024-03-01"),
        menu_items: [menu_item_3, menu_item_4]
    }
});

db.customers.insertOne({
    _id: customer3,
    name: "Lesie Fountain",
    email: "les.fountain@gmail.com",
    phone_number: +41123456789,
    Order: {
        _id: new ObjectId(),
        date: new Date("2024-02-02"),
        menu_items: [menu_item_5, menu_item_6]
    }
});