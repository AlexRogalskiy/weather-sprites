import {
    alpha,
    complement,
    darken,
    desaturate,
    grayscale,
    hue,
    invert,
    lighten,
    lightness,
    mix,
    rotate,
    saturate,
    saturation,
    shade,
    tint,
    transparentize,
} from '../src/colors'
import { Styles } from 'polished/lib/types/style'

const Styles = {
    colors: {
        primary: '#0cf',
        secondary: '#639',
    },
} as Styles

test('desaturate', () => {
    const n = desaturate('primary', 0.5)(Styles)
    expect(n).toBe('#40a6bf')
})

test('saturate', () => {
    const n = saturate('secondary', 1)(Styles)
    expect(n).toBe('#60c')
})

test('darken', () => {
    const n = darken('primary', 0.25)(Styles)
    expect(n).toBe('#006680')
})

test('lighten', () => {
    const n = lighten('primary', 0.25)(Styles)
    expect(n).toBe('#80e5ff')
})

test('rotate', () => {
    const n = rotate('primary', 30)(Styles)
    expect(n).toBe('#004cff')
})

test('hue', () => {
    const n = hue('primary', 200)(Styles)
    expect(n).toBe('#0af')
})

test('saturation', () => {
    const n = saturation('primary', 0.25)(Styles)
    expect(n).toBe('#60939f')
})

test('lightness', () => {
    const n = lightness('primary', 0.25)(Styles)
    expect(n).toBe('#006680')
})

test('shade', () => {
    const n = shade('primary', 0.25)(Styles)
    expect(n).toBe('#0099bf')
})

test('tint', () => {
    const n = tint('primary', 0.25)(Styles)
    expect(n).toBe('#3fd8ff')
})

test('transparentize', () => {
    const n = transparentize('primary', 0.25)(Styles)
    expect(n).toBe('rgba(0,204,255,0.75)')
})

test('alpha', () => {
    const n = alpha('primary', 0.25)(Styles)
    expect(n).toBe('rgba(0,204,255,0.25)')
})

test('mix', () => {
    const n = mix('primary', 'secondary', 0.25)(Styles)
    expect(n).toBe('#4c59b2')
})

test('mix without third argument', () => {
    const n = mix('primary', 'secondary')(Styles)
    expect(n).toBe('#337fcc')
})

test('complement', () => {
    const n = complement('secondary')(Styles)
    expect(n).toBe('#693')
})

test('invert', () => {
    const n = invert('primary')(Styles)
    expect(n).toBe('#f30')
})

test('grayscale', () => {
    const n = grayscale('primary')(Styles)
    expect(n).toBe('#808080')
})

const StylesCustomProps = {
    colors: {
        primary: 'var(--Styles-ui-colors-primary, #0cf)',
        secondary: 'var(--Styles-ui-colors-primary, #639)',
    },
} as Styles

test('desaturateCustomProps', () => {
    const n = desaturate('primary', 0.5)(StylesCustomProps)
    expect(n).toBe('#40a6bf')
})

test('saturateCustomProps', () => {
    const n = saturate('secondary', 1)(StylesCustomProps)
    expect(n).toBe('#60c')
})

test('darkenCustomProps', () => {
    const n = darken('primary', 0.25)(StylesCustomProps)
    expect(n).toBe('#006680')
})

test('lightenCustomProps', () => {
    const n = lighten('primary', 0.25)(StylesCustomProps)
    expect(n).toBe('#80e5ff')
})

test('rotateCustomProps', () => {
    const n = rotate('primary', 30)(StylesCustomProps)
    expect(n).toBe('#004cff')
})

test('hueCustomProps', () => {
    const n = hue('primary', 200)(StylesCustomProps)
    expect(n).toBe('#0af')
})

test('saturationCustomProps', () => {
    const n = saturation('primary', 0.25)(StylesCustomProps)
    expect(n).toBe('#60939f')
})

test('lightnessCustomProps', () => {
    const n = lightness('primary', 0.25)(StylesCustomProps)
    expect(n).toBe('#006680')
})

test('shadeCustomProps', () => {
    const n = shade('primary', 0.25)(StylesCustomProps)
    expect(n).toBe('#0099bf')
})

test('tintCustomProps', () => {
    const n = tint('primary', 0.25)(StylesCustomProps)
    expect(n).toBe('#3fd8ff')
})

test('alphaCustomProps', () => {
    const n = alpha('primary', 0.25)(StylesCustomProps)
    expect(n).toBe('rgba(0,204,255,0.25)')
})

test('mixCustomProps', () => {
    const n = mix('primary', 'secondary', 0.25)(StylesCustomProps)
    expect(n).toBe('#4c59b2')
})

test('complementCustomProps', () => {
    const n = complement('secondary')(StylesCustomProps)
    expect(n).toBe('#693')
})

test('invertCustomProps', () => {
    const n = invert('primary')(StylesCustomProps)
    expect(n).toBe('#f30')
})

test('grayscaleCustomProps', () => {
    const n = grayscale('primary')(StylesCustomProps)
    expect(n).toBe('#808080')
})

const StylesTomato = {
    colors: {
        primary: 'tomato',
    },
} as Styles

test('darkenTomato', () => {
    const n = darken('primary', 0.25)(StylesTomato)
    expect(n).toBe('#c61e00')
})

const StylesTomatoCustomProps = {
    colors: {
        primary: 'var(--Styles-ui-colors-primary, tomato)',
    },
} as Styles

test('darkenTomatoCustomProps', () => {
    const n = darken('primary', 0.25)(StylesTomatoCustomProps)
    expect(n).toBe('#c61e00')
})
