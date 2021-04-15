import { SpritePattern } from './enum-types'
//--------------------------------------------------------------------------------------------------
/**
 * SpriteOptions
 * @desc Type representing sprite options
 */
export type SpriteOptions = {
    width?: string
    height?: string
    fill?: string
    opacity?: string
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
 * SpriteLayoutOptions
 * @desc Type representing sprite layout options
 */
export type SpriteLayoutOptions = {
    /**
     * Creates style by input {@link SpriteOptions}
     * @param options initial input {@link SpriteOptions}
     */
    readonly style: (options?: SpriteOptions) => string
    /**
     * Creates layout by input {@link LayoutOptions}
     * @param options initial input {@link LayoutOptions}
     */
    readonly layout?: (options?: LayoutOptions) => string
}
//--------------------------------------------------------------------------------------------------
/**
 * SpritePatternOperator
 * @desc Type representing sprite pattern operators
 */
export type SpritePatternOperator = Record<SpritePattern, SpriteLayoutOptions>
//--------------------------------------------------------------------------------------------------
