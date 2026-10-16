const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  test("GET /cafes devuelve un arreglo", async () => {
    const response = await request(server).get("/cafes");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
    expect(typeof response.body[0]).toBe("object");
  });

  test("DELETE /cafes/:id devuelve 404 si el café no existe", async () => {
    const response = await request(server)
      .delete("/cafes/999")
      .set("Authorization", "token-de-prueba");

    expect(response.statusCode).toBe(404);
  });

  test("POST /cafes agrega un nuevo café y devuelve 201", async () => {
    const nuevoCafe = {
      id: 99,
      nombre: "Latte",
    };

    const response = await request(server).post("/cafes").send(nuevoCafe);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(
      expect.arrayContaining([expect.objectContaining(nuevoCafe)]),
    );
  });

  test("PUT /cafes/:id devuelve 400 si los IDs no coinciden", async () => {
    const cafeActualizado = {
      id: 2,
      nombre: "Cafe actualizado",
    };

    const response = await request(server)
      .put("/cafes/1")
      .send(cafeActualizado);

    expect(response.statusCode).toBe(400);
  });
});
