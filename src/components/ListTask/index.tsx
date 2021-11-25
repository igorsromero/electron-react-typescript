import React from 'react'
import './styles.scss'
import { FaEdit, FaTrashAlt } from "react-icons/fa"

export const ListTask = ({ taskList, handleUpdateStatus, handleClick }: any) => {

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
                <td><input className="statusCheckbox" type="checkbox" checked={item[1].status} onChange={(event) => { handleUpdateStatus(item[1]._id, event.target.checked) }} /></td>
                <td className={((item[1].status === true) ? `itsDone` : `null`)}>{item[1].taskName}</td>
                <td className={(item[1].status === true) ? `itsDone` : `null`}>{item[1].taskDate}</td>
                <td>
                  <FaEdit className="cursorPointer" onClick={() => handleClick(item[1]._id, `edit`)} color="blue" />
                  <FaTrashAlt className="cursorPointer" onClick={() => handleClick(item[1]._id, `delete`)} color="#9e202e" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}