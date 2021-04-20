import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import svg from 'rollup-plugin-svg'

import pkg from './package.json'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'auto',
            sourcemap: true,
        },
    ],
    plugins: [typescript(), sourceMaps(), svg()],
}
