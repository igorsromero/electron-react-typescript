import { ITask } from "src/interfaces/task.interface"
import { create, findAll, findOne, remove, update } from '../services/task.service'

export const createTask = (data: ITask) => {
  return create(data)
}

export const findAllTasks = () => {
  return findAll()
}

export const findOneTask = (id: string) => {
  return findOne(id)
}

export const removeTask = (id: string) => {
  return remove(id)
}

export const updateTask = (id: string, data: ITask | any) => {
  return update(id, data)
}