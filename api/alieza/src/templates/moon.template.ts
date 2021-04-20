import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const moonTemplate: Record<SpritePattern.moon, SpriteTemplate> = {
    [SpritePattern.moon]: {
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

export default moonTemplate
