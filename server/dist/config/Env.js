"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env_var_1 = require("env-var");
exports.envs = {
    URI: (0, env_var_1.get)("MONGOURI").required().asString(),
    PORT: (0, env_var_1.get)("PORT").required().asPortNumber(),
    SECRET: (0, env_var_1.get)("SECRET").required().asString()
};
