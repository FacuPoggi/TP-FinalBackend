import chai from 'chai';
import mongoose from 'mongoose';
import supertest from 'supertest';

const expect = chai.expect

const requester = supertest('http://localhost:4000') //Configuracion de la ruta inicial de mi app para testear

await mongoose.connect(URLMONGODB)

describe('Testing de la aplicación E-Commerce', () => {
    // Testing de productos

    describe('Testing de las rutas de productos', () => {
        //POST
        /* it('Ruta: api/products con el metodo POST', async function () {
            //_body, StatusCode, Ok(true o false)
            const newProduct = {
                //Datos del nuevo producto
                title: 'Mouse Razer Deathadder v2',
                description: 'Mouse marca Razer',
                code: 'aaam',
                price: 3000,
                stock: 32,
                thumbnails: [],
                category: 'Gaming'
            }

            const {statusCode, _body, ok} = await requester.post('/api/product').send(newProduct) //requester.metodo(concatenacion de rutas)
            console.log(statusCode, _body, ok)
        })

        //GET
        it('Ruta: api/products con el metodo GET', async function () {

            const {statusCode, _body, ok} = await requester.get('/api/product')
            console.log(statusCode)
            console.log(_body)
            console.log(ok)
        })

        //PUT
        it('Ruta: api/products con el metodo PUT', async function () {

            const _id = "6488f6f8fb9e61dc114dba23"
            const updateProduct = {
                //Modificacion de datos del producto
                title: 'Mouse Razer Deathadder v2',
                description: 'Mouse marca Razer, de tipo gaming con dos botones a la izquierda',
                code: 'aaam',
                price: 3000,
                stock: 32,
                thumbnails: [],
                category: 'Gaming',
            }

            const {statusCode, _body, ok} = await requester.put(`/api/product/${_id}`).send(updateProduct)
            console.log(statusCode)
            console.log(_body)
            console.log(ok)
        })

        //DELETE
        it('Ruta: api/products con el metodo DELETE', async function () {

            const _id = "6488f6f8fb9e61dc114dba23"

            const { statusCode, _body, ok } = await requester.delete(`/api/product/${_id}`)
            console.log(statusCode)
            console.log(_body)
            console.log(ok)
        })*/

        //Testing de Sesiones

        describe('Testin de la ruta de sessions', () => {

            //POST
            let cookie = ""

            it('Ruta api/sessions/register con el metodo POST', async function () {
                const newUser = {
                    first_name: "Esteban",
                    last_name: "Estevanez",
                    email: "Esteban@Esteban.com",
                    age: 55,
                    rol: "User",
                    password: "@ff23daf21@",
                    idCart: "22aa4a1232123aaf2bfa"
                }

                const { _body } = await requester.post('/api/auth/register').send(newUser)

                expect(_body).to.be.ok //Analiza si el status es 200

            })

            //GET
            it("Ruta: api/sessions/current con el metodo GET", async function () {
                //.set() setear valores como si tratara de las cookies del navegador
                const { _body } = await requester.get('/api/sessions/current').set('Cookie', [`${cookie.name}=${cookie.value}`])

                console.log(_body.payload)

                expect(_body.payload.email).to.be.equal("Esteban@Esteban.com")
            })

        })



    })
})