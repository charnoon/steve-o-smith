import { CollectionGrid } from "./CollectionGrid";
import { getCollection } from "@/data/collections";

export function MetropolisSection() {
  const data = getCollection("metropolis");
  if (!data) return null;

  return (
    <CollectionGrid
      title={data.title}
      slug={data.slug}
      gridImages={data.images}
    />
  );
}
