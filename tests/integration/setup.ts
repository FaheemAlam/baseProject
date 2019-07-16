/**
 * @file this file  setups the e2e tests
 */

import * as chai from 'chai'
import * as dotenv from 'dotenv'
dotenv.config()
import * as http from 'http'
import { Lib } from 'onebyte_utils'
import * as Sequelize from 'sequelize'
import * as sinon from 'sinon'
import * as supertest from 'supertest'
import { initService } from '../../src/app'

const SANDBOX: sinon.SinonSandbox = sinon.sandbox.create()
const expect: Chai.ExpectStatic = chai.expect
let request: supertest.SuperTest<supertest.Test>

const sequelizeTestInstance: Sequelize.Sequelize = new Sequelize(
  <string> process.env.DATABASE_CONNECTION_URL, { dialect: 'mysql' },
)
const sequelizeQueryInterface: Sequelize.QueryInterface = sequelizeTestInstance.getQueryInterface()

/**
 * Drops all tables through sequelize]
 */
async function dropTables (): Promise<void> {
  return sequelizeQueryInterface.dropAllTables()
}

export const serviceRootURI: string = ''

export const config: Lib.Config = {
  database: true,
  name: 'baseproject-service',
}

before(async function (): Promise<void> {
  // tslint:disable-next-line
  this.timeout(100 * 1000)
  await dropTables()
  console.log('Initialising service Begin') /* tslint:disable-line */

  const app: http.Server = await initService(config)
  request = supertest.agent(app)
})

afterEach(async () => {
  SANDBOX.restore()
})

export {
  sinon,
  request,
  SANDBOX,
  expect,
}
