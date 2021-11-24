import React from 'react'
import './styles.scss'

export const ListTask = ({ taskList, atualizarStatusTask }: any) => {

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
                <td><input className="statusCheckbox" type="checkbox" checked={item[1].status} onChange={(event) => { atualizarStatusTask(item[1]._id, event.target.checked) }} /></td>
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