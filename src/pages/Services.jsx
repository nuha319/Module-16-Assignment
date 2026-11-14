import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro.jsx";

const services = [
  [
    "01",
    "Digital experiences",
    "Clear, accessible interfaces that help people complete what they came to do.",
    "Web design · Responsive layouts",
  ],
  [
    "02",
    "Creative direction",
    "A consistent visual language that gives your idea a recognizable personality.",
    "Visual identity · Design systems",
  ],
  [
    "03",
    "Web development",
    "Thoughtful front-end experiences built to be responsive, reliable, and easy to use.",
    "React · Front-end development",
  ],
];

export default function Services() {
  return (
    <>
      {/* Section 1: Page Introduction */}
      <PageIntro
        eyebrow="WHAT WE CAN DO"
        title={
          <>
            Useful work, made
            <br />
            <span className="gradient-text">with intention.</span>
          </>
        }
        description="A practical mix of creative and digital services to help your next idea take shape."
      />

      <div className="container">
        {/* Section 2: Services List */}
        <section className="services-list section-space">
          {services.map(([n, t, d, tags]) => (
            <article className="service-row" key={n}>
              <span className="card-number">{n}</span>
              <div>
                <h2>{t}</h2>
                <p>{d}</p>
                <span className="service-tags">{tags}</span>
              </div>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </section>

        {/* Section 3: How We Work + Feature Banner */}
        <section className="process-section section-space">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW WE WORK</p>
              <h2>
                A clear path <span className="muted">from idea to done.</span>
              </h2>
            </div>
            <p>We keep the process collaborative and easy to follow.</p>
          </div>

          <div className="process-grid">
            {[
              [
                "01",
                "Discover",
                "Understand the goal, audience, and opportunity.",
              ],
              ["02", "Shape", "Explore ideas and agree on a useful direction."],
              ["03", "Create", "Design, build, and refine the experience."],
              ["04", "Deliver", "Share the result and learn what comes next."],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>

          {/* Feature Banner content is now inside How We Work */}
          <div className="feature-banner">
            <div>
              <p className="eyebrow">MADE FOR REAL PEOPLE</p>
              <h2>
                Simple to use.
                <br />
                Thoughtful by design.
              </h2>
              <p>
                Every decision should make the experience clearer, more useful,
                or more welcoming.
              </p>
            </div>
            <div className="feature-mark">✳</div>
          </div>
        </section>

        {/* Section 4: Call to Action */}
        <section className="cta-panel section-space">
          <div>
            <p className="eyebrow">LET'S GET STARTED</p>
            <h2>Tell us what you need.</h2>
            <p>We can figure out the next step together.</p>
          </div>
          <Link className="button button-dark" to="/contact">
            Discuss a project ↗
          </Link>
        </section>
      </div>
    </>
  );
}
