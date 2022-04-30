const request = require("supertest")("http://localhost:3001");
const assert = require("chai").assert;

describe("items API", () => {
    it("GET /items", () => {
        return request
            .get("/items")
            .expect(200)
            .then((res) => {
                assert.isNotEmpty(res.body);
            });
    });
    it("GET /items/1", () => {
        return request
            .get("/items/1")
            .expect(200)
            .then((res) => {
                assert.equal(res.body.title, "Plugin 1");
            });
    });
    it("PATCH /items/1", () => {
        return request
            .patch("/items/1")
            .send({ isAllowed: false })
            .expect(200)
            .then((res) => {
                assert.equal(res.body.isAllowed, false);
            });
    });
});
