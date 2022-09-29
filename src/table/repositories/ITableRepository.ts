import { Table } from "@prisma/client";
import {ICreateTableDTO} from "../dto/ICreateTable"

interface ITableRepository {
    create(data: ICreateTableDTO): Promise<void>;
    listTables(): Promise<Table[]>
}

export {ITableRepository}