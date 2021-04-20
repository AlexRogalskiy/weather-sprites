import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const cloudSunTemplate: Record<SpritePattern.cloud_sun, SpriteTemplate> = {
    [SpritePattern.cloud_sun]: {
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

export default cloudSunTemplate
