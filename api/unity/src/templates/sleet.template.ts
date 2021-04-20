import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const sleetTemplate: Record<SpritePattern.sleet, SpriteTemplate> = {
    [SpritePattern.sleet]: {
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

export default sleetTemplate
