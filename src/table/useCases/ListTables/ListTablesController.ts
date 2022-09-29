import { Request, Response } from "express"; 
import { listTablesUseCase } from "./index"
class ListTablesController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const listTables = await listTablesUseCase.execute()
            return res.status(200).json(listTables) 
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

export {ListTablesController}