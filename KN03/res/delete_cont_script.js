db.customer.deleteOne({ "_id": ObjectId("665dccd078f0c6a3780d330c") })

db.menu_item.deleteMany({ $or: [{ _id: ObjectId("665dcc4078f0c6a3780d32fd") }, { _id: ObjectId("665dcc4078f0c6a3780d32fa") }] })
