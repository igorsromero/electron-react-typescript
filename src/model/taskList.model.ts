import { mongoConnectDb } from "src/database"

export async function createCollection() {
  return (await mongoConnectDb()).createCollection(`taskList`, () => {
  })
}