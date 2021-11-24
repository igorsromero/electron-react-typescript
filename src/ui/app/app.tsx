import React, { useEffect, useState } from 'react'

import './app.scss'
import { AddTask } from 'src/components/AddTask'
import { Title } from 'src/components/Title'
import { ListTask } from 'src/components/ListTask'
import { inserir } from 'src/database'


export const App: React.FC = () => {

  const [taskList, setTaskList] = useState<any>([])

  const cadastrarTask = (taskDate: Date, taskName: string) => {
    const task = { "status": false, "taskName": taskName, "taskDate": taskDate }
    inserir(task)
  }

  const atualizarStatusTask = (index: number, status: boolean) => {
    let tempTaskList = [...taskList]
    tempTaskList[index].status = status
    setTaskList(tempTaskList)
  }

  return (
    <div className="App">
      <Title />
      <AddTask cadastrarTask={cadastrarTask} />
      <hr />
      {/* ScrollView */}
      <ListTask atualizarStatusTask={atualizarStatusTask} />
    </div>
  )
}