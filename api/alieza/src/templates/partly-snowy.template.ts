import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const partlySnowyTemplate: Record<SpritePattern.partly_snowy, SpriteTemplate> = {
    [SpritePattern.partly_snowy]: {
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

export default partlySnowyTemplate
