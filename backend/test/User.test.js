//CLASE 40
//UTILIZACION DE MOCHA

import mongoose from "mongoose";
import userModel from "../src/models/MongoDB/userModel.js"
import Assert, { strictEqual } from "assert"

const assert = Assert.strict

await mongoose.connect("mongodb+srv://facundop23:coderhouse@cluster0.jrgdtix.mongodb.net/?retryWrites=true&w=majority")

describe("Test de consulta a todos los usuarios", () => {
    // Previo a arrancar todos los test
    before(function () {
        console.log("Arrancando Test")
    })

    //Previo a arrancar un test
    beforeEach(function () {
        this.timeout(5000) // Por defecto viene en 2000 ms
    })

    it("Test para obtener todos los usuarios de mi BDD", async function () {
        //Contexto propio del Test (tengo un scope propio)
        
        const users = await userModel.find()
        
        assert.strictEqual(Array.isArray(users), true) // Que sea igual a un array
        
    })

    /* it("Test para crear un usuario en mi base de datos", async function () {
        //Contexto propio del Test (tengo un scope propio)
        
        const newUser ={
            first_name: "Pepe",
            last_name: "Perez",
            email: "pepe@pepe.com",
            password: "@1at3@",
            idCart: "642aaf0611d047a95d308d01",
            age: "20",
            rol: "User",
        }

        const resultado = await userModel.create(newUser)
        
        assert.ok(resultado._id) // resultado._id devuelve un -> id || error o undefined o null
        
    })

    it("Eliminar usuario generado", async function(){
        const email = "pepe@pepe.com"

        const user = await userModel.findOneAndDelete({email: email})
        assert.strictEqual(typeof user, 'object')
    }) */
})

