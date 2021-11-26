import React, { useEffect, useState } from 'react'

import './app.scss'
import { AddTask } from 'src/components/AddTask'
import { Title } from 'src/components/Title'
import { ListTask } from 'src/components/ListTask'
import { createTask, findAllTasks, updateTask, removeTask } from '../../controller/task.controller'


export const App: React.FC = () => {

  const [taskList, setTaskList] = useState<any>([])
  const [tempId, setTempId] = useState<string>(``)

  const listTasks = () => {
    findAllTasks().then((data) => {
      setTaskList({ ...data })
    })
  }

  useEffect(() => {
    listTasks()
  }, [])

  const handleCreateTask = (taskStatus: boolean, taskDate: Date, taskName: string) => {
    const task = { "status": taskStatus, "taskName": taskName, "taskDate": taskDate }
    createTask(task)
    listTasks()
  }

  const handleUpdateTask = (id: string, taskStatus: boolean, taskDate: Date, taskName: string) => {
    const task = { "status": taskStatus, "taskName": taskName, "taskDate": taskDate }
    updateTask(id, task)
    listTasks()
  }

  const handleUpdateStatus = (id: string, status: boolean) => {
    const task = { "status": status }
    updateTask(id, task)
    listTasks()
  }

  const handleClick = (id: string, action: string) => {
    if (action === `delete`) {
      removeTask(id)
    } else if (action === `edit`) {
      setTempId(id)
    }
    listTasks()
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