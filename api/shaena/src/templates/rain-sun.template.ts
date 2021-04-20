import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const rainSunTemplate: Record<SpritePattern.rain_sun, SpriteTemplate> = {
    [SpritePattern.rain_sun]: {
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

export default rainSunTemplate
