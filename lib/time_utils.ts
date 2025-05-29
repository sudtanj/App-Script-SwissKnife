export class TimeUtils {
    /**
     * Pauses execution for a random duration between the specified ranges.
     *
     * @param {number} fromMs - The minimum sleep duration in milliseconds.
     * @param {number} toMs - The maximum sleep duration in milliseconds.
     * @throws {Error} If 'fromMs' is negative or 'toMs' is less than 'fromMs'.
     */
    static sleepRandBetween(fromMs: number, toMs: number) {
        if (fromMs < 0) {
            throw new Error("'fromMs' must be a non-negative number.");
        }
        if (toMs < fromMs) {
            throw new Error("'toMs' must be greater than or equal to 'fromMs'.");
        }
        const rand = Math.floor((Math.random() * (toMs - fromMs + 1)) + fromMs);
        Utilities.sleep(rand);
    }

    /**
     * Calculates the start date for a given date by setting the time to 00:00:00 local time (GMT+7).
     *
     * @param {Date} date - The input date.
     * @returns {Date} A new Date object representing the start date.
     */
    static getStartDate(date: Date): Date {
        const startDate = new Date(date); // Create a copy to avoid modifying the original date
        startDate.setHours(0, 0, 0, 0); // Set to 00:00:00.000 local time
        Logger.log('Start Date: ' + startDate.toString() + ' | ISO: ' + startDate.toISOString());
        return startDate;
    }

    /**
     * Calculates the end date for a given date by setting the time to 23:59:59.999 local time (GMT+7).
     *
     * @param {Date} date - The input date.
     * @returns {Date} A new Date object representing the end date.
     */
    static getEndDate(date: Date): Date {
        const endDate = new Date(date); // Create a copy to avoid modifying the original date
        endDate.setDate(endDate.getDate() + 1); // Move to next day
        endDate.setHours(0, 0, 0, 0); // Set to 00:00:00.000 local time of next day
        Logger.log('End Date: ' + endDate.toString() + ' | ISO: ' + endDate.toISOString());
        return endDate;
    }
}
