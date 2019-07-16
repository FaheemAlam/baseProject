/**
 * @file Contact controller unit tests
 */
// tslint:disable:ordered-imports
// tslint:disable:object-literal-sort-keys
// tslint:disable:no-backbone-get-set-outside-model
// tslint:disable:no-identical-functions
// tslint:disable:max-line-length
// tslint:disable:max-func-body-length
// tslint:disable:no-big-function
// tslint:disable:no-unsafe-any
// tslint:disable:no-any
// tslint:disable:no-duplicate-string
// tslint:disable:no-hardcoded-credentials
// tslint:disable:no-unused-expression
// tslint:disable:chai-vague-errors
import { expect } from '../../setup'
import { Router } from 'onebyte_utils'
import * as t from '../../../../src/controllers/index'

describe('Test controller', () => {
  // tslint:disable-next-line
  let controller: any

  beforeEach(() => {
    // controller = proxyquire.noCallThru()('../../../../src/controllers/index', {
    // })
  })

  describe('#test', () => {
    it('should pass', async () => {
      const res: string = await t.test()
      expect(res).to.be.equal('some-data')
    })
  })

})
