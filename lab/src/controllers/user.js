const db = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters - validate required fields
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    if(!user.firstname || !user.lastname)
      return callback(new Error("Firstname and lastname are required"), null)
    
    // Sanitize user input
    const userObj = {
      firstname: user.firstname.trim(),
      lastname: user.lastname.trim(),
    }
    
    // Save to DB
    // TODO check if user already exists
    db.hmset(user.username, userObj, (err, res) => {
      if (err) return callback(err, null)
      callback(null, res) // Return callback
    })
  },
  get: (username, callback) => {
    // Check parameters
    if(!username)
      return callback(new Error("Wrong username parameter"), null)

    // Fetch user from DB
    db.hgetall(username, (err, res) => {
      if (err) return callback(err, null)
      if (!res) return callback(new Error('User not found'), null)
      callback(null, res)
    })
  }
}
