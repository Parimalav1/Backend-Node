"use strict";

var cleaner = require("knex-cleaner");

function cleanTables(knex) {
  return cleaner.clean(knex, {
    mode: "truncate",
    restartIdentity: true,
    // ask PosrgreSQL to reset the Primary Keys back to 0
    ignoreTables: ["knex_migrations", "knex_migrations_lock"]
  }).then(function () {
    return console.log("\n== All tables truncated, ready to seed ==\n");
  });
}

exports.seed = function (knex) {
  if (knex.client.config.client === "sqlite3") {
    /* 
      a recent version of SQLite3 broke knex-cleaner's functionality when foreign keys are enabled,
      so we're temporarily disabling foreign keys when running the seeds against SQLite3.
    */
    return knex.raw("PRAGMA foreign_keys = OFF;").then(function () {
      return cleanTables(knex);
    });
  } else {
    return cleanTables(knex);
  }
}; // exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };