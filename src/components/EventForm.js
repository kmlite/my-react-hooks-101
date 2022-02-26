import React,{ useState } from "react"

const EventForm = ({state, dispatch}) => {
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

  const deleteAllEvents = e =>{
    e.preventDefault()
    const result = window.confirm('すべてのイベントを本当に削除しても良いですが？')
    if (!result) return

    dispatch({
      type: 'DELETE_ALL_EVENTS'
    })
    
  }

  const unCreatable = (title === '' || body === '')

  return(
    <>
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
        <button type="button" className="btn btn-primary mb-2" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button type="button" className="btn btn-danger mb-2 ms-2" onClick={deleteAllEvents} disabled={state.length === 0}>すべてのイベントを削除する</button>
      </form>

    </>
  )
}

export default EventForm