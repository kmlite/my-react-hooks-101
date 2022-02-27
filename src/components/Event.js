import React from "react"
import {DELETE_EVENT} from "../actions"

const Event  = ({dispatch, event} ) => {
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(ID:${id})を本当に削除しても良いですか`)
    if (!result) return
    dispatch({ type: DELETE_EVENT, id })
  }
  return (
    <tr>
      <th>{id}</th>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}
export default Event
