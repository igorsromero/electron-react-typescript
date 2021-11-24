import React, { useState } from 'react'
import './styles.scss'

export const AddTask = ({ cadastrarTask }: any) => {

  const [taskDate, setTaskDate] = useState<any>(``)
  const [taskName, setTaskName] = useState<string>(``)

  const handleSubmit = async (taskDate: any, taskName: string) => {

    if (taskDate !== `` && taskName !== ``) {

      const newDate = taskDate.split(`-`)
      taskDate = `${newDate[2]}-${newDate[1]}-${newDate[0]}`

      await cadastrarTask(taskDate, taskName)
      setTaskDate(``)
      setTaskName(``)
    }
  }

  return (
    <div className="container">
      <div>
        <input className="inputDate" type="date" placeholder="dd-mm-yyyy" value={taskDate} onChange={(event) => { setTaskDate(event.target.value) }} />
      </div>
      <div>
        <input className="inputTask" type="text" placeholder="Nome da tarefa" value={taskName} onChange={(event) => { setTaskName(event.target.value) }} />
      </div>
      <div>
        <button className="btnSubmit" onClick={() => handleSubmit(taskDate, taskName)}>Cadastrar Tarefa</button>
      </div>
    </div>
  )
}