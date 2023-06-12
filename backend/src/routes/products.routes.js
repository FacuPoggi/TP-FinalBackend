import { Router } from "express";
import { getProducts, getProduct, addProducts, updateProduct, deleteProduct } from "../controllers/productController.js";
import { roleVerification } from "../utils/errorMessages.js";

const routerProduct = Router();

routerProduct.get('/', getProducts); // Este se saca para poder ver los productos en el front
routerProduct.get('/:pid', getProduct);
routerProduct.post('/', addProducts);
routerProduct.put('/:pid', updateProduct);
routerProduct.delete('/:pid', deleteProduct); 
// ,roleVerification(["Admin"])
export default routerProduct