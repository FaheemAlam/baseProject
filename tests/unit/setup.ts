/**
 * @file this file  setups the unit tests
 */
// tslint:disable:ordered-imports
import * as dotenv from 'dotenv'
dotenv.config()
// disable DB
process.env.DATABASE_CONNECTION_URL = 'bad connection string'
import * as asPromised from 'chai-as-promised'
import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
chai.use(asPromised)
chai.use(sinonChai)
chai.should()

import { Logging } from 'onebyte_utils'
import * as sinon from 'sinon'

export const SANDBOX: sinon.SinonSandbox = sinon.sandbox.create()
export const expect: Chai.ExpectStatic = chai.expect

const loggerStub: Function = logStub
// tslint:disable-next-line
const dbTransactions: any = {
  commit: SANDBOX.stub(),
  rollback: SANDBOX.stub(),
}
// tslint:disable-next-line
const databaseStub: any = {
  client: {
    // tslint:disable-next-line
    transaction: () => dbTransactions,
  },
}
// tslint:disable-next-line
export const atlasStub: AtlasStub = {
  database: databaseStub,
  logger: loggerStub,
}

afterEach(async () => {
  SANDBOX.restore()
})

/**
 * logger stub
 */
export function logStub (): Logging.Logger {
  return {
    critical: SANDBOX.stub(),
    debug: SANDBOX.stub(),
    decorators: {
      component: '',
      service: 'test',
    },
    error: SANDBOX.stub(),
    info: SANDBOX.stub(),
    log: SANDBOX.stub(),
    warn: SANDBOX.stub(),
  }
}

// (forceCast is for unit tests to create partial Router.Request objects)
// tslint:disable-next-line
export function forceCast<T> (input: any): T {return input}

// Interfaces
export interface AtlasStub {
  logger: Function
  // tslint:disable-next-line
  database: any
}
