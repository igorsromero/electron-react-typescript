import { MongoClient, ObjectId } from 'mongodb'
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
  const dado = await dbo.collection(`taskList`).insertOne(dados)
  db.close()
  return dado
}

export async function listarTodos() {
  const db = await MongoClient.connect(url)
  const dbo = db.db(`valore`)
  const dados = await dbo.collection(`taskList`).find({}).sort({ status: 1 }).toArray()
  db.close()
  return dados
}

export async function listarUm(id: string) {
  const db = await MongoClient.connect(url)
  const dbo = db.db(`valore`)
  const tarefa = await dbo.collection(`taskList`).findOne({ _id: new ObjectId(id) })
  db.close()
  return tarefa
}

export async function deletarTask(id: string) {
  const db = await MongoClient.connect(url)
  const dbo = db.db(`valore`)
  await dbo.collection(`taskList`).deleteOne({ _id: id })
  return
}

export async function atualizar(id: string, dados: ITask | any) {
  const db = await MongoClient.connect(url)
  const dbo = db.db(`valore`)
  return await dbo.collection(`taskList`).updateOne({ _id: new ObjectId(id) }, { $set: dados })
}