const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
   // con esto tengo una sesion inicializada dentro de un entorno de testing

   describe("Route: GET rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
        const response = await session(app).get("/rickandmorty/character/:id")
        expect(response.statusCode).toBe(200)
    });
   });
