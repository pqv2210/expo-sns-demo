import DevConfig from "./env.dev";
import ProdConfig from "./env.prod";

let ExtraConfig = ProdConfig;

if (__DEV__) {
  ExtraConfig = DevConfig;
}

const Config = { ...ExtraConfig };

export default Config;
