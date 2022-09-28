import { InsertTableUseCase } from "../table/useCases/InsertTable/InsertTableUseCase"
import {ITableRepository} from "../table/repositories/ITableRepository"
import { ICreateTableDTO } from "../table/dto/ICreateTable";


describe("DatabaseTableRepository", () => {
    const tableDatabaseMock: jest.Mocked<ITableRepository> = {
        create: jest.fn()
    }
    
    it("Inserting Table in the database", async () => {
        const sut = new InsertTableUseCase(tableDatabaseMock)
        const body: ICreateTableDTO = {
            number: 43,
            vip: false
        }

        await sut.execute(body)

        expect(tableDatabaseMock.create).toHaveBeenCalledTimes(1)
    })

})