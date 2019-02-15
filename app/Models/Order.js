'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  /**
   * Relacionamento de order com orderitems
   */
  items() {
    return this.hasMany('App/Models/OrderItem')
  }
}

module.exports = Order
