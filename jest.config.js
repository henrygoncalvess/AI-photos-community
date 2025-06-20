const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testTimeout: 60000,
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
};
