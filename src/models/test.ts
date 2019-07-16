/**
 * Contact Model (how to contact a globaliD user)
 */

import * as SequelizeStatic from 'sequelize'
import { TestInstance } from './interfaces'

export const test: SequelizeStatic.DefineAttributes = {
  name: {
    comment: 'name',
    type: SequelizeStatic.TEXT,
  },
  uuid: {
    comment: `the gid_uuid of the identity that has been obfuscated`,
    primaryKey: true,
    type: SequelizeStatic.STRING(64),
  },

}

export const testOptions: SequelizeStatic.DefineOptions<TestInstance> = {
  paranoid: false,
  timestamps: false,
}
