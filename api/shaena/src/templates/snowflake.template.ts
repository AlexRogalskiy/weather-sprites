import { SpriteTemplate } from '../../../../core/typings/domain-types'
import { SpritePattern } from '../../../../core/typings/enum-types'

const snowflakeTemplate: Record<SpritePattern.snowflake, SpriteTemplate> = {
    [SpritePattern.snowflake]: {
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

export default snowflakeTemplate
