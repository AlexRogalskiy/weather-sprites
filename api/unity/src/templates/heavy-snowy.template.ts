import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const heavySnowyTemplate: Record<SpritePattern.heavy_snowy, SpriteTemplate> = {
    [SpritePattern.heavy_snowy]: {
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

export default heavySnowyTemplate
