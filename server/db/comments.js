const defaultConn = require('./connection')

const getComments = (testConn) => {
  const db = testConn || defaultConn
  return db('comment')
    .select()
}

const getComment = (id, testConn) => {
  const db = testConn || defaultConn
  return db('comment')
    .where('id', id)
    .first()
}

const addComment = (r, testConn) => {
  const db = testConn || defaultConn
  // first promise
  const insertIntoComment = db('comment')
    .insert({
      recipe_id: r.recipe_id,
      comment: r.comment,
      user_id: r.user_id
    })
    .then(id => getComment(id[0]))
    // second promise
    // combining them here
  return Promise.all([insertIntoComment])
    .then((result) => {
      console.log(result)
      return result[0]
    })
}

module.exports = {
  getComments,
  getComment,
  addComment
}
