import {Main} from '../src/app.js';

describe("test", function() {
    let main;
    beforeEach(() => {
        main = new Main();
    });
    // 5 test of convertMinute
    
    it("should return 0000", function() {
        const time = main.convertMinute("00:00:00");

        expect(time).toBe('0000');
    });

    it("should return Y000", function() {
        const time = main.convertMinute("00:01:00");

        expect(time).toBe('Y000');
    });

    it("should return YYYY", function() {
        const time = main.convertMinute("00:34:00");

        expect(time).toBe('YYYY');
    });
    
    it("should return YYY0", function() {
        const time = main.convertMinute("00:03:00");

        expect(time).toBe('YYY0');
    });

    it("should return YYYY", function() {
        const time = main.convertMinute("00:04:00");

        expect(time).toBe('YYYY');
    });

    // 5 test of convertMinuteBy5

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
        const time = main.convertMinuteBy5("00:17:00");

        expect(time).toBe('YYR00000000');
    })

    // 5 test of convertHour

    it("should return 0000", function() {
        const time = main.convertHour("00:00:00");
        expect(time).toBe('0000');
    })

    it("should return R000", function() {
        const time = main.convertHour("01:00:00");
        expect(time).toBe('R000');
    })

    it("should return RR00", function() {
        const time = main.convertHour("02:00:00");
        expect(time).toBe('RR00');
    })

    it("should return RRR0", function() {
        const time = main.convertHour("03:00:00");
        expect(time).toBe('RRR0');
    })

    it("should return RRRR", function() {
        const time = main.convertHour("04:00:00");
        expect(time).toBe('RRRR');
    })

    // 5 test of convertHourBy5

    it("should return 0000", function() {
        const time = main.convertHourBy5("00:00:00");
        expect(time).toBe('0000');
    })

    it("should return R000", function() {
        const time = main.convertHourBy5("05:00:00");
        expect(time).toBe('R000');
    })

    it("should return RR00", function() {
        const time = main.convertHourBy5("10:00:00");
        expect(time).toBe('RR00');
    })

    it("should return RRR0", function() {
        const time = main.convertHourBy5("15:00:00");
        expect(time).toBe('RRR0');
    })

    it("should return RRRR", function() {
        const time = main.convertHourBy5("20:00:00");
        expect(time).toBe('RRRR');
    })
    // 5 test of convertSecond

    it("should return R", function() {
        const time = main.convertSecond("00:00:00");
        expect(time).toBe('R');
    })

    it("should return 0", function() {
        const time = main.convertSecond("00:00:01");
        expect(time).toBe('0');
    })

    it("should return R", function() {
        const time = main.convertSecond("00:00:02");
        expect(time).toBe('R');
    })

    it("should return 0", function() {
        const time = main.convertSecond("00:00:03");
        expect(time).toBe('0');
    })

    it("should return R", function() {
        const time = main.convertSecond("00:00:04");
        expect(time).toBe('R');
    })

    // 5 test of printClock

    it("should return R\nRRR0\nRRRR\nYYRYYRYY000\nYY00", function() {
        const time = main.printClock("19:42:22");
        const clock = 
        "R\nRRR0\nRRRR\nYYRYYRYY000\nYY00";
        expect(time).toBe(clock);
    })

    it("should return R\nRRR0\nRRR0\nYYRYYRY0000\n0000", function() {
        const time = main.printClock("18:35:00");
        const clock = 
        "R\nRRR0\nRRR0\nYYRYYRY0000\n0000";
        expect(time).toBe(clock);
    })

    it("should return R\nRRR0\n0000\nY0000000000\nY000", function() {
        const time = main.printClock("15:06:30");
        const clock = 
        "R\nRRR0\n0000\nY0000000000\nY000";
        expect(time).toBe(clock);
    })

    it("should return R\nRRR0\n0000\nY0000000000\nY000", function() {
        const time = main.printClock("09:35:41");
        const clock = 
        "0\nR000\nRRRR\nYYRYYRY0000\n0000";
        expect(time).toBe(clock);
    })

    it("should return 0\nRRRR\nRRR0\nYYRYYRYYRYY\nYYYY", function() {
        const time = main.printClock("23:59:59");
        const clock = 
        "0\nRRRR\nRRR0\nYYRYYRYYRYY\nYYYY";
        expect(time).toBe(clock);
    })


});
