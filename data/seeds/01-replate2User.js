exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables
  return knex('users')
      return knex('volunteers').insert([
        // {id: 1, name: 'Mathew', username: 'mathew'},
        // {id: 2, name: 'John'},
        // {id: 3, name: 'Dustin'}
      ]);

  // const users = [
  //   {
  //     name: "volunteer", // will get id 1
  //   },
  //   {
  //     name: "donor", // will get id 2
  //   },
  // ];

  return knex("users")
    .insert(users)
    .then(() => console.log("\n== Seed data for users table added. ==\n"));

};

// exports.seed = function(knex) {
//   return knex('table_name').del()/.truncate()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
