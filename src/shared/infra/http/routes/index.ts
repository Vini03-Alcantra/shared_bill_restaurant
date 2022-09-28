import { Router } from "express";
import { tableRouter } from "./table.routes"

const router = Router()

router.use("/table", tableRouter)
router.get("/", (req, res) => {
    res.json({"msg": "Hello"})
})
export {router}