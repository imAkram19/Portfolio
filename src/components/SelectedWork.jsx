import { Reveal } from "./PageMotion";
import ProjectPreview from "./ProjectPreview";
import { ArrowUpRight } from "lucide-react";
export default function SelectedWork() {
  const projects = [
    {
      id: "gym-client",
      title: "IRON GYM",
      category: "Full-stack project · Client website",
      description:
        "The public face of a connected gym platform: coaching, membership plans, and a member leaderboard in one responsive experience.",
      features: [
        "Membership plans",
        "Member rank finder",
        "Coach & gym information",
      ],
      tags: ["REACT", "TYPESCRIPT", "TAILWIND CSS"],
      images: [
        "/projects/captures/gym-client-desktop.png",
        "/projects/captures/gym-client-mobile.png",
      ],
      liveUrl: "https://iron-gym-hnk.vercel.app/",
      linkLabel: "Visit client website",
    },
    {
      id: "gym-staff",
      title: "IRON GYM / STAFF",
      category: "Same platform · Staff dashboard",
      description:
        "A reception workspace for memberships, attendance, and check-ins. A Node.js sync agent connects ZKTeco K40 fingerprint hardware to the cloud database.",
      features: [
        "Biometric attendance sync",
        "Membership expiry tracking",
        "Live check-in dashboard",
      ],
      tags: ["REACT", "TYPESCRIPT", "SUPABASE", "NODE.JS"],
      images: [
        "/projects/captures/gym-staff-desktop.png",
        "/projects/captures/gym-staff-mobile.png",
      ],
      liveUrl: "https://iron-gym-hnk.vercel.app/login",
      linkLabel: "Open staff login",
    },

    {
      id: 1,
      title: "DIGITAL PA",
      category: "Agency website \u00b7 Digital services",
      description:
        "A service-led website for a digital agency, bringing its marketing, branding, and web development offerings together with a clear route to enquiry.",
      features: [
        "Service showcase",
        "Portfolio presentation",
        "Direct contact links",
      ],
      year: "2024",
      tags: ["REACT", "TAILWIND CSS", "FRAMER MOTION"],
      images: [
        "/projects/captures/digital-pa-desktop.png",
        "/projects/captures/digital-pa-mobile.png",
      ],
      bgColor: "#f5f1ed",
      bgPattern:
        "linear-gradient(to right, rgba(16, 137, 150, 0.15), rgba(16, 137, 150, 0.15) 5px, transparent 5px, transparent)",
      bgSize: "20px 100%",
      liveUrl: "https://digitalpa.vercel.app/",
      status: "live",
    },
    {
      id: 2,
      title: "LANDING PAGE",
      category: "Personal portfolio \u00b7 Creative professional",
      description:
        "A visual portfolio for a graphic designer and digital marketer, combining a bold introduction with experience, capabilities, and selected creative work.",
      features: [
        "Animated hero presentation",
        "Experience & skills overview",
        "Design & marketing work",
      ],
      year: "2024",
      tags: ["LENIS", "CANVAS API", "VERCEL ANALYTICS"],
      images: [
        "/projects/captures/landing-page-desktop.png",
        "/projects/captures/landing-page-mobile.png",
      ],
      bgColor: "#f5f1ed",
      bgPattern:
        "linear-gradient(to right, rgba(16, 137, 150, 0.15), rgba(16, 137, 150, 0.15) 5px, transparent 5px, transparent)",
      bgSize: "20px 100%",
      liveUrl: "https://shawaiz-7.vercel.app/",
      status: "live",
    },
    {
      id: 3,
      title: "STUDY ABROAD",
      category: "Landing page \u00b7 Education consultancy",
      description:
        "A focused website for a Germany-focused education and visa consultancy, organising study options, language courses, and consultation enquiries.",
      features: [
        "German course levels A1\u2013B2",
        "Study & work information",
        "WhatsApp consultation links",
      ],
      year: "2024",
      tags: ["WHATSAPP LINKS", "TAILWIND CSS", "REACT"],
      images: [
        "/projects/captures/study-abroad-desktop.png",
        "/projects/captures/study-abroad-mobile.png",
      ],
      bgColor: "#f5f1ed",
      bgPattern:
        "linear-gradient(to right, rgba(16, 137, 150, 0.15), rgba(16, 137, 150, 0.15) 5px, transparent 5px, transparent)",
      bgSize: "20px 100%",
      liveUrl: "https://visas-vision.vercel.app/",
      status: "live",
    },
    {
      id: 5,
      title: "WEATHER NOW",
      category: "Web application \u00b7 Weather search",
      description:
        "A city-based weather app that turns a location search into a clear snapshot of current conditions, temperature, humidity, and wind speed.",
      features: [
        "City search & suggestions",
        "Current weather conditions",
        "Humidity & wind readings",
      ],
      year: "2024",
      tags: ["REACT", "API", "TAILWIND CSS"],
      images: [
        "/projects/captures/weather-now-desktop.png",
        "/projects/captures/weather-now-mobile.png",
      ],
      bgColor: "#f5f1ed",
      bgPattern:
        "linear-gradient(to right, rgba(16, 137, 150, 0.15), rgba(16, 137, 150, 0.15) 5px, transparent 5px, transparent)",
      bgSize: "20px 100%",
      liveUrl: "https://weather-now-opal.vercel.app/",
      status: "live",
    },
  ];

  return (
    <section className="section" id="work">
      <div className="section-heading">
        <span className="index-label">02 / Selected work</span>
        <h2>Ideas, made real.</h2>
        <p>A selection of websites and applications I’ve worked on.</p>
      </div>
      <div className="projects">
        {projects.map((p, i) => (
          <Reveal key={p.id}>
            <Project project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
function Project({ project: p, index }) {
  return (
    <article className={"project project-" + index}>
      <div className="project-story">
        <span className="project-number">0{index + 1}</span>
        <div>
          <span className="index-label">
            {p.category ||
              (p.title === "WEATHER NOW"
                ? "Web application"
                : "Web experience")}
          </span>
          <h3>{p.title}</h3>
          {p.description && (
            <p className="project-description">{p.description}</p>
          )}
          {p.features && (
            <ul className="project-features">
              {p.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
          <p className="project-stack">{p.tags.join(" / ")}</p>
          <a
            className="project-visit"
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {p.linkLabel || "Explore website"} <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
      <ProjectPreview project={p} />
    </article>
  );
}
