
exports.up = function(knex) {
  return knex.schema
    .createTable('roles', tbl => {
        tbl.increments();
        tbl.string("name", 255)
            .notNullable()
            .unique();
    })
    .createTable("employees", tbl => {
        tbl.increments();
        tbl.string("name", 255)
            .notNullable();

        //Foreign Key
        tbl.integer('role_id')
            .unsigned()
            .notNullable()
            .reference('id')
            inTable('roles')
            .onDelete('CASCADE') //RESTRICT, CASCADE (updates ids), DO NOTHING, SET NULL 
            .onUpdate('CASCADE')
    })
    .createTable('employee_tickets', tbl => {
        tbl.primary(["ticket_id","employee_id"]);
        tbl.integer('ticket_id')
        .unsigned()
        .notNullable()
        .reference('id')
        .inTable('tickets');
        tbl.integer('employee_id')
        .unsigned()
        .notNullable()
        .reference('id')
        .inTable('employees');
    })
};

exports.down = function(knex) {
  
};
