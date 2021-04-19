import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const hazeTemplate: Record<SpritePattern.haze, SpriteTemplate> = {
    [SpritePattern.haze]: {
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

export default hazeTemplate
