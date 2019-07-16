/**
 * @file This folder contains route schemas. It is used by the router  to validate incoming query params / body
 */
import { support } from 'onebyte_utils'
import { test } from './test'

/**
 * Register the schemas inside atlas data structure
 */
export function registerSchemas (): void {
  support.schema.addSchemasRecursive({
    test,
  })
}
