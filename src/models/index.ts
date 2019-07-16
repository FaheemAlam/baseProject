/**
 * @file This folder contains sequelize database model definitions and interfaces
 */

import { database } from 'onebyte_utils'
import { Models } from './interfaces'
import { test, testOptions } from './test'
export let models: Models

/**
 *  Returns an object that allows to interact with the models
 */
export function registerModels (): Models {
  // tslint:disable:no-unsafe-any
  models = database.registerModels<Models>({
    test,
  }, {
    testOptions,
  });

  return models;
}
