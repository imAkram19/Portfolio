import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
} from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
export function SmoothScroll() {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.1,
      syncTouch: false,
    });
    return () => lenis.destroy();
  }, [reduce]);
  return null;
}
export function Reveal({ children, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <Motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  );
}
export function Welcome() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setVisible(false), reduce ? 350 : 1600);
    return () => clearTimeout(id);
  }, [reduce]);
  return (
    <AnimatePresence>
      {visible && (
        <Motion.div
          className="welcome-screen"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { transform: "translateY(-100%)" }}
          transition={{ duration: 0.65, ease: [0.77, 0, 0.175, 1] }}
        >
          <span className="welcome-note">
            A little thought. A lot of craft.
          </span>
          <div className="welcome-title">
            <Motion.span
              initial={
                reduce ? false : { opacity: 0, transform: "translateY(32px)" }
              }
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Welcome<span className="welcome-dot">.</span>
            </Motion.span>
          </div>
          <div className="welcome-signature">
            <span>Mohammad Akram</span>
            <span>Web developer & freelancer</span>
          </div>
          <Motion.div
            className="welcome-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduce ? 0 : 1.4, ease: "easeInOut" }}
          />
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
