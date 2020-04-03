import request from "supertest";
import { app } from "../../app";
import { connection } from "../../database/connection";

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });

  it("Shoud be able to create a new Ong", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APAE",
        email: "apae@gmail.com",
        whatsapp: "11123456789",
        city: "São Paulo",
        uf: "SP"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
