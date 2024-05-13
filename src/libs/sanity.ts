import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: "zwd80dnn",
  dataset: process.env.NEXT_SANITY_PUBLIC_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_SECRET_TOKEN,
  apiVersion: "2021-10-21",
});

export default sanityClient;
