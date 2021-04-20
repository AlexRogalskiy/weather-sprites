import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const hazeTemplate: Record<SpritePattern.haze, SpriteTemplate> = {
    [SpritePattern.haze]: {
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

export default hazeTemplate
