
export class Main {
    // 0 : eteint, X : allumé
    convertMinute (time) {
        const minutes = this.getMinutes(time)
        if (minutes%5 === 1) return "Y000";
        if (minutes%5 === 2) return "YY00";
        if (minutes%5 === 3) return "YYY0";
        if (minutes%5 === 4) return "YYYY";

        return "0000";
    }
    getMinutes(time) {
        return parseInt(time.split(':')[1]);
    }

    convertMinuteBy5 (time) {
        const minutes = this.getMinutes(time)
        if (Math.floor(minutes/5) === 1) return "Y0000000000";
        if (Math.floor(minutes/5) === 2) return "YY000000000";
        if (Math.floor(minutes/5) === 3) return "YYR00000000";
        if (Math.floor(minutes/5) === 4) return "YYRY0000000";
        if (Math.floor(minutes/5) === 5) return "YYRYY000000";
        if (Math.floor(minutes/5) === 6) return "YYRYYR00000";
        if (Math.floor(minutes/5) === 7) return "YYRYYRY0000";
        if (Math.floor(minutes/5) === 8) return "YYRYYRYY000";
        if (Math.floor(minutes/5) === 9) return "YYRYYRYYR00";
        if (Math.floor(minutes/5) === 10) return "YYRYYRYYRY0";
        if (Math.floor(minutes/5) === 11) return "YYRYYRYYRYY";

        return "00000000000";
    }

    convertHourBy5 (time) {
        const hours = this.getHours(time)
        if (hours%5 === 1) return "R000";
        if (hours%5 === 2) return "RR00";
        if (hours%5 === 3) return "RRR0";
        if (hours%5 === 4) return "RRRR";

        return "0000";
    }


}