import { isBrowser } from "./window";
export const isSmartphone = (): boolean =>
    isBrowser &&
    ["Android", "Phone"].some((v) => window.navigator.userAgent.includes(v));
