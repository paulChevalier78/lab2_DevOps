const { expect } = require('chai')
const userController = require('../src/controllers/user')
const db = require('../src/dbClient')

describe('User', () => {
  
  beforeEach(() => {
    // Clean DB before each test
    db.flushdb()
  })

  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    // it('avoid creating an existing user', (done)=> {
    //   // TODO create this test
    //   // Warning: the user already exists
    //   done()
    // })
  })

  // TODO Create test for the get method
  describe('Get', ()=> {
    
    it('get a user by username', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      // 1. Create the user first
      userController.create(user, (errCreate, resCreate) => {
        expect(errCreate).to.be.equal(null)
        expect(resCreate).to.be.equal('OK')
        // 2. Then try to get it
        userController.get(user.username, (err, result) => {
          expect(err).to.be.equal(null)
          expect(result).to.not.equal(null)
          expect(result.firstname).to.equal(user.firstname)
          expect(result.lastname).to.equal(user.lastname)
          done()
        })
      })
    })

    it('cannot get a user when it does not exist', (done) => {
      userController.get('this_user_does_not_exist', (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

  })
})
