import React, { useEffect, useState } from 'react'

import './app.scss'
import { AddTask } from 'src/components/AddTask'
import { Title } from 'src/components/Title'
import { ListTask } from 'src/components/ListTask'
import { atualizar, deletarTask, inserir, listarTodos } from 'src/database'


export const App: React.FC = () => {

  const [taskList, setTaskList] = useState<any>([])
  const [tempId, setTempId] = useState<string>(``)

  const listarTasks = () => {
    listarTodos().then((dados) => {
      setTaskList({ ...dados })
    })
  }

  useEffect(() => {
    listarTasks()
  }, [])

  const cadastrarTask = (taskStatus: boolean, taskDate: Date, taskName: string) => {
    const task = { "status": taskStatus, "taskName": taskName, "taskDate": taskDate }
    inserir(task)
    listarTasks()
  }

  const alterarTask = (id: string, taskStatus: boolean, taskDate: Date, taskName: string) => {
    const task = { "status": taskStatus, "taskName": taskName, "taskDate": taskDate }
    atualizar(id, task)
    listarTasks()
  }

  const atualizarStatusTask = (id: string, status: boolean) => {
    const task = { "status": status }
    atualizar(id, task)
    listarTasks()
  }

  const handleClick = (id: string, action: string) => {
    if (action === `deletar`) {
      deletarTask(id)
    } else {
      setTempId(id)
    }
    listarTasks()
  }

  return (
    <div className="App">
      <Title />
      <AddTask tempId={tempId} setTempId={setTempId} cadastrarTask={cadastrarTask} alterarTask={alterarTask} handleClick={handleClick} />
      <hr />
      <ListTask taskList={taskList} atualizarStatusTask={atualizarStatusTask} handleClick={handleClick} />
    </div>
  )
}