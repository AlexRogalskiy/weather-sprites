import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const lightSnowyTemplate: Record<SpritePattern.light_snowy, SpriteTemplate> = {
    [SpritePattern.light_snowy]: {
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

export default lightSnowyTemplate
