export interface CalendarOptions {
    src: string;
    height: number;
    showTitle: boolean;
    showNav: boolean;
    showPrint: boolean;
    showTabs: boolean;
    showCalendars: boolean;
    showTz: boolean;
    showDate: boolean;
    weekStart: 1 | 2 | 3 | 4 | 5 | 6;
    timezone: string;
    mode: "AGENDA" | "WEEK" | "MONTH";
}

export function getCalenderURL(
    baseURL: string,
    parameters: CalendarOptions
): string {
    const n: Record<string, string> = {
        src: parameters.src,
        ctz: parameters.timezone,
        height: parameters.height.toString(),
        showTitle: parameters.showTitle ? "1" : "0",
        showNav: parameters.showTitle ? "1" : "0",
        showPrint: parameters.showTitle ? "1" : "0",
        showTabs: parameters.showTitle ? "1" : "0",
        showCalendars: parameters.showTitle ? "1" : "0",
        showTz: parameters.showTitle ? "1" : "0",
        showDate: parameters.showTitle ? "1" : "0",
        wkst: parameters.weekStart.toString(),
        mode: parameters.mode.toString(),
    };
    return [
        baseURL,
        Object.keys(n)
            .map((key) => `${key}=${n[key]}`)
            .join("&"),
    ].join("?");
}
