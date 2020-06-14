/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TaskSchema extends Schema {
    up() {
        this.create('tasks', (table) => {
            table.increments();
            table.string('title', 254).notNullable();
            table.string('tags', 254).notNullable();
            table.text('description').notNullable();
            table.string('dueDate', 254).notNullable();
            table.string('addedBy', 254).notNullable();
            table.string('status', 254).notNullable();
            table.timestamps();
        });
    }

    down() {
        this.drop('tasks');
    }
}

module.exports = TaskSchema;
