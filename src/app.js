
export class Main {
    // 0 : eteint, X : allumé
    convertMinute (time) {
        const minutes = this.getMinutes(time)
        if (minutes === 1) return "Y000";
        if (minutes === 2) return "YY00";
        if (minutes === 3) return "YYY0";
        if (minutes === 4) return "YYYY";

        return "0000";
    }
    getMinutes(time) {
        return parseInt(time.split(':')[1]);
    }

    convertMinuteBy5 (time) {
        const minutes = this.getMinutes(time)
        if (minutes === 5) return "Y0000000000";
        if (minutes === 10) return "YY000000000";
        if (minutes === 15) return "YYR00000000";
        if (minutes === 20) return "YYRY0000000";
        if (minutes === 25) return "YYRYY000000";
        if (minutes === 30) return "YYRYYR00000";
        if (minutes === 35) return "YYRYYRY0000";
        if (minutes === 40) return "YYRYYRYY000";
        if (minutes === 45) return "YYRYYRYYR00";
        if (minutes === 50) return "YYRYYRYYRY0";
        if (minutes === 55) return "YYRYYRYYRYY";

        return "00000000000";
    }

}