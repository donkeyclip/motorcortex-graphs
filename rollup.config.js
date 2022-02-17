import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    external: ["@donkeyclip/motorcortex"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [
      babel(),
      resolve(),
      replace({
        values: {
          "process.env.NODE_ENV": '"production"',
          'process.env["NODE_ENV"]': '"production"',
          "process.env['NODE_ENV']": '"production"',
        },
      }),
      commonjs(),
      json(),
    ],
  },
  {
    input: "src/index.js",
    external: ["@donkeyclip/motorcortex"],
    output: [
      {
        globals: {
          "@donkeyclip/motorcortex": "MotorCortex",
        },
        name: pkg.name,
        file: pkg.browser,
        format: "umd",
      },
    ],
    plugins: [
      babel(),
      json(),
      resolve({ mainFields: ["module", "main", "browser"] }),
      replace({
        values: {
          "process.env.NODE_ENV": '"production"',
          'process.env["NODE_ENV"]': '"production"',
          "process.env['NODE_ENV']": '"production"',
        },
      }),
      commonjs(),
      terser(),
    ],
  },
];
