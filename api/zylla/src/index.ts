import { SpritePattern } from '@weather-time/core/typings/enum-types'
import { SpriteTemplateRecord } from '@weather-time/core/typings/domain-types'

// @ts-ignore
import sun from '../images/sun.svg'
// @ts-ignore
import moon from '../images/moon.svg'
// @ts-ignore
import snowflake from '../images/snowflake.svg'
// @ts-ignore
import cloudy from '../images/cloudy.svg'
// @ts-ignore
import fog from '../images/fog.svg'
// @ts-ignore
import hail from '../images/hail.svg'
// @ts-ignore
import haze from '../images/haze.svg'
// @ts-ignore
import lightRain from '../images/light-rain.svg'
// @ts-ignore
import cloud from '../images/cloud.svg'
// @ts-ignore
import cloudSun from '../images/cloud-sun.svg'
// @ts-ignore
import cloudMoon from '../images/cloud-moon.svg'
// @ts-ignore
import rain from '../images/rain.svg'
// @ts-ignore
import stormSun from '../images/storm-sun.svg'
// @ts-ignore
import stormMoon from '../images/storm-moon.svg'
// @ts-ignore
import rainSun from '../images/rain-sun.svg'
// @ts-ignore
import rainMoon from '../images/rain-moon.svg'
// @ts-ignore
import sleet from '../images/sleet.svg'
// @ts-ignore
import snow from '../images/snow.svg'
// @ts-ignore
import thunderstorm from '../images/thunderstorm.svg'
// @ts-ignore
import unknown from '../images/unknown.svg'

/**
 * Sprite templates
 * @desc Type representing supported sprite templates
 */
const templates: Readonly<SpriteTemplateRecord> = {
    [SpritePattern.cloud_moon]: cloudMoon,
    [SpritePattern.cloud_sun]: cloudSun,
    [SpritePattern.moon]: moon,
    [SpritePattern.rain_moon]: rainMoon,
    [SpritePattern.rain_sun]: rainSun,
    [SpritePattern.snowflake]: snowflake,
    [SpritePattern.storm_moon]: stormMoon,
    [SpritePattern.storm_sun]: stormSun,
    [SpritePattern.snow_moon]: snow,
    [SpritePattern.snow_sun]: snow,
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
