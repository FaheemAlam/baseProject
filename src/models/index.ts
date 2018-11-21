/**
 * @file This folder contains sequelize database model definitions and interfaces
 */

import { database } from 'micro-kit-atlas'
import { Models } from './interfaces'

export let models: Models

/**
 *  Returns an object that allows to interact with the models
 */
export function registerModels (): Models {
  // tslint:disable:no-unsafe-any https://global-id.atlassian.net/browse/CPL-74
  models = database.registerModels<Models>({
  }, {
  });

  return models;
}
