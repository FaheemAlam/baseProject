/**
 * @file PUT /v1/notification-template-sets/:uuid
 */

// tslint:disable:no-backbone-get-set-outside-model
// tslint:disable:ordered-imports
// tslint:disable:no-identical-functions
// tslint:disable:max-func-body-length
// tslint:disable:no-duplicate-string
// tslint:disable:max-line-length
// tslint:disable:no-big-function
// tslint:disable:no-loop-statement
// tslint:disable:no-unsafe-any no-any response.body is in any type and lint complains about that
// tslint:disable:prefer-object-spread
import { expect, request } from '../setup'

describe('API GET /v1/some-route', () => {
  it('should update the latest template set that has never been active', async () => {
    const response: any = await request
      .get(`/v1/some-route`)
      .expect(200)
    expect(response.body.message).to.be.equal('some-data')
  })
})
