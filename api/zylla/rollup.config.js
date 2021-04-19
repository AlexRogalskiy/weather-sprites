import typescript from '@rollup/plugin-typescript'
import svg from 'rollup-plugin-svg'
// import image from '@rollup/plugin-image'

export default {
    input: 'src/index.ts',
    external: ['./images/cloud.svg', './images/sun.svg', './images/moon.svg'],
    output: {
        dir: 'output',
        format: 'js'
    },
    plugins: [typescript(), svg()]
};

