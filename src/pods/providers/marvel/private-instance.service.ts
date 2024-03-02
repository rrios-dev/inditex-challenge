import crypto from "crypto";

import axios from "redaxios";

import config from "@/pods/config";
import serverConfig from "@/pods/server-config";

const ts = Date.now();

const privateMarvelInstanceService = axios.create({
  baseURL: config.api.public.url,
  params: {
    ts: Date.now(),
    apikey: config.api.public.key,
    hash: crypto
      .createHash("md5")
      .update(`${ts}${serverConfig.api.private.key}${config.api.public.key}`)
      .digest("hex"),
  },
});

export default privateMarvelInstanceService;
