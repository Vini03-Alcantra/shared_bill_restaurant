import {DatabaseTableRepository} from "../../infra/repositories/DatabaseTableRepository"
import { InsertTableUseCase } from "./InsertTableUseCase"

const databaseTableRepository = new DatabaseTableRepository()

const insertTableUseCase = new InsertTableUseCase(
    databaseTableRepository
)

export {insertTableUseCase}
