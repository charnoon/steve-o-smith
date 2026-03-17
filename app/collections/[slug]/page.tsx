import Link from "next/link";
import { notFound } from "next/navigation";
import { CollectionGrid } from "@/components/CollectionGrid";
import { BottomNav } from "@/components/BottomNav";
import { FooterBar } from "@/components/FooterBar";
import { getCollection, COLLECTION_DATA } from "@/data/collections";

type PageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

async function resolveParams(params: PageProps["params"]) {
  if (!params) return { slug: "" };
  return params instanceof Promise ? await params : params;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await resolveParams(params);
  const data = slug ? getCollection(slug) : null;
  if (!data) return { title: "Steve O Smith" };
  return {
    title: `${data.title} — Steve O Smith`,
    description: `${data.title} collection`,
  };
}

export function generateStaticParams() {
  return Object.keys(COLLECTION_DATA).map((slug) => ({ slug }));
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await resolveParams(params);
  const data = slug ? getCollection(slug) : null;

  if (!data) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Link
        href="/"
        className="fixed top-0 left-0 z-50 p-10 font-serif text-label tracking-[0.06em] text-white transition-colors hover:text-neutral-200"
      >
        Back
      </Link>
      <main className="pb-16">
        <CollectionGrid
          title={data.title}
          slug={data.slug}
          gridImages={data.images}
        />
      </main>
      <BottomNav whiteText />
      <FooterBar />
    </div>
  );
}
