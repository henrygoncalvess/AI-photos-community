import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

const config: Config = {
  testTimeout: 60000,
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
};

export default config;
