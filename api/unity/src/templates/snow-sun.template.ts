import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const snowSunTemplate: Record<SpritePattern.snow_sun, SpriteTemplate> = {
    [SpritePattern.snow_sun]: {
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

export default snowSunTemplate
