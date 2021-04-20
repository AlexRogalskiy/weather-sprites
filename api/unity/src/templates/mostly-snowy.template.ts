import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const mostlySnowyTemplate: Record<SpritePattern.mostly_snowy, SpriteTemplate> = {
    [SpritePattern.mostly_snowy]: {
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

export default mostlySnowyTemplate
