import React,{ useReducer, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import reducer from '../reducers/index'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="mb-2">
          <label htmlFor="formEventTitle" className="form-label">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="mb-2">
            <label htmlFor="formEventBody" className="form-label">ボディ</label>
            <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary mb-2" onClick={addEvent}>イベントを作成する</button>
        <button type="button" className="btn btn-danger mb-2 ms-2">すべてのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
