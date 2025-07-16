import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN for immediate updates when publishing
  // Add token for authenticated requests (optional, for preview mode)
  // token: process.env.SANITY_API_READ_TOKEN,
});
