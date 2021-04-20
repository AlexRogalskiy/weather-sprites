import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

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
