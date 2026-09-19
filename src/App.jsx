import {
  ChevronRight,
  Instagram,
  MapPin,
  Send,
  UtensilsCrossed,
} from "lucide-react";

const LINKS = [
  {
    title: "MENU",
    subtitle: "Explore our dishes",
    href: "#menu",
    icon: UtensilsCrossed,
    featured: true,
  },
  {
    title: "INSTAGRAM",
    subtitle: "Behind the scenes",
    href: "https://instagram.com/",
    icon: Instagram,
  },
  {
    title: "TELEGRAM",
    subtitle: "News & updates",
    href: "https://t.me/",
    icon: Send,
  },
  {
    title: "ADDRESS",
    subtitle: "Find us on the map",
    href: "https://maps.google.com/",
    icon: MapPin,
  },
];

function TeapotMark() {
  return (
    <svg className="teapot" viewBox="0 0 260 170" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M68 63h123l-11 19H81z" />
        <path d="M83 82h95l-8 51H92z" />
        <path d="M92 103c16-20 29-20 45 0 16-20 29-20 45 0" />
        <path d="M73 88c-31-2-49 11-49 33 0 18 14 29 34 25 13-3 22-12 28-24" />
        <path d="M181 90c23-7 39-20 55-38 4 22-8 43-40 60" />
        <path d="M98 61c1-15 14-25 31-25s30 10 31 25" />
        <path d="M119 36c0-12 7-21 10-24 3 3 10 12 10 24" />
      </g>
    </svg>
  );
}

function App() {
  return (
    <main className="page-shell">
      <section className="phone-page">
        <header className="hero">
          <div className="pattern" />

          <div className="brand">
            <TeapotMark />
            <h1>CHAYHANA</h1>

            <div className="est">
              <span />
              <b>EST. 2004</b>
              <span />
            </div>
          </div>

          <p className="tagline">
            GOOD FOOD
            <br />
            BRINGS PEOPLE TOGETHER
          </p>

          <div className="gold-line" />
        </header>

        <section className="actions-panel" aria-label="Restaurant links">
          <div className="actions">
            {LINKS.map(({ title, subtitle, href, icon: Icon, featured }) => (
              <a
                key={title}
                className={`action-card ${featured ? "featured" : ""}`}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className={`icon-wrap ${title.toLowerCase()}`}>
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <div className="action-copy">
                  <strong>{title}</strong>
                  <span>{subtitle}</span>
                </div>

                <ChevronRight
                  className="chevron"
                  size={25}
                  strokeWidth={1.8}
                />
              </a>
            ))}
          </div>

          <div className="footer-divider" />
          <p className="tap-text">TAP A BUTTON TO CONTINUE</p>
          <div className="ornament" aria-hidden="true" />
        </section>
      </section>
    </main>
  );
}

export default App;
