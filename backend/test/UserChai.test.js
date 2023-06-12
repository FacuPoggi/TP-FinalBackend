//CLASE 40
//CHAI
import chai from 'chai'
import mongoose from 'mongoose'
import userModel from '../src/models/MongoDB/userModel.js'


await mongoose.connect(process.env.URLMONGODB)

const expect = chai.expect

describe("Test con chai para users", () => {
    before(function(){
        console.log("Arrancando test con chai")
    })

    beforeEach(function(){
        this.timeout(5000)
    })

    it("Consultar todos los usuarios de mi BDD con chai", async function(){
        const users = await userModel.find()
        //expect(users).deep.equal([])
        //expect(users).to.be.deep.equal([]) //Revisa si el array es vacio
        expect(Array.isArray(users)).to.be.ok //Revisa si es V o F
    })
})