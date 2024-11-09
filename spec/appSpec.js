import {Main} from '../src/app.js';

describe("test", function() {
    let main;
    beforeEach(() => {
        main = new Main();
    });
    it("should return 0000", function() {
        const time = main.convertMinute("00:00:00");

        expect(time).toBe('0000');
    });

    it("should return 00000000000", function() {
        const time = main.convertMinuteBy5("00:00:00");

        expect(time).toBe('00000000000');
    })

    it("should return Y0000000000", function() {
        const time = main.convertMinuteBy5("00:05:00");

        expect(time).toBe('Y0000000000');
    })

    it("should return YY000000000", function() {
        const time = main.convertMinuteBy5("00:10:00");

        expect(time).toBe('YY000000000');
    })

    it("should return YYR00000000", function() {
        const time = main.convertMinuteBy5("00:15:00");

        expect(time).toBe('YYR00000000');
    })
});
