import request from '../utils/api'

const ADD_COMMENT = 'ADD_COMMENT'
const RECEIVE_NEW_COMMENT = 'RECEIVE_NEW_COMMENT'

export const addComment = () => {
  return {
    type: 'ADD_COMMENT'
  }
}

export const receiveNewComment = (comment) => {
  return {
    type: 'RECEIVE_NEW_COMMENT',
    comment
  }
}

export function addNewComment (comment) {
  return (dispatch) => {
    console.log({comment})
    request('post', 'comments', {comment})
      .then(res => {
        dispatch(receiveNewComment(res.body))
      })
  }
}
