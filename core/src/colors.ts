import * as P from 'polished'

export const defaultBreakpoints = [40, 52, 64].map((n: number): string => `${n}em`)

export const get = (obj: any, key: string, def?: unknown, p?: number, undef?: unknown): any => {
    const path: string[] = key ? key.split('.') : [key]
    for (p = 0; p < path.length; p++) {
        obj = obj ? obj[path[p]] : undef
    }
    return obj === undef ? def : obj
}

// const styles = {
//     'color': P.lighten(0.2, '#000'),
//     'font-size': P.modularScale(1),
//     [P.hiDPI(1.5)]: {
//         'font-size': P.modularScale(1.25),
//     },
// }

/**
 * Get color from theme.colors
 */
export const getColor = (theme: any, color: string): string =>
    get(theme, `colors.${color}`, color)
        .replace(/^var\(--(\w+)(.*?), /, '')
        .replace(/\)/, '')

/**
 * Darken a color by an amount 0–1
 */
export const darken = (c: string, n: number) => (t: any) => P.darken(n, getColor(t, c))
/**
 * Lighten a color by an amount 0–1
 */
export const lighten = (c: string, n: number) => (t: any) => P.lighten(n, getColor(t, c))
/**
 * Rotate the hue of a color by an amount 0–360
 */
export const rotate = (c: string, d: number) => (t: any) => P.adjustHue(d, getColor(t, c))

/**
 * Set the hue of a color to a degree 0–360
 */
export const hue = (c: string, h: number) => (t: any) => P.setHue(h, getColor(t, c))
/**
 * Set the saturation of a color to an amount 0–1
 */
export const saturation = (c: string, s: number) => (t: any) => P.setSaturation(s, getColor(t, c))
/**
 * Set the lightness of a color to an amount 0–1
 */
export const lightness = (c: string, l: number) => (t: any) => P.setLightness(l, getColor(t, c))
/**
 * Desaturate a color by an amount 0–1
 */
export const desaturate = (c: string, n: number) => (t: any) => P.desaturate(n, getColor(t, c))
/**
 * Saturate a color by an amount 0–1
 */
export const saturate = (c: string, n: number) => (t: any) => P.saturate(n, getColor(t, c))

/**
 * Shade a color by an amount 0–1
 */
export const shade = (c: string, n: number) => (t: any) => P.shade(n, getColor(t, c))
/**
 * Tint a color by an amount 0–1
 */
export const tint = (c: string, n: number) => (t: any) => P.tint(n, getColor(t, c))

export const transparentize = (c: string, n: number) => (t: any) => P.transparentize(n, getColor(t, c))
/**
 * Set the transparency of a color to an amount 0-1
 */
export const alpha = (c: string, n: number) => (t: any) => P.rgba(getColor(t, c), n)

/**
 * Mix two colors by a specific ratio
 */
export const mix = (a: string, b: string, n = 0.5) => (t: any) => P.mix(n, getColor(t, a), getColor(t, b))

/**
 * Get the complement of a color
 */
export const complement = (c: string) => (t: any) => P.complement(getColor(t, c))

/**
 * Get the inverted color
 */
export const invert = (c: string) => (t: any) => P.invert(getColor(t, c))

/**
 * Desaturate the color to grayscale
 */
export const grayscale = (c: string): ((t: any) => string) => desaturate(c, 1)
