'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string("title").notNullable()
      table.string("content").notNullable()
      table.string("cover_img_url")
      table.integer("author_id").unsigned()
      table.timestamps()
      table.foreign("author_id")
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
