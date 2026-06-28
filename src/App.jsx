import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "./data/slides";

const THEME_KEY = "beyond-the-scan-theme";
const LAST_SCREEN_INDEX = slides.length;

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute("content", theme === "dark" ? "#0d1016" : "#f4f1eb");
    }
  }, [theme]);

  return [theme, setTheme];
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb">{theme === "dark" ? "◐" : "☼"}</span>
      </span>
      <span className="theme-toggle__label">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}

function Visual({ type, title, image }) {
  /*
   * IMAGE INSERTION POINT
   * ---------------------
   * Replace the generated visual below with an actual image when a slide
   * benefits from photography, product renders, medical diagrams, or data art.
   *
   * Recommended markup:
   *
   * <img
   *   src="/images/your-image-name.webp"
   *   alt="Describe the meaning of the visual, not its appearance."
   *   className="visual__image"
   * />
   *
   * Store images inside: public/images/
   * Recommended format: WebP or AVIF
   * Recommended size: 1800 x 1350 px (4:3), under 500 KB where possible
   */
  return (
    <div className={`visual visual--${type}`}>
      {image ? (
        <img
          src={image}
          alt={`Visual supporting ${title}`}
          className="visual__image"
        />
      ) : (
        <>
          <div className="visual__glow" />
          <div className="visual__grid" />
          <div className="visual__shape visual__shape--one" />
          <div className="visual__shape visual__shape--two" />
          <div className="visual__shape visual__shape--three" />
          <div className="visual__label">
            <span>Signal</span>
            <strong>{type.replace("-", " ")}</strong>
          </div>
        </>
      )}
    </div>
  );
}

