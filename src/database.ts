import { MongoClient } from 'mongodb'
import { ITask } from './interfaces/task.interface'

const url = `mongodb://localhost:27017/valore`

MongoClient.connect(url, function (err, db) {
  if (err) throw err
  const dbo = db!.db(`valore`)
  dbo.createCollection(`taskList`, (res, err) => {
  })
})

export async function inserir(dados: ITask) {
  const db = await MongoClient.connect(url)
  const dbo = db.db(`valore`)
  return await dbo.collection(`taskList`).insertOne(dados)
}

export async function listarTodos() {
  const db = await MongoClient.connect(url)
  const dbo = db.db(`valore`)
  return await dbo.collection(`taskList`).find({}).toArray()
}