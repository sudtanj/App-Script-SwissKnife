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
     * Calculates the start date for a given date by setting the time to 16:00:00 UTC
     * and subtracting one day.
     * 
     * Note: This calculation is based on GMT+7.
     *
     * @param {Date} date - The input date.
     * @returns {Date} A new Date object representing the start date.
     */
    static getStartDate(date: Date): Date {
        const startDate = new Date(date); // Create a copy to avoid modifying the original date
        startDate.setUTCDate(startDate.getUTCDate() - 1);
        startDate.setUTCHours(16, 0, 0, 0); // This is effectively 00:00:00 GMT+7
        return startDate;
    }

    /**
     * Calculates the end date for a given date by setting the time to 16:59:59.999 UTC.
     *
     * Note: This calculation is based on GMT+7.
     *
     * @param {Date} date - The input date.
     * @returns {Date} A new Date object representing the end date.
     */
    static getEndDate(date: Date): Date {
        const endDate = new Date(date); // Create a copy to avoid modifying the original date
        endDate.setUTCHours(16, 59, 59, 999); // This is effectively 23:59:59.999 GMT+7
        return endDate;
    }
}
