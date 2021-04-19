import { Optional } from '../typings/standard-types'
import { SpritePattern } from '../typings/enum-types'
import { SpriteTemplate, SpriteTemplateRecord } from '../typings/domain-types'

/**
 * Returns {@link SpriteTemplate} by input {@link SpritePattern} value
 * @param templates initial input {@link SpriteTemplateRecord} collection
 * @param value initial input {@link SpritePattern} to fetch by
 */
export const getTemplate = (
    templates: SpriteTemplateRecord,
    value: Optional<SpritePattern>
): SpriteTemplate => {
    return value ? templates[value] : templates[SpritePattern.unknown]
}
