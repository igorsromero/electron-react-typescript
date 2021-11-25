import React, { useState } from 'react'
import { findOneTask } from '../../controller/task.controller'
import './styles.scss'

export const AddTask = ({ tempId, setTempId, handleCreateTask, handleUpdateTask }: any) => {

  const [taskDate, setTaskDate] = useState<any>(``)
  const [taskName, setTaskName] = useState<string>(``)
  const [taskStatus, setTaskStatus] = useState<boolean>(false)
  const [taskId, setTaskId] = useState<string>(``)

  const convertDate = (taskDate: string) => {
    const newDate = taskDate.split(`-`)
    return `${newDate[2]}-${newDate[1]}-${newDate[0]}`
  }

  const listTask = (id: string) => {
    findOneTask(tempId).then(data => {
      setTaskName(data!.taskName)
      setTaskDate(convertDate(data!.taskDate))
      setTaskStatus(data!.status)
      setTaskId(tempId)
      setTempId(``)
    })
  }

  const handleSubmit = async (taskDate: any, taskName: string) => {
    if (taskDate !== `` && taskName !== ``) {
      if (taskId === ``) {
        taskDate = convertDate(taskDate)
        await handleCreateTask(taskStatus, taskDate, taskName)
        setTaskDate(``)
        setTaskName(``)
        setTaskStatus(false)
      } else {
        taskDate = convertDate(taskDate)
        await handleUpdateTask(taskId, taskStatus, taskDate, taskName)
        setTaskId(``)
        setTaskDate(``)
        setTaskName(``)
        setTaskStatus(false)
      }
    }
  }

  return (
    <div className="container">
      {tempId !== `` ? (listTask(tempId)) : setTempId(``)}
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