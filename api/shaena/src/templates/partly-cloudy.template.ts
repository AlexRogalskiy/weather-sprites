import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const partlyCloudyTemplate: Record<SpritePattern.partly_cloudy, SpriteTemplate> = {
    [SpritePattern.partly_cloudy]: {
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

export default partlyCloudyTemplate
