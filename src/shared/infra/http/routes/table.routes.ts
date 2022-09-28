import {Router} from "express"

import {InsertTableController} from "../../../../table/useCases/InsertTable/InsertTableController"

const insertTableController = new InsertTableController()
const tableRouter = Router()

tableRouter.post("/", insertTableController.handle)

export {tableRouter}