import typescript from 'rollup-plugin-typescript2'


const formats = ['cjs', 'es']

export default formats.map(format => ({
  input: 'src/index.ts',
  output: {
    file: `dist/index.${format}.js`,
    format,
  },
  external: [
    'fs',
    'path',
    'util',
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
}))
