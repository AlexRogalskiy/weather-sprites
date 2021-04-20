import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

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
