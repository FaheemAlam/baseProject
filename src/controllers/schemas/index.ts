/**
 * @file This folder contains route schemas. It is used by the router  to validate incoming query params / body
 */
import { support } from 'micro-kit-atlas'

/**
 * Register the schemas inside atlas data structure
 */
export function registerSchemas (): void {
  support.schema.addSchemasRecursive({
  })
}
