import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "a0nhkjjj",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
});

export function urlForImage(source: any) {
  return source ? builder.image(source).auto("format").fit("max") : "";
}