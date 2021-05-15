import * as P from 'polished'

import { compose } from 'ramda'

import { Styles } from 'polished/lib/types/style'
import { ContrastScores, HslaColor, HslColor, RgbaColor, RgbColor } from 'polished/lib/types/color'

import { BiProcessor, Processor } from '../typings/standard-types'

export const spaces = (args: number[] = [0, 0.5, 1, 1.5, 2, 2.5, 3]): string[] => args.map(n => `${n}rem`)

export const breakpoints = (args: number[] = [40, 52, 64]): string[] =>
    args.map((n: number): string => `${n}em`)

export const radialGradient: Styles = P.radialGradient({
    colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
    extent: 'farthest-corner at 45px 45px',
    position: 'center',
    shape: 'ellipse',
    fallback: '',
})

export const triangle = P.triangle({
    backgroundColor: 'red',
    foregroundColor: 'red',
    pointingDirection: 'right',
    width: 100,
    height: 100,
})

export const linearGradient: Styles = P.linearGradient({
    colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
    toDirection: 'to top right',
    fallback: '#FFF',
})

export const backgroundImages: Styles = P.backgroundImages(
    'url("/image/background.jpg")',
    'linear-gradient(red, green)'
)

export const backgrounds: Styles = P.backgrounds(
    'url("/image/background.jpg")',
    'linear-gradient(red, green)',
    'center no-repeat'
)

export const border: Styles = P.border('top', '1px', 'solid', 'red')
export const borderColor: Styles = P.borderColor('red', null, undefined, 'green')
export const borderRadius: Styles = P.borderRadius('top', '5px')
export const borderStyle: Styles = P.borderStyle('solid', null, undefined, 'dashed')
export const borderWidth: Styles = P.borderWidth('12px', null, undefined, '24px')
export const buttons: string = P.buttons(null, undefined, 'active')
export const margin: Styles = P.margin('12px', null, undefined, '24px')
export const padding: Styles = P.padding('12px', null, undefined, '24px')

export const position: Styles = P.position('absolute', '12px', null, undefined, '24px')

export const textInputs: string = P.textInputs('active', null, undefined)
export const transitions: Styles = P.transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')

export const directionalProperty: Styles = P.directionalProperty('padding', '12px', null, undefined, '24px')

export const remToPx: string = P.remToPx('1.6rem', '10px')

export const stripUnit: number | string = P.stripUnit('100px')

export const tone = (a: number, b: number): Processor<string, string> =>
    compose(P.lighten(a), P.desaturate(b))

export const toneCompose = (c: string, a: number, b: number): Processor<Styles, string> =>
    compose(P.lighten(a), desaturate(c, b))

export const get = (obj: any, key: string, def?: unknown, p?: number, undef?: unknown): any => {
    const path: string[] = key ? key.split('.') : [key]
    for (p = 0; p < path.length; p++) {
        obj = obj ? obj[path[p]] : undef
    }
    return obj === undef ? def : obj
}

/**
 * Returns color from theme.colors
 */
export const getColor = (style: Styles, color: string): string =>
    get(style, `colors.${color}`, color)
        .replace(/^var\(--(\w+)(.*?), /, '')
        .replace(/\)/, '')

/**
 * Returns color string representation
 */
export const colorString = (v: any): string => P.toColorString(v)

/**
 * Returns between boundary value
 */
export const between = (a: string, b: string): Processor<Styles, string> => (t: Styles) =>
    P.between(getColor(t, a), getColor(t, b))

/**
 * Returns darkened color
 */
export const darken = (c: string, n: number): Processor<Styles, string> => (t: Styles) =>
    P.darken(n, getColor(t, c))

/**
 * Returns readable color
 */
export const readableColor = (c: string): Processor<Styles, string> => (t: Styles): string =>
    P.readableColor(getColor(t, c))

/**
 * Returns HSL color by input string
 */
export const toHsl = (c: string): Processor<Styles, HslColor | HslaColor> => (t: Styles) =>
    P.parseToHsl(getColor(t, c))

/**
 * Returns RGB color by input string
 */
export const toRgb = (c: string): Processor<Styles, RgbColor | RgbaColor> => (t: Styles) =>
    P.parseToRgb(getColor(t, c))

