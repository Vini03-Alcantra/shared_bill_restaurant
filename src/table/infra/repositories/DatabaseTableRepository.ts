import { PrismaClient } from "@prisma/client"
import {ICreateTableDTO} from "../../dto/ICreateTable"
import { ITableRepository } from "../../repositories/ITableRepository"

const prisma = new PrismaClient()

class DatabaseTableRepository implements ITableRepository {
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
        }
    }

}

export {DatabaseTableRepository}