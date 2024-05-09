use("revenueLineS");

// Insert a few documents into the sales collection.
db.getCollection("Revenue").insertMany([
  {
    Date: "2024-01-31 00:00:00",
    Orders: 0,
    "Gross sales": 0,
    Returns: 0,
    Coupons: 0,
    "Net sales": 0,
    Taxes: 0,
    Shipping: 0,
    "Total sales": 0,
  },
  {
    Date: "2024-01-30 00:00:00",
    Orders: 1,
    "Gross sales": 1162.1,
    Returns: 0,
    Coupons: 0,
    "Net sales": 1162.1,
    Taxes: 0,
    Shipping: 2,
    "Total sales": 1164.1,
  },
  {
    Date: "2024-01-29 00:00:00",
    Orders: 1,
    "Gross sales": 1566.72,
    Returns: 0,
    Coupons: 0,
    "Net sales": 1566.72,
    Taxes: 0,
    Shipping: 5,
    "Total sales": 1571.72,
  },
  {
    Date: "2024-01-28 00:00:00",
    Orders: 0,
    "Gross sales": 0,
    Returns: 0,
    Coupons: 0,
    "Net sales": 0,
    Taxes: 0,
    Shipping: 0,
    "Total sales": 0,
  },
  {
    Date: "2024-01-27 00:00:00",
    Orders: 1,
    "Gross sales": 517,
    Returns: 0,
    Coupons: 0,
    "Net sales": 517,
    Taxes: 0,
    Shipping: 2,
    "Total sales": 519,
  },
  {
    Date: "2024-01-26 00:00:00",
    Orders: 1,
    "Gross sales": 1563.68,
    Returns: 0,
    Coupons: 0,
    "Net sales": 1563.68,
    Taxes: 0,
    Shipping: 2,
    "Total sales": 1565.68,
  },
  {
    Date: "2024-01-25 00:00:00",
    Orders: 0,
    "Gross sales": 0,
    Returns: 0,
    Coupons: 0,
    "Net sales": 0,
    Taxes: 0,
    Shipping: 0,
    "Total sales": 0,
  },
  {
    Date: "2024-01-24 00:00:00",
    Orders: 2,
    "Gross sales": 4327.62,
    Returns: 0,
    Coupons: 0,
    "Net sales": 4327.62,
    Taxes: 0,
    Shipping: 7,
    "Total sales": 4334.62,
  },
]);

console.log("revenue data run Successfully");
