import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const partlyRainyTemplate: Record<SpritePattern.partly_rainy, SpriteTemplate> = {
    [SpritePattern.partly_rainy]: {
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

export default partlyRainyTemplate
