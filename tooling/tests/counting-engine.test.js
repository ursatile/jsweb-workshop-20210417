import CountingEngine from "../counting-engine";

describe('counting engine initialises', function() {
    const cases = [
        [null, 0],
        [1, 1],
        ["2", 2],
        ["foo", 0]
    ];
    test.each(cases)('with (%p) giving (%p)', function(providedCount, expectedCount) {
        let engine = new CountingEngine(providedCount);
        expect(engine.count).toBe(expectedCount);
    });
});
