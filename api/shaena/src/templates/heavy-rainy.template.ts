import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const heavyRainyTemplate: Record<SpritePattern.heavy_rainy, SpriteTemplate> = {
    [SpritePattern.heavy_rainy]: {
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

export default heavyRainyTemplate
