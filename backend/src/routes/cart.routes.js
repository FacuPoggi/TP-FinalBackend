import { Router } from "express";
import { getCart, updateCartProducts, addProductToCart, updateProductQuantity, deleteAllProductsFromCart, deleteOneProductFromCart } from "../controllers/cartController.js";
import { generateTicketAndSave } from "../controllers/ticketController.js";
import { roleVerification } from "../utils/errorMessages.js";
const routerCarts = Router();


routerCarts.get('/',roleVerification(["Admin","Usuario"]), getCart); //Solamente el admin puede verlo, pero no puede modificar nada
routerCarts.put('/',roleVerification(["Usuario"]), updateCartProducts); //Unicamente el usuario puede manejar su carrito
routerCarts.post('/product/:pid',roleVerification(["Usuario"]), addProductToCart); 
routerCarts.put('/product/:pid',roleVerification(["Usuario"]), updateProductQuantity);
routerCarts.delete('/',roleVerification(["Usuario"]), deleteAllProductsFromCart);
routerCarts.delete('/product/:pid',roleVerification(["Usuario"]), deleteOneProductFromCart);
routerCarts.post('/purchase',roleVerification(["Usuario"]), generateTicketAndSave)
export default routerCarts