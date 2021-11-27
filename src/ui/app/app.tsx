import React, { useEffect, useState } from 'react'

import './app.scss'
import { AddTask } from 'src/components/AddTask'
import { Title } from 'src/components/Title'
import { ListTask } from 'src/components/ListTask'
import { createTask, findAllTasks, updateTask, removeTask } from '../../controller/task.controller'


export const App: React.FC = () => {

  const [taskList, setTaskList] = useState<any>([])
  const [tempId, setTempId] = useState<string>(``)

  const listTasks = async () => {
    await findAllTasks().then((data) => {
      setTaskList({ ...data })
    })
  }

  useEffect(() => {
    listTasks()
  }, [])

  const handleCreateTask = async(taskStatus: boolean, taskDate: Date, taskName: string) => {
    const task = { "status": taskStatus, "taskName": taskName, "taskDate": taskDate }
    await createTask(task)
    await listTasks()
  }

  const handleUpdateTask = async(id: string, taskStatus: boolean, taskDate: Date, taskName: string) => {
    const task = { "status": taskStatus, "taskName": taskName, "taskDate": taskDate }
    await updateTask(id, task)
    await listTasks()
  }

  const handleUpdateStatus = async(id: string, status: boolean) => {
    const task = { "status": status }
    await updateTask(id, task)
    await listTasks()
  }

  const handleClick = async(id: string, action: string) => {
    if (action === `delete`) {
      await removeTask(id)
    } else if (action === `edit`) {
      setTempId(id)
    }
    await listTasks()
  }

  return (
    <div className="App">
      <Title>Lista de Tarefas</Title>
      <AddTask tempId={tempId} setTempId={setTempId} handleCreateTask={handleCreateTask} handleUpdateTask={handleUpdateTask} handleClick={handleClick} />
      <hr />
      <ListTask taskList={taskList} handleUpdateStatus={handleUpdateStatus} handleClick={handleClick} />
    </div>
  )
}