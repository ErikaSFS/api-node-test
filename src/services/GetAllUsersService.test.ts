import { getConnection } from 'typeorm';
import  createConnection  from '../database';
import {  GetAllUserService } from './GetAllUserService';
import { FakeData } from '../utils/FakeData';


describe('GetAllUserService', () => {
     beforeAll(async () => {
         const connection = await createConnection();
         await connection.runMigrations

     })
        afterAll(async () =>{
            const connection = getConnection();
            await connection.query('DELETE FROM usuarios')
            await connection.close()
        })

        const fakeData = new FakeData();


        it('Deve retornar todod os usuarios cadastrados', async () => {
           await fakeData.execute()

        await createUserService.execute({
            id:uuid(),
            nome: 'Algum usuario',
            email: 'algumusr@gmail.com'

        })

        await createUserService.execute({
            id:uuid(),
            nome: 'outro usuario',
            email: ''

        })
        const expectedResponse = [
            {
                nome: 'Algum usuario',
                email: 'algumusr@gmail.com'
            },
            {
                nome: 'outro usuario',
                email: ''
            }
        ]
            const getAllUserService = new GetAllUserService();
            const result = await getAllUserService.execute();

            expect(result).toMatchObject(expectedResponse)

        })
    })
