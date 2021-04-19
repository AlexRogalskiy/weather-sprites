import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const hailTemplate: Record<SpritePattern.hail, SpriteTemplate> = {
    [SpritePattern.hail]: {
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

export default hailTemplate
