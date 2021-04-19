import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const windyTemplate: Record<SpritePattern.windy, SpriteTemplate> = {
    [SpritePattern.windy]: {
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

export default windyTemplate
