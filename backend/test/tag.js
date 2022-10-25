let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should()

let server = require('../app')

chai.use(chaiHttp)

describe('Tags', () => {
    /**
     * Test GET Route
     */
    describe('GET /tag', () => {
        it('Should get all tags', (done) => {
            chai.request(server)
                .get('/tag')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.have.property('message')
                    res.body.message.should.be.a('array')
                    done()
                })
        })
    })

    /**
     * TEST Post Route
     */
    
     describe('POST /tag', () => {
        it('Should post a tags', (done) => {
            const tagBody = {
                tagname: 'test'
            }
            chai.request(server)
                .post('/tag')
                .send(tagBody)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.have.property('message')
                    res.body.message.should.have.property('tagname').eq(tagBody.tagname)
                    done()
                })
        })
    })
})
