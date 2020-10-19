import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoExternal from 'rollup-plugin-auto-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: './src/components/Toast/Toast.jsx',
    output: [
        {
            file: './build/Toast.js',
            format: 'cjs'
        },
        {
            file: './build/Toast.esm.js',
            format: 'esm'
        }
    ],
    plugins: [
        babel({ babelHelpers: 'runtime' }),
        postcss(),
        autoExternal(),
        resolve({ extensions: ['.js', '.jsx'] }),
        commonjs(),
    ]
}