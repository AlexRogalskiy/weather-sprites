import { SpriteTemplate } from '@weather-time/core/typings/domain-types'
import { SpritePattern } from '@weather-time/core/typings/enum-types'

const partlyRainyTemplate: Record<SpritePattern.partly_rainy, SpriteTemplate> = {
    [SpritePattern.partly_rainy]: {
        style: () => {
            return `
                        html {
                            box-sizing: border-box;
                        }

                        html *,
                        html *:before,
                        html *:after {
                            box-sizing: inherit;
                        }

                        body {
                            max-width: 42em;
                            padding: 2em;
                            margin: 0 auto;
                            color: #0C5585;
                            font-family: 'Roboto', sans-serif;
                            text-align: center;
                            background-color: currentColor;
                        }

                        h1 {
                            margin-bottom: 1.375em;
                            color: #fff;
                            font-weight: 100;
                            font-size: 2em;
                            text-transform: uppercase;
                        }

                        p,
                        a {
                            color: rgba(255, 255, 255, 0.3);
                            font-size: small;
                        }

                        p {
                            margin: 1.375rem 0;
                        }

                        .icon {
                            position: relative;
                            display: inline-block;
                            width: 12em;
                            height: 10em;
                            font-size: 1em; /* control icon size here */
                        }

                        .cloud {
                            position: absolute;
                            z-index: 1;
                            top: 50%;
                            left: 50%;
                            width: 3.6875em;
                            height: 3.6875em;
                            margin: -1.84375em;
                            background: currentColor;
                            border-radius: 50%;
                            box-shadow: -2.1875em 0.6875em 0 -0.6875em,
                            2.0625em 0.9375em 0 -0.9375em,
                            0 0 0 0.375em #fff,
                            -2.1875em 0.6875em 0 -0.3125em #fff,
                            2.0625em 0.9375em 0 -0.5625em #fff;
                        }

                        .cloud:after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: -0.5em;
                            display: block;
                            width: 4.5625em;
                            height: 1em;
                            background: currentColor;
                            box-shadow: 0 0.4375em 0 -0.0625em #fff;
                        }

                        .cloud:nth-child(2) {
                            z-index: 0;
                            background: #fff;
                            box-shadow: -2.1875em 0.6875em 0 -0.6875em #fff,
                            2.0625em 0.9375em 0 -0.9375em #fff,
                            0 0 0 0.375em #fff,
                            -2.1875em 0.6875em 0 -0.3125em #fff,
                            2.0625em 0.9375em 0 -0.5625em #fff;
                            opacity: 0.1;
                            transform: scale(0.5) translate(6em, -3em);
                            animation: cloud 5s linear infinite;
                        }

                        .cloud:nth-child(3) {
                            z-index: 0;
                            background: #fff;
                            box-shadow: -2.1875em 0.6875em 0 -0.6875em #fff,
                            2.0625em 0.9375em 0 -0.9375em #fff,
                            0 0 0 0.375em #fff,
                            -2.1875em 0.6875em 0 -0.3125em #fff,
                            2.0625em 0.9375em 0 -0.5625em #fff;
                            opacity: 0.1;
                            transform: scale(0.5) translate(16em, -3em);
                            animation: cloud 5s linear infinite;
                        }

                        .cloud:nth-child(2):after {
                            background: #fff;
                        }

                        .cloud:nth-child(2):after {
                            background: #fff;
                        }

                        .sun {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            width: 2.5em;
                            height: 2.5em;
                            margin: -1.25em;
                            background: #FFC900;
                            border-radius: 50%;
                            box-shadow: 0 0 0 0.375em;
                            animation: spin 12s infinite linear;
                        }

                        .rays {
                            position: absolute;
                            top: -2em;
                            left: 50%;
                            display: block;
                            width: 0.375em;
                            height: 1.125em;
                            margin-left: -0.1875em;
                            background: #FFA600;
                            border-radius: 0.25em;
                            box-shadow: 0 5.375em #FFA600;
                        }

                        .rays:before,
                        .rays:after {
                            content: '';
                            position: absolute;
                            top: 0em;
                            left: 0em;
                            display: block;
                            width: 0.375em;
                            height: 1.125em;
                            transform: rotate(60deg);
                            transform-origin: 50% 3.25em;
                            background: #FFA600;
                            border-radius: 0.25em;
                            box-shadow: 0 5.375em #FFA600;
                        }

                        .rays:before {
                            transform: rotate(120deg);
                        }

                        .cloud + .sun {
                            margin: -2em 1em;
                        }

                        .rain,
                        .lightning,
                        .snow {
                            position: absolute;
                            z-index: 2;
                            top: 50%;
                            left: 50%;
                            width: 3.75em;
                            height: 3.75em;
                            margin: 0.375em 0 0 -2em;
                            background: currentColor;
                        }

                        .rain:after {
                            content: '';
                            position: absolute;
                            z-index: 2;
                            top: 50%;
                            left: 50%;
                            width: 1.125em;
                            height: 1.125em;
                            margin: -1em 0 0 -0.25em;
                            background: #00FFFF;
                            border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
                            box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                            -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                            -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
                            transform: rotate(-28deg);
                            animation: rain 3s linear infinite;
                        }

                        /* Animations */
                        @keyframes spin {
                            100% {
                                transform: rotate(360deg);
                            }
                        }

                        @keyframes cloud {
                            0% {
                                opacity: 0;
                            }
                            50% {
                                opacity: 0.8;
                            }
                            100% {
                                opacity: 0;
                                transform: scale(0.5) translate(-200%, -3em);
                            }
                        }

                        @keyframes rain {
                            0% {
                                background: #0cf;
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -1.375em -0.125em 0 #0cf;
                            }
                            25% {
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -0.875em 1.125em 0 -0.125em #0cf,
                                -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
                            }
                            50% {
                                background: rgba(255, 255, 255, 0.3);
                                box-shadow: 0.625em 0.875em 0 -0.125em #0cf,
                                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
                            }
                            100% {
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -1.375em -0.125em 0 #0cf;
                            }
                        }
                `
        },
        layout: () => {
            return `
                        <div class="icon sun-shower">
                          <div class="cloud"></div>
                          <div class="sun">
                            <div class="rays"></div>
                          </div>
                          <div class="rain"></div>
                        </div>
                `
        },
    },
}

export default partlyRainyTemplate
