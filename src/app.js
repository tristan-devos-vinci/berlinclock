
export class Main {

    convertMinute(time) {
        const minute = this.getMinutes(time);
        const results = ["0000", "Y000", "YY00", "YYY0", "YYYY"];
        return results[minute % 5];
    }
    

    convertMinuteBy5(time) {
        const minute = this.getMinutes(time);
        const nbLights = Math.floor(minute / 5);
        let result = '';
    
        for (let i = 0; i < 11; i++) {
            if (i < nbLights) {
                if ((i + 1) % 3 === 0) {
                    result += 'R';
                } else {
                    result += 'Y';
                }
            } else {
                result += '0';
            }
        }
    
        return result;
    }

    convertHourBy5(time){
        const hour = this.getHours(time)
        const results = ["0000", "R000", "RR00", "RRR0", "RRRR"];

        return results[Math.floor(hour/5)];
    }

    convertHour (time) {
        const hour = this.getHours(time);
        const results = ["0000", "R000", "RR00", "RRR0", "RRRR"]

        return results[hour%5];
    }


    convertSecond(time){
        const second = this.getSeconds(time);
        if (second % 2 === 0) return "R";

        return "0";
    }

    printClock(time){
        const clock = this.convertSecond(time) + '\n' + this.convertHourBy5(time) + '\n' + this.convertHour(time) + '\n' + this.convertMinuteBy5(time) + '\n' + this.convertMinute(time);
        return clock;

    }

    getHours(time) {
        return parseInt(time.split(':')[0]);
    }

    getMinutes(time) {
        return parseInt(time.split(':')[1]);
    }

    getSeconds(time) {
        return parseInt(time.split(':')[2]);
    }


}