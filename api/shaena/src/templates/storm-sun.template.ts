import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const stormSunTemplate: Record<SpritePattern.storm_sun, SpriteTemplate> = {
    [SpritePattern.storm_sun]: {
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

export default stormSunTemplate
