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
});
