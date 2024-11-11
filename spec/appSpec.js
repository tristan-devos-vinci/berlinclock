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

    it("should return Y000", function() {
        const time = main.convertMinute("05:46:43");

        expect(time).toBe('Y000');
    });

    it("should return Y000", function() {
        const time = main.convertMinute("05:48:43");

        expect(time).toBe('YYY0');
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

    it("should return YYR00000000", function() {
        const time = main.convertMinuteBy5("00:16:00");

        expect(time).toBe('YYR00000000');
    })

    it("should return RR00", function() {
        const time = main.convertHourBy5("11:00:00");
        expect(time).toBe('RR00');
    })

    it("should return R000", function() {
        const time = main.convertHour("01:00:00");
        expect(time).toBe('R000');
    })

    it("should return R", function() {
        const time = main.convertSecond("00:00:02");
        expect(time).toBe('R');
    })

    it("should return 0", function() {
        const time = main.convertSecond("00:00:01");
        expect(time).toBe('0');
    })

    it("should return ", function() {
        const time = main.printClock("19:42:22");
        const clock = 
        "R\nRRR0\nRRRR\nYYRYYRYY000\nYY00";
        expect(time).toBe(clock);
    })

    it("should return ", function() {
        const time = main.printClock("18:35:00");
        const clock = 
        "R\nRRR0\nRRR0\nYYRYYRY0000\n0000";
        expect(time).toBe(clock);
    })

});
