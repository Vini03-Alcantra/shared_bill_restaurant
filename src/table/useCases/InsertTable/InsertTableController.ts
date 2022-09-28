import { Request, Response } from "express";
import { insertTableUseCase } from "./index"

class InsertTableController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const {number, vip} = req.body 
            
            await insertTableUseCase.execute({number, vip})
            return res.status(204)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

export {InsertTableController}