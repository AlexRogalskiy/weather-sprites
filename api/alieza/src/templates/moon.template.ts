import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const moonTemplate: Record<SpritePattern.moon, SpriteTemplate> = {
    [SpritePattern.moon]: {
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

export default moonTemplate
