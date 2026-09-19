import {
  ChevronRight,
  Instagram,
  MapPin,
  Send,
  Utensils,
} from "lucide-react";

const LOGO = "/chayhana-logo.svg";

const links = [
  {
    title: "MENU",
    subtitle: "Explore our dishes",
    href: "#menu",
    icon: "menu",
    featured: true,
  },
  {
    title: "INSTAGRAM",
    subtitle: "Behind the scenes",
    href: "https://instagram.com/",
    icon: "instagram",
  },
  {
    title: "TELEGRAM",
    subtitle: "News & updates",
    href: "https://t.me/",
    icon: "telegram",
  },
  {
    title: "ADDRESS",
    subtitle: "Find us on the map",
    href: "https://maps.google.com/",
    icon: "address",
  },
];

function LinkIcon({ type }) {
  if (type === "menu") {
    return (
      <span className="menu-icon" aria-hidden="true">
        <Utensils size={32} strokeWidth={1.65} />
      </span>
    );
  }

  if (type === "instagram") {
    return (
      <span className="instagram-icon" aria-hidden="true">
        <Instagram size={29} strokeWidth={2.2} />
      </span>
    );
  }

  if (type === "telegram") {
    return (
      <span className="telegram-icon" aria-hidden="true">
        <Send size={25} strokeWidth={2.15} />
      </span>
    );
  }

  return (
    <span className="address-icon" aria-hidden="true">
      <MapPin size={42} fill="currentColor" strokeWidth={1.45} />
    </span>
  );
}

export default function App() {
  return (
    <main className="site-shell">
      <section className="landing">
        <header className="hero">
          <img className="brand-logo" src={LOGO} alt="CHAYHANA EST.2004" />

          <p className="hero-copy">
            GOOD FOOD
            <br />
            BRINGS PEOPLE TOGETHER
          </p>

          <span className="hero-divider" aria-hidden="true" />
        </header>

        <section className="links-panel" aria-label="Chayhana links">
          <div className="link-list">
            {links.map((item) => {
              const external = item.href.startsWith("http");

              return (
                <a
                  key={item.title}
                  className={`link-card ${item.featured ? "link-card--featured" : ""}`}
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  aria-label={`${item.title}: ${item.subtitle}`}
                >
                  <LinkIcon type={item.icon} />

                  <span className="link-copy">
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>

                  <ChevronRight className="link-arrow" size={25} strokeWidth={1.8} />
                </a>
              );
            })}
          </div>

          <span className="footer-divider" aria-hidden="true" />
          <p className="footer-copy">TAP A BUTTON TO CONTINUE</p>
          <div className="footer-ornament" aria-hidden="true" />
        </section>
      </section>
    </main>
  );
}
