import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const mostlyCloudyTemplate: Record<SpritePattern.mostly_cloudy, SpriteTemplate> = {
    [SpritePattern.mostly_cloudy]: {
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

export default mostlyCloudyTemplate
