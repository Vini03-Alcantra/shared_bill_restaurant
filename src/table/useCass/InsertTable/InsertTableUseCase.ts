import { ITableRepository } from "../../repositories/ITableRepository";
import { ICreateTableDTO } from "../../dto/ICreateTable"

class InsertTableUseCase {
    constructor(
        private tableRepository: ITableRepository
    ) {}

    async execute({number, vip}: ICreateTableDTO) {
        let index = 0
        const createTableDTO: ICreateTableDTO[] = [] 
        createTableDTO[0].number = number;
        createTableDTO[0].vip = vip;
        index++;
    }
}

export {InsertTableUseCase}