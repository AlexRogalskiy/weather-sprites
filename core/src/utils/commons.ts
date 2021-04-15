export const unhex = (value: string): string => value.slice(Math.max(0, value.indexOf('#') + 1))
