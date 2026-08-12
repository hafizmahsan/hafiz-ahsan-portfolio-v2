const navigation = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight"
          aria-label="Hafiz Ahsan home"
        >
          HA<span className="text-primary">.</span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:border-primary/60 hover:bg-primary/10 md:block"
        >
          Let&apos;s talk
        </a>

        <a
          href="#contact"
          className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition-all hover:border-primary/60 hover:bg-primary/10 md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
