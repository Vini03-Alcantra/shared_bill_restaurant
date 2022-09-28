import {ICreateTableDTO} from "../dto/ICreateTable"

interface ITableRepository {
    create(data: ICreateTableDTO): Promise<void>;
}

export {ITableRepository}