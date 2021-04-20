import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const rainMoonTemplate: Record<SpritePattern.rain_moon, SpriteTemplate> = {
    [SpritePattern.rain_moon]: {
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

export default rainMoonTemplate
