'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  /**
   * Relacionamento de produtos com imagens
   */
  images() {
    return this.belongsTo('App/Models/Image')
  }
}

module.exports = Product
