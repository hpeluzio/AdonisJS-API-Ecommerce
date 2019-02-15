'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('Role')

class RoleSeeder {
  async run() {
    const admin = new Role()
    admin.name = 'Admin'
    admin.slug = 'admin'
    admin.description = 'Administrador do sistema'
    await admin.save()

    const manager = new Role()
    manager.name = 'Manager'
    manager.slug = 'manager'
    manager.description = 'Gerente do sistema'
    await manager.save()
  
    const client = new Role()
    client.name = 'Client'
    client.slug = 'client'
    client.description = 'Cliente do sistema'
    await client.save()
  }
}

module.exports = RoleSeeder
