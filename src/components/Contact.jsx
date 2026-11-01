import { useState, useRef } from "react";
import { Reveal } from "./PageMotion";
import { Send, Mail, Linkedin, Github, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error("FAILED...", err);
      setError("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:iamakram1902@gmail.com", label: "Email" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHPXkSOFD4gjAAAAZrUCMlo2s-nLzw1Er8XAkTC7a_RQydh2wU3GhDkUnmjl3jr_TKqlhm8F0-MtbDvrKmdaV5aJiWIZxZVNViObBcO8QASp283G_RS35T78ZCrem-SIII9BCQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmohammad-akram%2F%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/imAkram19", label: "GitHub" },
    { icon: Phone, href: "tel:+918686080807", label: "Phone" },
  ];

  return (
    <section id="contact" className="contact-section">
      <Reveal className="contact-copy">
        <span className="index-label">03 / Get in touch</span>
        <h2>
          Let’s build
          <br />
          something good.
        </h2>
        <p>
          Have a website in mind? Tell me what you’re building. I’m open to
          freelance projects and development opportunities.
        </p>
        <div className="contact-socials">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              <s.icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </Reveal>
      <Reveal className="contact-form-wrap">
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              autoComplete="name"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              autoComplete="email"
              type="email"
              inputMode="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project"
            />
          </div>
          {error && (
            <p role="alert" className="form-error">
              {error}
            </p>
          )}
          <button
            className="button primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Sending…"
              : isSubmitted
                ? "Message sent"
                : "Send message"}
            <Send size={18} />
          </button>
          <span className="form-status" role="status">
            {isSubmitted ? "Thanks. Your message has been sent." : ""}
          </span>
        </form>
      </Reveal>
    </section>
  );
};
export default Contact;
