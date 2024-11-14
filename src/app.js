
export class Main {
    convertMinute(time) {
        const minutes = this.getMinutes(time);
        const results = ["0000", "Y000", "YY00", "YYY0", "YYYY"];
        return results[minutes % 5];
    }
    

    convertMinuteBy5(time) {
        const minutes = this.getMinutes(time);
        const nbLights = Math.floor(minutes / 5);
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
        const hours = this.getHours(time)
        if (Math.floor(hours/5) === 1) return "R000";
        if (Math.floor(hours/5) === 2) return "RR00";
        if (Math.floor(hours/5) === 3) return "RRR0";
        if (Math.floor(hours/5) === 4) return "RRRR";

        return "0000";
    }
    convertHour (time) {
        const hours = this.getHours(time)
        if (hours%5 === 1) return "R000";
        if (hours%5 === 2) return "RR00";
        if (hours%5 === 3) return "RRR0";
        if (hours%5 === 4) return "RRRR";

        return "0000";
    }

    convertSecond(time){
        const seconds = this.getSeconds(time);
        if (seconds % 2 === 0) return "R";

        return "0";
    }

    printClock(time){
        const clock = this.convertSecond(time) + '\n' + this.convertHourBy5(time) + '\n' + this.convertHour(time) + '\n' + this.convertMinuteBy5(time) + '\n' + this.convertMinute(time);
        console.log(clock);
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