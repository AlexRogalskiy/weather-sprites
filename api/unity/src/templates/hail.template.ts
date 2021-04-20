import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const hailTemplate: Record<SpritePattern.hail, SpriteTemplate> = {
    [SpritePattern.hail]: {
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

export default hailTemplate
