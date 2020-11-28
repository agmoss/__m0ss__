import autoprefixer from "autoprefixer";
import commonjs from "rollup-plugin-commonjs";
import embedCSS from "rollup-plugin-embed-css";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: pkg.main,
            sourcemap: true,
            format: "cjs",
            exports: "named",
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true,
        },
    ],
    external: ["react", "react-dom"],
    plugins: [
        peerDepsExternal(),
        postcss({
            extract: false,
            modules: true,
            extensions: [".css"],
            plugins: [autoprefixer()],
        }),
        embedCSS(),
        external(),
        resolve({ modulesOnly: true, extensions: [".ts", ".tsx"] }),
        typescript({
            rollupCommonJSResolveHack: true,
            exclude: "**/__tests__/**",
            clean: true,
            tsconfig: "./tsconfig.json",
        }),
        commonjs({
            include: ["'../../node_modules/**'"],
        }),
    ],
};
