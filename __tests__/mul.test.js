const mul = require("../mul/task1")

describe("Mul Function", () => {
    test("given 6 and 2 returns 12", () => {
        expect(mul(6, 2)).toEqual(12)
    });
})