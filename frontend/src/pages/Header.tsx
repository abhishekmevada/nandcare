import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import "../style/Header.css";

type MenuItem = {
  label: string;
  href?: string;
  links?: { label: string; href: string }[];
};

const menu: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About us",
    links: [
      { label: "The entity", href: "/about/entity" },
      { label: "Vision & mission", href: "/about/vision-mission" },
      { label: "Reach & scale", href: "/about/reach-scale" },
    ],
  },
  {
    label: "Area we work",
    links: [
      { label: "Hunger & food security", href: "/areas/hunger-food-security" },
      { label: "Education", href: "/areas/education" },
      { label: "Livelihood", href: "/areas/livelihood" },
      { label: "Elderly care", href: "/areas/elderly-care" },
    ],
  },
  {
    label: "Campaigns",
    links: [
      {
        label: "A meal of dignity for elders",
        href: "/campaigns/meal-of-dignity",
      },
      { label: "All campaigns", href: "/campaigns" },
      { label: "Past campaigns", href: "/campaigns/past" },
    ],
  },
  {
    label: "Partnership",
    links: [
      { label: "CSR & corporate partnerships", href: "/partnership/csr" },
    ],
  },
  {
    label: "Get involved",
    links: [
      { label: "Volunteer", href: "/volunteer" },
      { label: "Donor wall", href: "/donor-wall" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Impact stories", href: "/impact-stories" },
      { label: "Donor wall", href: "/donor-wall" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

export default function Header() {
  const [changeBg, setChangeBg] = useState(false);
  const [open, setOpen] = useState<number | null>(null); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<number | null>(null);
  const [headerH, setHeaderH] = useState(76);

  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSub(null);
  };

  useEffect(() => {
    const handleScroll = () =>
      setChangeBg(window.scrollY >= window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // desktop: close dropdown when clicking outside
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setOpen(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // mobile: measure header, lock page scroll, close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    setHeaderH(headerRef.current?.offsetHeight ?? 76);
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  // close the mobile menu if the window becomes wide
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1081px)");
    const onChange = () => {
      if (mq.matches) closeMobile();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const onNavKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && open !== null) {
      triggers.current[open]?.focus();
      setOpen(null);
    }
  };
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <header
        ref={headerRef}
        className={`${changeBg ? "headerContainerActive" : "headerContainer"}${
          mobileOpen ? " menuOpen" : ""
        }`}
      >
        <div className="headerLogoBox">
          <img
            src="./images/ncf_logo_nobg.webp"
            alt="Nand Care Foundation"
            className="headerLogo"
          />
          <p>
            Nand Care
            <br />
            Foundation
          </p>
        </div>

        {/* desktop menu */}
        <nav
          className="headerNav"
          aria-label="Main"
          ref={navRef}
          onKeyDown={onNavKeyDown}
        >
          <ul>
            {menu.map((item, i) =>
              item.links ? (
                <li
                  key={item.label}
                  className="navItem"
                  onPointerEnter={(e) =>
                    e.pointerType === "mouse" && setOpen(i)
                  }
                  onPointerLeave={(e) =>
                    e.pointerType === "mouse" && setOpen(null)
                  }
                >
                  <button
                    type="button"
                    className="navLink"
                    ref={buttonRef}
                    aria-expanded={open === i}
                    aria-haspopup="true"
                    aria-controls={`menu-${i}`}
                    onClick={(e) => {
                      if (
                        (e.nativeEvent as PointerEvent).pointerType === "mouse"
                      )
                        return;
                      setOpen(open === i ? null : i);
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      strokeWidth={2.5}
                      className="navChevron"
                      aria-hidden="true"
                    />
                  </button>
                  {open === i && (
                    <div className="navDrop" id={`menu-${i}`}>
                      <ul className="navPanel">
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
                <li key={item.label} className="navItem">
                  <a className="navLink" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="headerBox">
          <button className="gost-but">login</button>
          <button className="cta-but">Donate</button>
          <button
            type="button"
            className="menuToggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* mobile menu */}
      {mobileOpen && (
        <div className="mobileMenu" id="mobile-menu" style={{ top: headerH }}>
          <nav aria-label="Mobile">
            <ul className="mList">
              {menu.map((item, i) =>
                item.links ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      className="mLink"
                      aria-expanded={mobileSub === i}
                      aria-controls={`mobile-sub-${i}`}
                      onClick={() => setMobileSub(mobileSub === i ? null : i)}
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        strokeWidth={2.5}
                        className="navChevron"
                        aria-hidden="true"
                      />
                    </button>
                    {mobileSub === i && (
                      <ul className="mSub" id={`mobile-sub-${i}`}>
                        {item.links.map((l) => (
                          <li key={l.label}>
                            <a href={l.href} onClick={closeMobile}>
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <a className="mLink" href={item.href} onClick={closeMobile}>
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <div className="mActions">
            <button className="gost-but">Login</button>
            <button className="cta-but">Donate</button>
          </div>
        </div>
      )}
    </>
  );
}
