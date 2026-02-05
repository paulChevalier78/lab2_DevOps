const app = require('../src/index')
const chai = require('chai')
const chaiHttp = require('chai-http')
const db = require('../src/dbClient')

chai.use(chaiHttp)

describe('User REST API', () => {
  
    beforeEach(() => {
      // Clean DB before each test
      db.flushdb()
    })
    
    after(() => {
      app.close()
      db.quit()
    })

  describe('POST /user', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(201)
          chai.expect(res.body.status).to.equal('success')
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
           throw err
        })
    })
    
    it('pass wrong parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(400)
          chai.expect(res.body.status).to.equal('error')
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
           throw err
        })
    })
  })

  // describe('GET /user', ()=> {
  describe('GET /user', ()=> {
    it('successfully get user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      // Create the user first
      chai.request(app)
        .post('/user')
        .send(user)
        .then(() => {
          // Then request it
          chai.request(app)
            .get('/user/' + user.username)
            .then((res) => {
              chai.expect(res).to.have.status(200)
              chai.expect(res.body.status).to.equal('success')
              chai.expect(res.body.msg).to.be.an('object')
              chai.expect(res.body.msg.firstname).to.equal(user.firstname)
              chai.expect(res.body.msg.lastname).to.equal(user.lastname)
              done()
            })
            .catch((err) => { throw err })
        })
        .catch((err) => { throw err })
    })

    it('cannot get a user when it does not exist', (done) => {
      chai.request(app)
        .get('/user/this_user_does_not_exist')
        .then((res) => {
          chai.expect(res).to.have.status(404)
          chai.expect(res.body.status).to.equal('error')
          done()
        })
        .catch((err) => { throw err })
    })
  })
})
