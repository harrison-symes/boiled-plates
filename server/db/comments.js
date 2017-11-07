const defaultConn = require('./connection')

const getComments = (testConn) => {
  const db = testConn || defaultConn
  return db('comments')
    .select()
}

const getComment = (id, testConn) => {
  const db = testConn || defaultConn
  return db('comments')
    .where('id', id)
    .first()
}

const addComment = (r, testConn) => {
  const db = testConn || defaultConn
  // first promise
  return db('comments')
    .insert({
      recipe_id: r.recipe_id,
      comments: r.comment,
      user_id: r.user_id
    })
    .then(id => getComment(id[0]))
    .catch(err => console.log(err))
    // second promise
    // combining them here
  // return Promise.all([insertIntoComment])
  //   .then((result) => {
  //     console.log(result)
  //     return result[0]
  //   })
}

module.exports = {
  getComments,
  getComment,
  addComment
}

// .join('recipes', 'comments.recipe_id', 'recipes.recipe.id')
//     .join('users', 'comments.user_id', 'users.user.id')
//     .where({'users.user.id': id, 'recipes.recipe.id': id
//     })
