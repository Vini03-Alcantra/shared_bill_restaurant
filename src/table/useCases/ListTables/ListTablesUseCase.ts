import { ITableRepository } from "../../repositories/ITableRepository";

class ListTablesUseCase {
    constructor(
        private tableRepository: ITableRepository
    ) {}

    async execute() {
        const listTables = await this.tableRepository.listTables()
        return listTables
    }
}

export {ListTablesUseCase}