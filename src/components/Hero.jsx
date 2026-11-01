import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Download, Pause, Play, ArrowRight } from "lucide-react";
export default function Hero() {
  const [featured, setFeatured] = useState(0);
  const reduce = useReducedMotion();
  const showcaseRef = useRef(null);
  const inView = useInView(showcaseRef);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  useEffect(() => {
    const onVisibility = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);
  useEffect(() => {
    if (reduce || paused || interacting || !inView || !tabVisible) return;
    const id = setInterval(() => setFeatured((i) => (i + 1) % 3), 5000);
    return () => clearInterval(id);
  }, [reduce, paused, interacting, inView, tabVisible]);
  const previews = [
    {
      name: "Iron Gym",
      image: "/projects/captures/gym-client-desktop.png",
      type: "Client website",
    },
    {
      name: "Gym staff",
      image: "/projects/captures/gym-staff-desktop.png",
      type: "Full-stack dashboard",
    },
    {
      name: "Digital PA",
      image: "/projects/captures/digital-pa-desktop.png",
      type: "Web experience",
    },
  ];
  return (
    <header className="hero" id="home">
      <nav className="navigation">
        <a className="wordmark" href="#home">
          Mohammad Akram
        </a>
        <div>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
      <div className="hero-body">
        <div className="hero-copy">
          <p className="intro">Mohammad Akram · Web development</p>
          <h1>
            WEB DEVELOPER
            <br />
            <span>& FREELANCER</span>
          </h1>
          <div className="hero-bottom">
            <div>
              <p className="hero-description">
                From the first idea to the final interaction.
                <br />I build websites and full-stack applications.
              </p>
              <div className="actions">
                <a className="button primary" href="tel:+918686080807">
                  Contact me <ArrowUpRight size={18} />
                </a>
                <a className="button secondary" href="/resume.pdf" download>
                  Download résumé <Download size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <aside
          ref={showcaseRef}
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onFocusCapture={() => setInteracting(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget))
              setInteracting(false);
          }}
          className="hero-showcase"
          aria-label="Featured project preview"
        >
          <div className="showcase-heading">
            <span>From my workspace</span>
            <button
              className="showcase-pause"
              onClick={() => setPaused(!paused)}
              aria-label={paused ? "Play showcase" : "Pause showcase"}
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
            </button>
          </div>
          <div
            className={
              "showcase-wiggle " +
              (paused || interacting || reduce || !inView || !tabVisible
                ? "motion-paused"
                : "")
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              <Motion.div
                key={featured}
                className="showcase-paper"
                initial={{
                  opacity: 0,
                  transform: reduce ? "none" : "translateY(8px) rotate(1deg)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateY(0) rotate(2deg)",
                }}
                exit={{
                  opacity: 0,
                  transform: reduce ? "none" : "translateY(-6px) rotate(2deg)",
                }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="paper-label">
                  <span>Selected / 0{featured + 1}</span>
                  <span>{previews[featured].type}</span>
                </div>
                <a href="#work" className="showcase-image">
                  <img
                    src={previews[featured].image}
                    alt={previews[featured].name + " project preview"}
                  />
                  <span className="image-link">
                    <ArrowUpRight size={22} />
                  </span>
                </a>
                <div className="showcase-caption">
                  <h2>{previews[featured].name}</h2>
                  <a href="#work" aria-label="Explore selected work">
                    <ArrowRight size={24} />
                  </a>
                </div>
              </Motion.div>
            </AnimatePresence>
          </div>
          <div className="showcase-tabs" aria-label="Choose a featured project">
            {previews.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setFeatured(i)}
                aria-pressed={featured === i}
              >
                <span>0{i + 1}</span>
                {p.name}
              </button>
            ))}
          </div>
        </aside>
      </div>
      <div className="hero-foot">
        <span>Available for work</span>
        <a href="#work">Explore selected work ↓</a>
      </div>
    </header>
  );
}
