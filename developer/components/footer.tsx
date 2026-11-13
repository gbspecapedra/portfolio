export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gisele Pecapedra</p>
          <a
            href="https://github.com/SEU_USER/SEU_REPO"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--signature)]"
          >
            View source on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
