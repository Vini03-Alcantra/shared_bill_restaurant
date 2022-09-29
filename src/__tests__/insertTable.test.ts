import { InsertTableUseCase } from "../table/useCases/InsertTable/InsertTableUseCase"
import { ListTablesUseCase } from "../table/useCases/ListTables/ListTablesUseCase"
import {ITableRepository} from "../table/repositories/ITableRepository"
import { ICreateTableDTO } from "../table/dto/ICreateTable";

const tableDatabaseMock: jest.Mocked<ITableRepository> = {
    create: jest.fn(),
    listTables: jest.fn()
}

const body: ICreateTableDTO = {
    number: 43,
    vip: false
}

const tables = [
    {
        id: "14",
        number: 45,
        vip: false,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: "12",
        number: 35,
        vip: false,
        created_at: new Date(),
        updated_at: new Date()
    }
]

tableDatabaseMock.listTables.mockResolvedValue(tables)

describe("DatabaseTableRepository", () => {
    it("Should Insert Table in the database", async () => {
        const sut = new InsertTableUseCase(tableDatabaseMock)
        
        await sut.execute(body)
        expect(tableDatabaseMock.create).toHaveBeenCalledTimes(1)
        expect(tableDatabaseMock.create).toHaveBeenCalledWith(body)
    })

    it('Should throw error if CreateUserRepo.create throws', async () => {
        const sut = new InsertTableUseCase(tableDatabaseMock)        
        tableDatabaseMock.create.mockRejectedValueOnce(new Error('Mensagem'));
        let error: Error = Error();

        try {
            await sut.execute(body)
        } catch (err) {
            if (err instanceof Error) {
                error = err
            }
            err
        }

        expect(error.name).toBe('Error')
        expect(error.message).toBe('Mensagem')
    })

    it("Should call ListTable method only once", async () => {
        const sut = new ListTablesUseCase(tableDatabaseMock)
        await sut.execute()
        expect(tableDatabaseMock.listTables).toHaveBeenCalledTimes(1)
    })

    it("Should return a list of users", async () => {
        const sut = new ListTablesUseCase(tableDatabaseMock)
        const tablesList = await sut.execute()
        
        expect(tablesList).toEqual(tables)
    })


})