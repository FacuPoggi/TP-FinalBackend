import { Router } from "express"

const routerLogger = Router();

routerLogger.get("/fatal", (req, res) => {
    req.logger.fatal('Esto es un error FATAL, no existe el producto que desea')
    res.send("Error FATAL!")
})
routerLogger.get("/error", (req, res) => {
    req.logger.error('Esto es un error, no se encuentra la descripción del producto')
    res.send("Error!")
})
routerLogger.get("/warning", (req, res) => {
    req.logger.warning('Esto es un WARNING, no se encontro el producto deseado')
    res.send("Warning")
})

routerLogger.get("/debug", (req, res) => {
    req.logger.debug('Esto es informacion del Debug, correcto funcionamiento')
    res.send("Debug!")
})

export default routerLogger