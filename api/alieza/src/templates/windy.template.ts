import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const windyTemplate: Record<SpritePattern.windy, SpriteTemplate> = {
    [SpritePattern.windy]: {
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

export default windyTemplate
