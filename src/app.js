
export class Main {
    // X : eteint, 0 : allumé
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
}