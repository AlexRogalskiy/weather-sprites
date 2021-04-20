import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const cloudMoonTemplate: Record<SpritePattern.cloud_moon, SpriteTemplate> = {
    [SpritePattern.cloud_moon]: {
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

export default cloudMoonTemplate
