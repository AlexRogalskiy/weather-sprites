import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const unknownTemplate: Record<SpritePattern.unknown, SpriteTemplate> = {
    [SpritePattern.unknown]: {
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

export default unknownTemplate
