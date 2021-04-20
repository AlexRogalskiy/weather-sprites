import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const mostlyRainyTemplate: Record<SpritePattern.mostly_rainy, SpriteTemplate> = {
    [SpritePattern.mostly_rainy]: {
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

export default mostlyRainyTemplate
