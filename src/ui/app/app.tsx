import React, { useState } from 'react'

import './app.scss'
import { AddTask } from 'src/components/AddTask'
import { Title } from 'src/components/Title'
import { ListTask } from 'src/components/ListTask'

export const App: React.FC = () => {

  const [taskList, setTaskList] = useState<any>([])

  const cadastrarTask = (taskDate: Date, taskName: string) => {
    let tempTaskList = [...taskList]
    tempTaskList.push({
      status: false,
      taskName: taskName,
      taskDate: taskDate,
    })
    setTaskList(tempTaskList)
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
      <ListTask taskList={taskList} atualizarStatusTask={atualizarStatusTask} />
    </div>
  )
}