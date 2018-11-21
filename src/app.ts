/**
 * @file Main entry point for the service
 * Run an application's server
 */
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as http from 'http'
import { finalize , init, Lib, logger as Logger, Logging } from 'micro-kit-atlas'
import * as config from './conf'
const loggingOptions: Logging.InputDecorators = {
  component: 'App',
}
const logger: Logging.Logger = new Logger('contacts-service', loggingOptions)

dotenv.config()

/**
 * Initialize service server
 * @param options Application options
 * @returns Promise<http.Server> Initialized server object
 */
export async function initService (options: Lib.Config): Promise<http.Server> {
  const app: express.Application = await init(options, config.ERRORS_LIST)
  await finalize(app)
  const inst: http.Server = app.listen(config.SERVER_PORT, () => {
    logger.debug('running', {
      port: inst.address().port,
    })
  })

  return inst
}
