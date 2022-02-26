// action = {
//   type: 'CREATE EVENT',
//   title: '2020東京オリンピックのお知らせ',
//   body: '2020年に東京でオリンピックを開催します！つきましては・・・'
// }
// state = []
// state = [
//   {id:1, title: 'タイトル1', body: 'ボディー1'},
//   {id:2, title: 'タイトル2', body: 'ボディー2'},
//   {id:3, title: 'タイトル2', body: 'ボディー3'},
// ]



const events = (state = [],action) => {
  switch(action.type){
    case 'CREATE_EVENT':
      return state
    case 'DELETE_EVENT':
      return state
    case 'DELETE_ALL_EVENTS': 
      return []
    default:
      return state

  }
}

export default events