import { InsertTableUseCase } from "../table/useCases/InsertTable/InsertTableUseCase"
import {ITableRepository} from "../table/repositories/ITableRepository"
import { ICreateTableDTO } from "../table/dto/ICreateTable";

const tableDatabaseMock: jest.Mocked<ITableRepository> = {
    create: jest.fn()
}

const body: ICreateTableDTO = {
    number: 43,
    vip: false
}

// tableDatabaseMock.create.mockResolvedValue(body)

describe("DatabaseTableRepository", () => {
    it("Should Insert Table in the database", async () => {
        const sut = new InsertTableUseCase(tableDatabaseMock)

        await sut.execute(body)

        expect(tableDatabaseMock.create).toHaveBeenCalledTimes(1)
        expect(tableDatabaseMock.create).toHaveBeenCalledWith(body)
    })

    // it("Should return a user if everything is OK", async () => {
    //     const sut = new InsertTableUseCase(tableDatabaseMock)
    //     const table = await sut.execute(body)
    //     expect(table).toEqual(body)
    // })

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
})