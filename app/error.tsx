"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-neutral-900">
      <p className="font-serif text-body text-neutral-600 mb-4">
        Something went wrong.
      </p>
      {process.env.NODE_ENV === "development" && error?.message && (
        <p className="font-serif text-label text-neutral-400 mb-4 max-w-md">
          {error.message}
        </p>
      )}
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="font-serif text-nav tracking-[0.08em] text-neutral-900 underline hover:no-underline"
        >
          Try again
        </button>
        <a
          href="/"
          className="font-serif text-nav tracking-[0.08em] text-neutral-900 underline hover:no-underline"
        >
          Return home
        </a>
      </div>
    </div>
  );
}
