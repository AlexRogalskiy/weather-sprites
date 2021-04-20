import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const mistyTemplate: Record<SpritePattern.misty, SpriteTemplate> = {
    [SpritePattern.misty]: {
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

export default mistyTemplate
