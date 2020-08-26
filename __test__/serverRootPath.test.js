const request = require("supertest");
const app = require("../src/server/express_app.js");


test("Test the root path", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
});
