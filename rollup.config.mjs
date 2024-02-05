import { babel } from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import serve from "rollup-plugin-serve";

const input = "./src/index.js";

const bundles = [
  // Core.
  {
    input,
    output: {
      file: "./dist/better-justified-layout.esm.js",
      format: "esm",
    },
  },
  {
    input,
    output: {
      file: "./dist/better-justified-layout.esm.min.js",
      format: "esm",
    },
  },
  {
    input,
    output: {
      exports: "default",
      file: "./dist/better-justified-layout.js",
      format: "cjs",
    },
  },
  {
    input,
    output: {
      exports: "default",
      file: "./dist/better-justified-layout.min.js",
      format: "cjs",
    },
  },
];

const isDev = () => "dev" === process.env.NODE_ENV;
const isMinEnv = (file) => file.includes(".min.");
const isSpecificEnv = (file) => isMinEnv(file);
const isDebugAlways = (file) => (isDev() ? "true" : "false");

const configs = bundles.map(({ input: inputPath, output }) => ({
  input: inputPath,
  output,
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      plugins: ["annotate-pure-calls"],
    }),
    replace({
      __DEV__: isSpecificEnv(output.file)
        ? isDebugAlways(output.file)
        : 'process.env.NODE_ENV !== "production"',
      preventAssignment: true,
    }),
    output.file.includes(".min.") && terser(),
  ],
}));

// Dev server.
if (isDev()) {
  configs[configs.length - 1].plugins.push(
    serve({
      open: true,
      contentBase: ["demo", "./"],
      port: 3002,
    }),
  );
}

export default configs;
