import React from 'react'
import './styles.scss'
import { Task } from '../../interfaces/task.interface'

export const ListTask = (props: any) => {
  return (
    <div className="listTaskContainer">
      <div className="listTasks">
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Nome da Tarefa</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.taskList.map((item: Task, index: number) => (
              <tr key={index}>
                <td><input className="statusCheckbox" type="checkbox" checked={item.status} onChange={(event) => { props.atualizarStatusTask(index, event.target.checked) }} /></td>
                <td>{item.taskName}</td>
                <td>{item.taskDate}</td>
                <td>Editar / Apagar</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}