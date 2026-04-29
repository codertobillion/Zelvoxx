import createImageUrlBuilder from '@sanity/image-url';

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a0nhkjjj',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
});

// Helper function to extract a usable URL from a Sanity Image Object
export const urlForImage = (source: any) => {
  if (!source) return undefined;
  return imageBuilder?.image(source).auto('format').fit('max');
};
