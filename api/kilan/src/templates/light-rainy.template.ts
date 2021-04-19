import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const lightRainyTemplate: Record<SpritePattern.light_rainy, SpriteTemplate> = {
    [SpritePattern.light_rainy]: {
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

export default lightRainyTemplate