function Slide({ slide, index }) {
  return (
    <section
      className={`slide slide--${slide.accent}`}
      id={slide.id}
      data-slide-index={index}
      aria-labelledby={`${slide.id}-title`}
    >
      <div className="slide__surface">
        <div className="slide__content">
          <div className="slide__copy">
            <p className="slide__eyebrow">{slide.eyebrow}</p>
            <h2 className="slide__title" id={`${slide.id}-title`}>{slide.title}</h2>
            <p className="slide__subtitle">{slide.subtitle}</p>

            <div className="slide__body">
              {slide.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="implications">
              <p className="implications__label">Implications</p>
              <ul>
                {slide.implications.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            {slide.closing && (
              <div className="slide__closing">
                {slide.closing.map((line) => <p key={line}>{line}</p>)}
              </div>
            )}
          </div>

          <div className="slide__visual-wrap">
            <Visual
              type={slide.visualType}
              title={slide.title}
              image={slide.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero" id="intro" aria-labelledby="hero-title">
      <div className="hero__ambient hero__ambient--one" />
      <div className="hero__ambient hero__ambient--two" />
      <div className="hero__content">
        <p className="hero__eyebrow">Product vision · Research synthesis</p>
        <h1 className="hero__title" id="hero-title">Beyond<br />the Scan</h1>
        <p className="hero__lede">
          Turning a 60-second health measurement into an intelligent health experience.
        </p>
        <div className="hero__statement">
          <p>A front-camera scan can make important health signals more accessible.</p>
          <p>But access to measurements alone does not create trust, understanding, or lasting behavior.</p>
        </div>
      </div>
      <div className="keyboard-hint" aria-hidden="true">
        <span>Use</span><kbd>↓</kbd><span>to begin</span>
      </div>
    </section>
  );
}

function Progress({ activeIndex }) {
  return (
    <div className="progress" aria-label={`Presentation screen ${activeIndex + 1} of ${slides.length + 1}`}>
      <span className="progress__count">{String(activeIndex).padStart(2, "0")}</span>
      <div className="progress__track" aria-hidden="true">
        <span
          className="progress__fill"
          style={{ transform: `scaleX(${activeIndex / LAST_SCREEN_INDEX})` }}
        />
      </div>
      <span className="progress__count">{String(LAST_SCREEN_INDEX).padStart(2, "0")}</span>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const wheelDeltaRef = useRef(0);
  const wheelLockedRef = useRef(false);
  const wheelUnlockTimerRef = useRef(null);
  const touchStartYRef = useRef(null);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const navigateTo = useCallback((nextIndex) => {
    const currentIndex = activeIndexRef.current;
    const boundedIndex = Math.max(0, Math.min(LAST_SCREEN_INDEX, nextIndex));

    if (boundedIndex === currentIndex) return false;

    activeIndexRef.current = boundedIndex;
    setActiveIndex(boundedIndex);
    return true;
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      const currentIndex = activeIndexRef.current;

      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        navigateTo(currentIndex + 1);
      }

      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        navigateTo(currentIndex - 1);
      }

      if (event.key === "Home") {
        event.preventDefault();
        navigateTo(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        navigateTo(LAST_SCREEN_INDEX);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigateTo]);

  useEffect(() => {
    const WHEEL_THRESHOLD = 56;
    const WHEEL_COOLDOWN_MS = 800;

    const moveOneScreen = (step) => {
      const currentIndex = activeIndexRef.current;
      return navigateTo(currentIndex + step);
    };

    const unlockWheelNavigation = () => {
      window.clearTimeout(wheelUnlockTimerRef.current);
      wheelUnlockTimerRef.current = window.setTimeout(() => {
        wheelDeltaRef.current = 0;
        wheelLockedRef.current = false;
      }, WHEEL_COOLDOWN_MS);
    };

    const onWheel = (event) => {
      event.preventDefault();

      if (wheelLockedRef.current) return;

      wheelDeltaRef.current += event.deltaY;
      if (Math.abs(wheelDeltaRef.current) < WHEEL_THRESHOLD) return;

      const step = wheelDeltaRef.current > 0 ? 1 : -1;
      wheelDeltaRef.current = 0;
      wheelLockedRef.current = true;

      moveOneScreen(step);
      unlockWheelNavigation();
    };

    const onTouchStart = (event) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (event) => {
      if (touchStartYRef.current !== null) event.preventDefault();
    };

    const onTouchEnd = (event) => {
      if (touchStartYRef.current === null) return;

      const endY = event.changedTouches[0]?.clientY ?? touchStartYRef.current;
      const distance = touchStartYRef.current - endY;
      touchStartYRef.current = null;

      if (Math.abs(distance) < 48) return;
      moveOneScreen(distance > 0 ? 1 : -1);
    };

    document.addEventListener("wheel", onWheel, { passive: false, capture: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("wheel", onWheel, { capture: true });
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.clearTimeout(wheelUnlockTimerRef.current);
    };
  }, [navigateTo]);

  return (
    <div className="site-shell site-shell--locked">
      <header className="topbar">
        <button className="brand brand--button" type="button" onClick={() => navigateTo(0)} aria-label="Go to title slide">
          <span className="brand__mark" aria-hidden="true" />
          <span>Beyond the Scan</span>
        </button>

        <div className="topbar__actions">
          <Progress activeIndex={activeIndex} />
          <ThemeToggle theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
        </div>
      </header>

      <main className="locked-stage" id="presentation">
        <div className={`hero-layer ${activeIndex === 0 ? "is-active" : "is-hidden"}`}>
          <Hero />
        </div>

        <div className="card-stack" aria-live="polite">
          {slides.map((slide, slideIndex) => {
            const screenIndex = slideIndex + 1;
            const depth = activeIndex - screenIndex;
            const isActive = depth === 0;
            const isBehind = depth > 0;
            const isFuture = depth < 0;
            const visibleDepth = Math.min(Math.max(depth, 0), 10);

            return (
              <div
                className={`stack-card ${isActive ? "is-active" : ""} ${isBehind ? "is-behind" : ""} ${isFuture ? "is-future" : ""}`}
                key={slide.id}
                style={{
                  "--stack-depth": visibleDepth,
                  zIndex: screenIndex,
                }}
                aria-hidden={!isActive}
              >
                <Slide slide={slide} index={slideIndex} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
