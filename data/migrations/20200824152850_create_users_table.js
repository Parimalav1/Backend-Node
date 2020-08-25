
exports.up = function(knex) {
    return knex.schema

    .createTable("users", tbl => {
        tbl.increments();

        tbl.string("name", 128).notNullable().unique();
        tbl.string("username", 128).notNullable().unique().index();
        tbl.string("password", 256).notNullable().unique();
        tbl.string("phone-number", 256).notNullable().unique();
        tbl.text('address', 128).unsigned();
    })

    .createTable("volunteers", tbl => {
        tbl.increments();
        
        tbl.integer("user_id")
            .unsigned()
            .references("id")
            .inTable('users')
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })

    .createTable("donors", tbl => {
        tbl.increments();

        tbl.integer("user_id")
            .unsigned()
            .references("id")
            .inTable('users')
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })

    .createTable("foodItems", tbl => {
        tbl.increments();

        tbl.string("name", 128).notNullable().unique();
        tbl.string('type', 128).notNullable();
        tbl.string('quantity').notNullable();
    })

    .createTable("volunteer_donor_foodItem", tbl => {
        tbl.increments();

        tbl.integer("users")
            .unsigned()
            .references("id")
            .inTable('users')
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("volunteer_donor_foodItem")
                        .dropTableIfExists("foodItems")
                        .dropTableIfExists("donors")
                        .dropTableIfExists("volunteers")
                        .dropTableIfExists("users");
};