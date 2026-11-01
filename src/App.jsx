import { MotionConfig } from "framer-motion";
import { SmoothScroll, Welcome } from "./components/PageMotion";
import Hero from "./components/Hero";
import MissionServices from "./components/MissionServices";
import SelectedWork from "./components/SelectedWork";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <Welcome />
      <a className="skip-link" href="#skills">
        Skip to content
      </a>
      <Hero />
      <main>
        <MissionServices />
        <SelectedWork />
        <Contact />
      </main>
      <footer>
        <a href="#home">Akram</a>
        <span>Web developer & freelancer</span>
        <a href="#home">Back to top ↑</a>
      </footer>
      <Analytics />
    </MotionConfig>
  );
}
