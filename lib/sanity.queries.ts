export const collectionBySlugQuery = `*[_type == "collection" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  "gridImages": gridImages[]{
    "url": asset->url,
    alt
  }
}`;

export const allCollectionsQuery = `*[_type == "collection"]{
  _id,
  title,
  "slug": slug.current
}`;
