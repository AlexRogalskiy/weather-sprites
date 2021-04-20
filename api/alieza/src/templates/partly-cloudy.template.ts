import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const partlyCloudyTemplate: Record<SpritePattern.partly_cloudy, SpriteTemplate> = {
    [SpritePattern.partly_cloudy]: {
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

export default partlyCloudyTemplate
