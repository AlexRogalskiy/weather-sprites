import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const snowMoonTemplate: Record<SpritePattern.snow_moon, SpriteTemplate> = {
    [SpritePattern.snow_moon]: {
        style: () => {
            return `
                `
        },
        layout: () => {
            return `
                `
        },
    },
}

export default snowMoonTemplate
