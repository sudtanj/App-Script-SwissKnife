export class TimeUtils {
    static sleepRandBetween(fromMs: number, toMs: number) {
        const rand = Math.floor((Math.random()*toMs)+fromMs)
        Utilities.sleep(rand)
    }
}