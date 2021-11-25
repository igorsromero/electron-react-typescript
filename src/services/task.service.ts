import { ObjectId } from 'mongodb'
import { mongoConnectDb, mongoDisconnect } from "src/database"
import { ITask } from "src/interfaces/task.interface"

export const create = async (data: ITask) => {
  const newData = (await mongoConnectDb()).collection(`taskList`).insertOne(data)
  mongoDisconnect()
  return newData
}

export const findAll = async () => {
  const data = (await mongoConnectDb()).collection(`taskList`).find({}).sort({ status: 1 }).toArray()
  mongoDisconnect()
  return data
}

export const findOne = async (id: string) => {
  const data = (await mongoConnectDb()).collection(`taskList`).findOne({ _id: new ObjectId(id) })
  mongoDisconnect()
  return data
}

export const remove = async (id: string) => {
  const data = (await mongoConnectDb()).collection(`taskList`).deleteOne({ _id: id })
  return data
}

export const update = async (id: string, data: ITask | any) => {
  return (await mongoConnectDb()).collection(`taskList`).updateOne({ _id: new ObjectId(id) }, { $set: data })
}