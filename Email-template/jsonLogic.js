// const rules = {
//   and: [
//     { ">": [{ var: "amountDue" }, 0] }, // Check if dueAmount is greater than 0
//     { ">=": [{ var: "orderDate" }, "2021-01-01T00:00:00Z"] }, // Check if purchaseDate is on or after January 1st, 2021
//     {
//       in: [
//         { var: "address.shippingCountry" },
//         ["Croatia", "Italy"], // Check if shippingCountry is either Croatia or Italy
//       ],
//     },
//   ],
// };

// const orderData = orderData;

// const result = jsonLogic.apply(rules, orderData);
