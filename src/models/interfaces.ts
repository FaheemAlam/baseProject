import { Database } from 'onebyte_utils';

/**
 * @file Model definitions
 */

export namespace Test {
  export interface Model {
    name: string
    uuid: string
  }
}
export type MInstance<TAttributes> = Database.Instance<TAttributes> & TAttributes

export type TestInstance = MInstance<Test.Model>
export type TestModel = Database.Model<TestInstance, Test.Model>
export interface Models {
  test: TestModel
}
