import axios from "redaxios";

import config from "@/pods/config";

const publicMarvelInstanceService = axios.create({
  baseURL: config().api.public.url,
  params: {
    apikey: config().api.public.key,
  },
});

export default publicMarvelInstanceService;
