import { Router } from "express";
import { getProducts, getProduct, addProducts, updateProduct, deleteProduct } from "../controllers/productController.js";
import { roleVerification } from "../utils/errorMessages.js";

const routerProduct = Router();

routerProduct.get('/',getProducts); //Comentar esta linea en caso de querer ver los productos en el frontend
routerProduct.get('/:pid',roleVerification(["Admin"]), getProduct);
routerProduct.post('/', addProducts);
routerProduct.put('/:pid',roleVerification(["Admin"]), updateProduct);
routerProduct.delete('/:pid',roleVerification(["Admin"]), deleteProduct); //Solo al admin se le permite realizar esto.

export default routerProduct