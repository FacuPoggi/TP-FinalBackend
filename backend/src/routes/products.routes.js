import { Router } from "express";
import { getProducts, getProduct, addProducts, updateProduct, deleteProduct } from "../controllers/productController.js";
import { roleVerification } from "../utils/errorMessages.js";

const routerProduct = Router();

routerProduct.get('/',getProducts); //Este se saca para poder ver los products por el front
routerProduct.get('/:pid', getProduct);
routerProduct.post('/',roleVerification(["Admin","Premium"]), addProducts);// Para esta entrega solamente el PREMIUM puede generar productos
routerProduct.put('/:pid',roleVerification(["Admin","Premium"]), updateProduct);
routerProduct.delete('/:pid',roleVerification(["Admin","Premium"]), deleteProduct); //Unicamente el admin puede hacer esto.

export default routerProduct