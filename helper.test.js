const { mostFrequentOf, medianValueOf, meanValueOf } = require('./helper.js')

describe("test Helper functions", () => {
    test('mean of an array', () => {
        const res = meanValueOf(["1", "2", "3", "4"])
        expect(res).toEqual(2.5)
    })
    test('median of an array', () => {
        const res = medianValueOf(["1", "2", "3", "4"])
        expect(res).toEqual(2.5)
    })
    test('mode of an array', () => {
        const res = mostFrequentOf(["1", "2", "3", "4", "1"])
        expect(res).toEqual("1")
    })
})