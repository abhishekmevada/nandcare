import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import "../style/Header.css";
import { motion } from "framer-motion";

/** Must match the breakpoint in Header.css (max-width: 1080px = mobile) */
const DESKTOP_QUERY = "(min-width: 1081px)";

type NavLink = { label: string; href: string };
type NavItem = { label: string; href?: string; links?: NavLink[] };

const MENU: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", links: [{ label: "Where We Work", href: "/" }] },
  {
    label: "Our work",
    links: [
      { label: "Hunger & Nutrition", href: "/areas/hunger-food-security" },
      { label: "Education", href: "/areas/education" },
      { label: "Livelihood", href: "/areas/livelihood" },
      { label: "Elderly care", href: "/areas/elderly-care" },
    ],
  },
  { label: "Our Impact", links: [{ label: "Gallery", href: "/" }] },
  { label: "Contact Us", href: "/" },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY >= window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}

/* ---------------------------------- Desktop --------------------------------- */

function DesktopNav() {
  const [open, setOpen] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  // close dropdown on outside click
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && open !== null) {
      triggers.current[open]?.focus();
      setOpen(null);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="nav"
      aria-label="Main"
      ref={navRef}
      onKeyDown={onKeyDown}
    >
      <ul className="nav__list pill">
        {MENU.map((item, i) =>
          item.links ? (
            <li
              key={item.label}
              className="nav__item"
              onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(i)}
              onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(null)}
            >
              <button
                type="button"
                className="nav__link"
                ref={(el) => {
                  triggers.current[i] = el;
                }}
                aria-expanded={open === i}
                aria-haspopup="true"
                aria-controls={`menu-${i}`}
                onClick={(e) => {
                  // mouse uses hover; touch & keyboard toggle on click
                  if ((e.nativeEvent as PointerEvent).pointerType === "mouse")
                    return;
                  setOpen(open === i ? null : i);
                }}
              >
                {item.label}
                <ChevronDown
                  size={16}
                  strokeWidth={2.5}
                  className="chevron"
                  aria-hidden="true"
                />
              </button>

              {open === i && (
                <div className="nav__drop" id={`menu-${i}`}>
                  <ul className="nav__panel">
                    {item.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} onClick={() => setOpen(null)}>
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li key={item.label} className="nav__item">
              <a className="nav__link" href={item.href}>
                {item.label}
              </a>
            </li>
          ),
        )}
      </ul>
    </motion.nav>
  );
}

/* ----------------------------------- Mobile ---------------------------------- */

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSub, setOpenSub] = useState<number | null>(null);

  return (
    <div className="mobile-menu" id="mobile-menu">
      <nav aria-label="Mobile">
        <ul className="mobile-menu__list">
          {MENU.map((item, i) =>
            item.links ? (
              <li key={item.label}>
                <button
                  type="button"
                  className="mobile-menu__link"
                  aria-expanded={openSub === i}
                  aria-controls={`mobile-sub-${i}`}
                  onClick={() => setOpenSub(openSub === i ? null : i)}
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    strokeWidth={2.5}
                    className="chevron"
                    aria-hidden="true"
                  />
                </button>

                {openSub === i && (
                  <ul className="mobile-menu__sub" id={`mobile-sub-${i}`}>
                    {item.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} onClick={onClose}>
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <a
                  className="mobile-menu__link"
                  href={item.href}
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>
      </nav>

      <div className="mobile-menu__actions">
        <button type="button" className="btn btn--ghost">
          Login
        </button>
        <button type="button" className="btn btn--cta">
          Donate
        </button>
      </div>
    </div>
  );
}

/* ----------------------------------- Header ---------------------------------- */

export default function Header() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // mobile menu open: lock page scroll + close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMobile();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen, closeMobile]);

  // close mobile menu when the viewport becomes desktop-sized
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => mq.matches && closeMobile();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [closeMobile]);

  const headerClass = [
    "header",
    scrolled && "is-scrolled",
    mobileOpen && "is-open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <motion.a
        href="/"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="brand pill"
      >
        <img src="/images/ncf_logo_nobg.webp" alt="" className="brand__logo" />
        <span className="brand__name">
          Nand Care
          <br />
          Foundation
        </span>
      </motion.a>

      <DesktopNav />

      <div className="actions">
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          type="button"
          className="btn btn--ghost actions__login"
          style={{ padding: "17px 20px" }}
        >
          Login
        </motion.button>
        <motion.button
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          type="button"
          className="cta-but"
          style={{ padding: "17px 20px" }}
        >
          Donate
        </motion.button>
        <button
          type="button"
          className="menu-toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && <MobileMenu onClose={closeMobile} />}
    </header>
  );
}
