'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  /*
   *   Relacionamento entre categoria e imagens
   */
  image() {
    return this.belongsTo('App/Models/Images')
  }
}

module.exports = Category
