import { router } from 'onebyte_utils';
import * as index from '../controllers/index'
/**
 * Init  Routes function
 */
export function init (): void {
  testRoute()
}

/**
 * Adds routes for activities
 */
function testRoute (): void {
  router.exposed.GET(
    'some-route',
    1,
    index.test,
  )
}
