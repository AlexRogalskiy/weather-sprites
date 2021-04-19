import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const stormMoonTemplate: Record<SpritePattern.storm_moon, SpriteTemplate> = {
    [SpritePattern.storm_moon]: {
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

export default stormMoonTemplate
