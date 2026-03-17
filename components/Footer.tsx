"use client";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border min-h-screen flex flex-col justify-center py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a
              href="/enquiries"
              className="font-times text-xs uppercase text-foreground hover:opacity-70 transition-opacity"
            >
              Enquire
            </a>
          </div>
          <div>
            <a
              href="#"
              className="font-times text-xs uppercase text-foreground hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </a>
          </div>
          <div>
            <a
              href="https://instagram.com/steveosmith"
              target="_blank"
              rel="noopener noreferrer"
              className="font-times text-xs uppercase text-foreground hover:opacity-70 transition-opacity"
            >
              Instagram
            </a>
          </div>
          <div className="lg:col-span-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <label htmlFor="subscribe-email" className="sr-only">
                Email for newsletter
              </label>
              <input
                id="subscribe-email"
                type="email"
                placeholder="Email"
                className="flex-1 min-w-0 px-4 py-3 border border-border bg-transparent font-times text-xs text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-0"
              />
              <button
                type="submit"
                className="font-times text-xs uppercase text-foreground border border-border px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <p className="mt-12 font-times text-xs text-foreground/60">
          © 2026 Steve O Smith
        </p>
      </div>
    </footer>
  );
}
