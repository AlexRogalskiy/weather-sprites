import { SpriteTemplateRecord } from '@weather-time/core/typings/domain-types'

import cloudMoonTemplate from './templates/cloud-moon.template'
import cloudSunTemplate from './templates/cloud-sun.template'
import heavyRainyTemplate from './templates/heavy-rainy.template'
import heavySnowyTemplate from './templates/heavy-snowy.template'
import lightRainyTemplate from './templates/light-rainy.template'
import lightSnowyTemplate from './templates/light-snowy.template'
import mostlyCloudyTemplate from './templates/mostly-cloudy.template'
import mostlyRainyTemplate from './templates/mostly-rainy.template'
import mostlySnowyTemplate from './templates/mostly-snowy.template'
import partlyCloudyTemplate from './templates/partly-cloudy.template'
import partlyRainyTemplate from './templates/partly-rainy.template'
import rainMoonTemplate from './templates/rain-moon.template'
import rainSunTemplate from './templates/rain-sun.template'
import stormMoonTemplate from './templates/storm-moon.template'
import stormSunTemplate from './templates/storm-sun.template'
import snowMoonTemplate from './templates/snow-moon.template'
import snowSunTemplate from './templates/snow-sun.template'
import cloudyTemplate from './templates/cloudy.template'
import hailTemplate from './templates/hail.template'
import hazeTemplate from './templates/haze.template'
import mistyTemplate from './templates/misty.template'
import moonTemplate from './templates/moon.template'
import rainyTemplate from './templates/rainy.template'
import sleetTemplate from './templates/sleet.template'
import snowflakeTemplate from './templates/snowflake.template'
import snowyTemplate from './templates/snowy.template'
import sunnyTemplate from './templates/sunny.template'
import thunderstormTemplate from './templates/thunderstorm.template'
import tornadoTemplate from './templates/tornado.template'
import unknownTemplate from './templates/unknown.template'
import windyTemplate from './templates/windy.template'
import partlySnowyTemplate from './templates/partly-snowy.template'

/**
 * Sprite templates
 * @desc Type representing supported sprite templates
 */
const templates: Readonly<SpriteTemplateRecord> = {
    ...cloudMoonTemplate,
    ...cloudSunTemplate,
    ...heavyRainyTemplate,
    ...heavySnowyTemplate,
    ...lightRainyTemplate,
    ...lightSnowyTemplate,
    ...mostlyCloudyTemplate,
    ...mostlyRainyTemplate,
    ...mostlySnowyTemplate,
    ...partlyCloudyTemplate,
    ...partlyRainyTemplate,
    ...partlySnowyTemplate,
    ...rainMoonTemplate,
    ...rainSunTemplate,
    ...snowMoonTemplate,
    ...snowSunTemplate,
    ...stormMoonTemplate,
    ...stormSunTemplate,
    ...cloudyTemplate,
    ...hailTemplate,
    ...hazeTemplate,
    ...mistyTemplate,
    ...moonTemplate,
    ...rainyTemplate,
    ...sleetTemplate,
    ...snowflakeTemplate,
    ...snowyTemplate,
    ...sunnyTemplate,
    ...thunderstormTemplate,
    ...tornadoTemplate,
    ...unknownTemplate,
    ...windyTemplate,
}

export default templates
