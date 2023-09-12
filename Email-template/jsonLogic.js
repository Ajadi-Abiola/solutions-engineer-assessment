// const rules = {
//   rule1: {
//     and: [
//       { ">": [{ var: "amount" }, 0] },
//       {
//         ">=": [
//           { date: [{ var: "created_at" }, "YYYY-MM-DDTHH:mm:ss.SSSSSSZ"] },
//           "2021-01-01T00:00:00.000000Z",
//         ],
//       },
//       {
//         in: [{ var: "address.shippingCountry" }, ["Croatia", "Italy"]],
//       },
//     ],
//   },
//   rule2: {
//     and: [
//       { "!=": [{ var: "payment" }, null] },
//       {
//         ">=": [
//           { date: [{ var: "created_at" }, "YYYY-MM-DDTHH:mm:ss.SSSSSSZ"] },
//           "2021-01-01T00:00:00.000000Z",
//         ],
//       },
//       {
//         in: [{ var: "address.shippingCountry" }, ["Croatia", "Italy"]],
//       },
//     ],
//   },

//   rule3: {
//     or: [
//       {
//         and: [
//           { ">": [{ var: "amount" }, 1000] },
//           {
//             ">=": [
//               { date: [{ var: "created_at" }, "YYYY-MM-DDTHH:mm:ss.SSSSSSZ"] },
//               "2022-01-01T00:00:00.000000Z",
//             ],
//           },
//           {
//             in: [{ var: "address.shippingCountry" }, ["Spain", "Germany"]],
//           },
//           {
//             "==": [{ var: "order_status.title" }, "Shipped"],
//           },
//         ],
//       },
//     ],
//   },
// };

// export default rules;
