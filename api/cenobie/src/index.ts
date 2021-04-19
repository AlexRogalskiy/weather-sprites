import { SpritePattern } from '../../../core/typings/enum-types'
import { SpriteTemplateRecord } from '../../../core/typings/domain-types'

// @ts-ignore
import sun from '../../images/maaza/sun.svg'
// @ts-ignore
import moon from '../../images/maaza/moon.svg'
// @ts-ignore
import snowflake from '../../images/maaza/snowflake.svg'
// @ts-ignore
import cloudy from '../../images/maaza/cloudy.svg'
// @ts-ignore
import fog from '../../images/maaza/fog.svg'
// @ts-ignore
import hail from '../../images/maaza/hail.svg'
// @ts-ignore
import haze from '../../images/maaza/haze.svg'
// @ts-ignore
import lightRain from '../../images/maaza/light_rain.svg'
// @ts-ignore
import cloud from '../../images/maaza/cloud.svg'
// @ts-ignore
import cloudSun from '../../images/maaza/cloud_sun.svg'
// @ts-ignore
import cloudMoon from '../../images/maaza/cloud_moon.svg'
// @ts-ignore
import rain from '../../images/maaza/rain.svg'
// @ts-ignore
import stormSun from '../../images/maaza/storm_sun.svg'
// @ts-ignore
import stormMoon from '../../images/maaza/storm_moon.svg'
// @ts-ignore
import showerSun from '../../images/maaza/shower_sun.svg'
// @ts-ignore
import showerMoon from '../../images/maaza/shower_moon.svg'
// @ts-ignore
import sleet from '../../images/maaza/sleet.svg'
// @ts-ignore
import snow from '../../images/maaza/snow.svg'
// @ts-ignore
import thunderstorm from '../../images/maaza/thunderstorm.svg'
// @ts-ignore
import unknown from '../../images/maaza/unknown.svg'

/**
 * Sprite pattern mappings
 * @desc Type representing supported sprite pattern mappings
 */
const templates: Readonly<SpriteTemplateRecord> = {
    [SpritePattern.cloud_moon]: cloudMoon,
    [SpritePattern.cloud_sun]: cloudSun,
    [SpritePattern.moon]: moon,
    [SpritePattern.rain_moon]: showerMoon,
    [SpritePattern.rain_sun]: showerSun,
    [SpritePattern.snowflake]: snowflake,
    [SpritePattern.storm_moon]: stormMoon,
    [SpritePattern.storm_sun]: stormSun,
    [SpritePattern.hail]: hail,
    [SpritePattern.haze]: haze,
    [SpritePattern.misty]: fog,
    [SpritePattern.sleet]: sleet,
    [SpritePattern.sunny]: sun,
    [SpritePattern.tornado]: thunderstorm,
    [SpritePattern.windy]: thunderstorm,
    [SpritePattern.thunderstorm]: thunderstorm,
    [SpritePattern.cloudy]: cloud,
    [SpritePattern.partly_cloudy]: cloudy,
    [SpritePattern.mostly_cloudy]: cloudy,
    [SpritePattern.snowy]: snow,
    [SpritePattern.partly_snowy]: snow,
    [SpritePattern.light_snowy]: snow,
    [SpritePattern.mostly_snowy]: snow,
    [SpritePattern.heavy_snowy]: snow,
    [SpritePattern.rainy]: rain,
    [SpritePattern.partly_rainy]: rain,
    [SpritePattern.light_rainy]: lightRain,
    [SpritePattern.mostly_rainy]: rain,
    [SpritePattern.heavy_rainy]: rain,
    [SpritePattern.unknown]: unknown,
}

export default templates
