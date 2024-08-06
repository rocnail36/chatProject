import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    URI: get("MONGOURI").required().asString(),
    PORT: get("PORT").required().asPortNumber(),
    SECRET: get("SECRET").required().asString(),
    CLIENT: get("CLIENT").required().asString()
}