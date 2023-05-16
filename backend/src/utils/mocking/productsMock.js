import { faker } from '@faker-js/faker';
import { insertProducts } from '../../services/productService.js';


export const fakeProductMock = async (req, res, next) => {

    const products = []
    const createRandomProducts = () => {

        return {
            title: faker.commerce.productName(),
            description: faker.commerce.productMaterial(),
            code: faker.string.uuid(),
            price: faker.commerce.price({ min: 1000, max: 400000 }),
            status: true,
            stock: 40,
            category: faker.commerce.product(),
            thumbnails: []
        };
    }
    for (let i = 0; i < 100; i++) {
        products.push(createRandomProducts());
    }
    await insertProducts(products);
    res.status(200).send({
        message: "Productos agregados correctamente",
        payload: products
    })

}