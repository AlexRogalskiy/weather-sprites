import { SpritePattern } from './enum-types'

/**
 * FormatOptions
 * @desc Type representing format options
 */
export type FormatOptions = {
    /**
     * Theme width
     */
    readonly width?: string
    /**
     * Theme height
     */
    readonly height?: string
}

//--------------------------------------------------------------------------------------------------
/**
 * ThemeOptions
 * @desc Type representing theme options
 */
export type ThemeOptions = {
    /**
     * Theme fill color
     */
    readonly fill?: string
    /**
     * Theme opacity
     */
    readonly opacity?: string
    /**
     * Theme background color
     */
    readonly bgColor?: string
    /**
     * Theme color pattern
     */
    readonly colorPattern?: string
}

//--------------------------------------------------------------------------------------------------
/**
 * AnimationOptions
 * @desc Type representing animation options
 */
export type AnimationOptions = {
    /**
     * Animation type
     */
    readonly animation: string
    /**
     * Animation keyframes
     */
    readonly keyframes: string
}

//--------------------------------------------------------------------------------------------------
/**
 * SpriteOptions
 * @desc Type representing style options
 */
export type StyleOptions = {
    /**
     * Style format options
     */
    readonly format: FormatOptions
    /**
     * Style theme options
     */
    readonly theme: ThemeOptions
    /**
     * Style animation options
     */
    readonly animation: AnimationOptions
}

//--------------------------------------------------------------------------------------------------
/**
 * LayoutOptions
 * @desc Type representing layout options
 */
export type LayoutOptions = {
    // empty
}

//--------------------------------------------------------------------------------------------------
/**
 * SpriteTemplate
 * @desc Type representing sprite template
 */
export type SpriteTemplate = {
    /**
     * Creates style by input {@link StyleOptions}
     * @param options initial input {@link StyleOptions}
     */
    readonly style: (options?: StyleOptions) => string
    /**
     * Creates layout by input {@link LayoutOptions}
     * @param options initial input {@link LayoutOptions}
     */
    readonly layout?: (options?: LayoutOptions) => string
}

//--------------------------------------------------------------------------------------------------
/**
 * SpriteTemplateRecord
 * @desc Type representing sprite template record
 */
export type SpriteTemplateRecord = Record<SpritePattern, SpriteTemplate>

//--------------------------------------------------------------------------------------------------
