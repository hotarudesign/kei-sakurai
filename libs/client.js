import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "hotarudesign", // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: "1a7cee149bd1401cbf210a303d6648b2403f",
});
