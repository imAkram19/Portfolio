import { useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
} from "framer-motion";
import { Monitor, Smartphone, ArrowUpRight } from "lucide-react";

export default function ProjectPreview({ project }) {
  const [mobile, setMobile] = useState(
    () => window.matchMedia("(max-width: 700px)").matches,
  );
  const reduce = useReducedMotion();
  const transition = { duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] };
  return (
    <div className="project-visual">
      <div className="project-toolbar">
        <span className="project-domain">
          {new URL(project.liveUrl).hostname}
        </span>
        <div className="view-toggle" aria-label={`${project.title} preview`}>
          {["Desktop", "Mobile"].map((label, i) => (
            <button
              key={label}
              aria-pressed={mobile === Boolean(i)}
              onClick={() => setMobile(Boolean(i))}
            >
              {i ? <Smartphone size={16} /> : <Monitor size={16} />}
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="preview-stage">
        <Motion.div
          layout={!reduce}
          className={"preview-frame " + (mobile ? "is-phone" : "is-desktop")}
          style={{ borderRadius: mobile ? 20 : 8 }}
          transition={{ layout: transition }}
        >
          <div className="preview-frame-bar" aria-hidden="true">
            {mobile ? (
              <span className="phone-speaker" />
            ) : (
              <span className="browser-dots">● ● ●</span>
            )}
          </div>
          <div className="preview-screen">
            <AnimatePresence initial={false}>
              <Motion.img
                key={mobile ? "phone" : "desktop"}
                src={project.images[mobile ? 1 : 0]}
                alt={`${project.title} ${mobile ? "mobile" : "desktop"} preview`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.2 }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>
        </Motion.div>
      </div>
      <div className="project-note">
        <span>{mobile ? "Mobile" : "Desktop"} preview</span>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          {project.linkLabel || "Open website"} <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