/**
 * Returns color by HSLA
 */
export const hsla = (t: HslaColor): string => P.hsla(t)

/**
 * Returns color by HSL
 */
export const hsl = (t: HslColor): string => P.hsl(t)

/**
 * Returns opacified color by an amount 0–1
 */
export const opacify = (c: string, n: number): Processor<Styles, string> => (t: Styles) =>
    P.opacify(n, getColor(t, c))

/**
 * Returns lightened color by an amount 0–1
 */
export const lighten = (c: string, n: number): Processor<Styles, string> => (t: Styles) =>
    P.lighten(n, getColor(t, c))

/**
 * Returns color with rotated hue by an amount 0–360
 */
export const rotate = (c: string, d: number): Processor<Styles, string> => (t: Styles) =>
    P.adjustHue(d, getColor(t, c))

/**
 * Returns color with hue to a degree 0–360
 */
export const hue = (c: string, h: number): Processor<Styles, string> => (t: Styles) =>
    P.setHue(h, getColor(t, c))

/**
 * Returns color with saturation
 */
export const saturation = (c: string, s: number): Processor<Styles, string> => (t: Styles) =>
    P.setSaturation(s, getColor(t, c))

/**
 * Returns color with lightness
 */
export const lightness = (c: string, l: number): Processor<Styles, string> => (t: Styles) =>
    P.setLightness(l, getColor(t, c))

/**
 * Returns desaturated color
 */
export const desaturate = (c: string, n: number): Processor<Styles, string> => (t: Styles) =>
    P.desaturate(n, getColor(t, c))

/**
 * Returns saturated color
 */
export const saturate = (c: string, n: number): Processor<Styles, string> => (t: Styles) =>
    P.saturate(n, getColor(t, c))

/**
 * Returns shaded color
 */
export const shade = (c: string, n: number): Processor<Styles, string> => (t: Styles) =>
    P.shade(n, getColor(t, c))

/**
 * Returns tinted color
 */
export const tint = (c: string, n: number): Processor<Styles, string> => (t: Styles) =>
    P.tint(n, getColor(t, c))

/**
 * Returns transparent color
 */
export const transparentize = (c: string, n: number): Processor<Styles, string> => (t: Styles) =>
    P.transparentize(n, getColor(t, c))

/**
 * Returns RGBA color
 */
export const alpha = (c: string, n: number): Processor<Styles, string> => (t: Styles) =>
    P.rgba(getColor(t, c), n)

/**
 * Returns mix of two colors by a specific ratio
 */
export const meetsContrastGuidelines = (a: string, b: string): Processor<Styles, ContrastScores> => (
    t: Styles
) => P.meetsContrastGuidelines(getColor(t, a), getColor(t, b))

/**
 * Returns mix of two colors by a specific ratio
 */
export const mix = (a: string, b: string, n = 0.5): Processor<Styles, string> => (t: Styles) =>
    P.mix(n, getColor(t, a), getColor(t, b))

/**
 * Returns complement of a color
 */
export const complement = (c: string): Processor<Styles, string> => (t: Styles) =>
    P.complement(getColor(t, c))

/**
 * Returns inverted color
 */
export const invert = (c: string): Processor<Styles, string> => (t: Styles) => P.invert(getColor(t, c))

/**
 * Returns gray the color
 */
export const gray = (c: string): Processor<Styles, string> => (t: Styles) => P.grayscale(getColor(t, c))

/**
 * Returns luminance of a color
 */
export const contrast = (c: string): BiProcessor<Styles, Styles, number> => (t1: Styles, t2: Styles) =>
    P.getContrast(getColor(t1, c), getColor(t2, c))

/**
 * Returns luminance of a color
 */
export const luminance = (c: string): Processor<Styles, number> => (t: Styles) =>
    P.getLuminance(getColor(t, c))
//--------------------------------------------------------------------------------------------------
/**
 * Returns desaturated (grayscale) color
 */
export const grayscale = (c: string): Processor<Styles, string> => desaturate(c, 1)

// const styles = {
//     'color': P.lighten(0.2, '#000'),
//     'font-size': P.modularScale(1),
//     [P.hiDPI(1.5)]: {
//         'font-size': P.modularScale(1.25),
//     },
// }
