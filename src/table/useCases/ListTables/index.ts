import {DatabaseTableRepository} from "../../infra/repositories/DatabaseTableRepository"
import {ListTablesUseCase} from "./ListTablesUseCase"

const databaseTableRepository = new DatabaseTableRepository()

const listTablesUseCase = new ListTablesUseCase(databaseTableRepository)

export {listTablesUseCase}

