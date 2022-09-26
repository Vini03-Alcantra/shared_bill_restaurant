import { ITableRepository } from "../../repositories/ITableRepository";
import { ICreateTableDTO } from "../../dto/ICreateTable"

class InsertTableUseCase {
    constructor(
        private tableRepository: ITableRepository
    ) {}

    async execute({number, vip}: ICreateTableDTO) {
        return await this.tableRepository.create({number, vip})
    }
}

export {InsertTableUseCase}