export class TimeUtils {
    static sleepRandBetween(fromMs: number, toMs: number) {
        const rand = Math.floor((Math.random()*toMs)+fromMs)
        Utilities.sleep(rand)
    }

    static getStartDate(date: Date): Date {
        date.setUTCDate(date.getUTCDate() - 1)
        date.setUTCHours(16,0,0,0);
        return date
    }

    static getEndDate(date: Date): Date {
        date.setUTCHours(16,59,59,999);
        return date
    }
}