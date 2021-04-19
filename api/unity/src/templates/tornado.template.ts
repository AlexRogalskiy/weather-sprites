import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const tornadoTemplate: Record<SpritePattern.tornado, SpriteTemplate> = {
    [SpritePattern.tornado]: {
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

export default tornadoTemplate
