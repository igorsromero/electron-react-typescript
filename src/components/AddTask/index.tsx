import React, { useState } from 'react'
import { listarUm } from 'src/database'
import './styles.scss'

export const AddTask = ({ cadastrarTask, tempId, setTempId, alterarTask }: any) => {

  const [taskDate, setTaskDate] = useState<any>(``)
  const [taskName, setTaskName] = useState<string>(``)
  const [taskStatus, setTaskStatus] = useState<boolean>(false)
  const [taskId, setTaskId] = useState<string>(``)

  const listarTask = (id: string) => {
    listarUm(tempId).then(dado => {
      setTaskName(dado!.taskName)
      setTaskDate(convertDate(dado!.taskDate))
      setTaskStatus(dado!.status)
      setTaskId(tempId)
      setTempId(``)
    })
  }

  const convertDate = (taskDate: string) => {
    const newDate = taskDate.split(`-`)
    return `${newDate[2]}-${newDate[1]}-${newDate[0]}`
  }

  const handleSubmit = async (taskDate: any, taskName: string) => {
    if (taskDate !== `` && taskName !== ``) {
      if (taskId === ``) {
        taskDate = convertDate(taskDate)
        await cadastrarTask(taskStatus, taskDate, taskName)
        setTaskDate(``)
        setTaskName(``)
        setTaskStatus(false)
      } else {
        taskDate = convertDate(taskDate)
        await alterarTask(taskId, taskStatus, taskDate, taskName)
        setTaskId(``)
        setTaskDate(``)
        setTaskName(``)
        setTaskStatus(false)
      }
    }
  }

  return (
    <div className="container">
      {tempId !== `` ? (listarTask(tempId)) : setTempId(``)}
      <div>
        <input className="inputDate" type="date" placeholder="dd-mm-yyyy" value={taskDate} onChange={(event) => { setTaskDate(event.target.value) }} />
      </div>
      <div>
        <input className="inputTask" type="text" placeholder="Nome da tarefa" value={taskName} onChange={(event) => { setTaskName(event.target.value) }} />
      </div>
      <div>
        <button className="btnSubmit" onClick={() => handleSubmit(taskDate, taskName)}>{taskId === `` ? `Cadastrar Tarefa` : `Atualizar Tarefa`}</button>
      </div>
    </div>
  )
}