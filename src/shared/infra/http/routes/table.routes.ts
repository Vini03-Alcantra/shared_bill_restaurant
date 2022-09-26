import {Router} from "express"

import {InsertTableController} from "../../../../table/useCass/InsertTable/InsertTableController"

const insertTableController = new InsertTableController()
const tableRouter = Router()

tableRouter.post("/", insertTableController.handle)

export {tableRouter}