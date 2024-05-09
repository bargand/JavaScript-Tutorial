// CRUD operation means
/*
C= create
U= Update
R= Read
D= Delete
*/

use("crudDB");

db.createCollection("revenue");

db.revenue.insertMany([
  {
    name: "Debargha Nandi",
    orderID: 12,
    orderTime: "10:00 pm, 2/5/2024",
    orderAmount: 1000,
    orderQuantity: 5,
  },
  {
    name: "Alice Smith",
    orderID: 13,
    orderTime: "9:30 am, 2/6/2024",
    orderAmount: 750,
    orderQuantity: 3,
  },
  {
    name: "John Doe",
    orderID: 14,
    orderTime: "3:15 pm, 2/7/2024",
    orderAmount: 500,
    orderQuantity: 2,
  },
  {
    name: "Emma Johnson",
    orderID: 15,
    orderTime: "11:45 am, 2/8/2024",
    orderAmount: 2000,
    orderQuantity: 8,
  },
  {
    name: "Michael Brown",
    orderID: 16,
    orderTime: "1:20 pm, 2/9/2024",
    orderAmount: 300,
    orderQuantity: 1,
  },
  {
    name: "Sophia Williams",
    orderID: 17,
    orderTime: "5:30 pm, 2/10/2024",
    orderAmount: 600,
    orderQuantity: 4,
  },
  {
    name: "Liam Jones",
    orderID: 18,
    orderTime: "8:10 am, 2/11/2024",
    orderAmount: 1200,
    orderQuantity: 6,
  },
  {
    name: "Olivia Brown",
    orderID: 19,
    orderTime: "2:45 pm, 2/12/2024",
    orderAmount: 450,
    orderQuantity: 3,
  },
  {
    name: "Noah Davis",
    orderID: 20,
    orderTime: "4:00 pm, 2/13/2024",
    orderAmount: 800,
    orderQuantity: 4,
  },
  {
    name: "Ava Garcia",
    orderID: 21,
    orderTime: "10:30 am, 2/14/2024",
    orderAmount: 1500,
    orderQuantity: 5,
  },
  {
    name: "William Martinez",
    orderID: 22,
    orderTime: "12:15 pm, 2/15/2024",
    orderAmount: 900,
    orderQuantity: 3,
  },
  {
    name: "Isabella Rodriguez",
    orderID: 23,
    orderTime: "3:45 pm, 2/16/2024",
    orderAmount: 650,
    orderQuantity: 2,
  },
  {
    name: "James Wilson",
    orderID: 24,
    orderTime: "9:00 am, 2/17/2024",
    orderAmount: 1100,
    orderQuantity: 4,
  },
  {
    name: "Emily Lopez",
    orderID: 25,
    orderTime: "11:20 am, 2/18/2024",
    orderAmount: 300,
    orderQuantity: 1,
  },
  {
    name: "Alexander Taylor",
    orderID: 26,
    orderTime: "6:30 pm, 2/19/2024",
    orderAmount: 700,
    orderQuantity: 3,
  },
  {
    name: "Mia Lee",
    orderID: 27,
    orderTime: "8:40 am, 2/20/2024",
    orderAmount: 950,
    orderQuantity: 5,
  },
  {
    name: "Benjamin Moore",
    orderID: 28,
    orderTime: "10:10 am, 2/21/2024",
    orderAmount: 400,
    orderQuantity: 2,
  },
  {
    name: "Charlotte Clark",
    orderID: 29,
    orderTime: "1:55 pm, 2/22/2024",
    orderAmount: 1300,
    orderQuantity: 6,
  },
  {
    name: "Daniel Hall",
    orderID: 30,
    orderTime: "4:25 pm, 2/23/2024",
    orderAmount: 600,
    orderQuantity: 3,
  },
  {
    name: "Amelia Hill",
    orderID: 31,
    orderTime: "7:10 am, 2/24/2024",
    orderAmount: 850,
    orderQuantity: 4,
  },
]);
/*
//find or filter

let OrderAmount = db.revenue.find({
  $and: [{ orderAmount: { $gte: 300 } }, { orderAmount: { $lte: 1500 } }],
});
console.log(OrderAmount.toArray());
*/

/*
//update

db.revenue.updateMany({ orderAmount: 1000 }, {$set: { orderAmount: 1511 }});

let a = db.revenue.find({orderAmount: 1511})
console.log(a.count())
console.log(a.toArray())

db.revenue.updateOne({orderAmount: 1511}, {$set: {orderAmount: 15000000}})

*/
//delete

db.revenue.deleteOne({ name: "Alice Smith" });

db.revenue.deleteMany({ name: "John Doe" });
