import React, { useState } from 'react'
import './styles.scss'

type Props = {
  cadastrarTask: (taskDate: Date, taskName: string) => void
}

export const AddTask = ({ cadastrarTask }: Props) => {

  const [taskDate, setTaskDate] = useState<any>(``)
  const [taskName, setTaskName] = useState<string>(``)

  return (
    <div className="container">
      <div>
        <input className="inputDate" type="date" placeholder="dd-mm-yyyy" onChange={(event) => { setTaskDate(event.target.value) }} />
      </div>
      <div>
        <input className="inputTask" type="text" placeholder="Nome da tarefa" onChange={(event) => { setTaskName(event.target.value) }} />
      </div>
      <div>
        <button className="btnSubmit" onClick={() => { cadastrarTask(taskDate, taskName) }}>Cadastrar Tarefa</button>
      </div>
    </div>
  )
}