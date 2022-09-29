import {Router} from "express"

import {InsertTableController} from "../../../../table/useCases/InsertTable/InsertTableController"
import {ListTablesController} from "../../../../table/useCases/ListTables/ListTablesController"

const insertTableController = new InsertTableController()
const listTablesController = new ListTablesController()

const tableRouter = Router()

tableRouter.post("/", insertTableController.handle)
tableRouter.get("/", listTablesController.handle)

export {tableRouter}