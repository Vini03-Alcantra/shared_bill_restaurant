import { PrismaClient } from "@prisma/client"
import {ICreateTableDTO} from "../dto/ICreateTable"
import { ITableRepository } from "../repositories/ITableRepository"

const prisma = new PrismaClient()

class TableRepository implements ITableRepository {
    async create({number, vip}: ICreateTableDTO): Promise<void> {
        try {
            await prisma.table.create({
                data: {
                    number,
                    vip
                }
            })
        } catch (err) {
            console.error(err)
            throw new Error(err)
        }
    }

}

export {TableRepository}