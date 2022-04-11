/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-typescript", "@snowpack/plugin-postcss"],
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
  optimize: {
    bundle: true,
  },
  packageOptions: {
    knownEntrypoints: ["@emotion/react", "@emotion/styled"],
  },
  devOptions: { tailwindConfig: "./tailwind.config.js" },
  buildOptions: {},
};
