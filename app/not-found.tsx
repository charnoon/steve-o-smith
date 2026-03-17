import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-neutral-900">
      <p className="font-serif text-body text-neutral-600 mb-4">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="font-serif text-nav tracking-[0.08em] text-neutral-900 underline hover:no-underline"
      >
        Return home
      </Link>
    </div>
  );
}
