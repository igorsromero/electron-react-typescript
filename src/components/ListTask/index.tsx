import React, { useEffect, useState } from 'react'
import './styles.scss'
import { listarTodos } from 'src/database'

export const ListTask = (props: any) => {

  const [taskList, setTaskList] = useState<any>([])

  useEffect(() => {
    listarTodos().then((dados) => {
      setTaskList({ ...dados })
    })
  }, [])

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
            {Object.entries(taskList).map((item: any) => (
              <tr key={item[1]._id}>
                <td><input className="statusCheckbox" type="checkbox" checked={item[1].status} onChange={(event) => { props.atualizarStatusTask(item[1]._id, event.target.checked) }} /></td>
                <td>{item[1].taskName}</td>
                <td>{item[1].taskDate}</td>
                <td>Editar / Apagar</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}