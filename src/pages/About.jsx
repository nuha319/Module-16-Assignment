import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro.jsx";

const values = [
  ["Curiosity", "We ask questions, explore possibilities, and keep learning."],
  ["Empathy", "We listen carefully and consider different perspectives."],
  ["Purpose", "We focus on work that solves real problems and creates value."],
];

export default function About() {
  return (
    <>
      {/* Section 1: Page Introduction */}
      <PageIntro
        eyebrow="GET TO KNOW US"
        title={
          <>
            A little about
            <br />
            <span className="gradient-text">who we are.</span>
          </>
        }
        description="Northstar is a small creative studio built around a simple idea: thoughtful work can make everyday experiences better."
      />

      <div className="container">
        {/* Section 2: Our Story */}
        <section className="split-section section-space">
          <div className="visual-card">
            <span className="visual-label">OUR NORTH STAR</span>
            <div className="star-symbol">✳</div>
            <span className="visual-caption">Stay curious. Keep moving.</span>
          </div>

          <div className="section-copy">
            <p className="eyebrow">OUR STORY</p>
            <h2>Built around a better way forward.</h2>
            <p>
              We bring strategy, creativity, and technology together to help
              ideas become useful experiences. Our approach is collaborative,
              considered, and grounded in the needs of people.
            </p>
            <p>
              Whether a project starts with a clear plan or just a question,
              progress begins by understanding what matters most.
            </p>
          </div>
        </section>

        {/* Section 3: Our Values and Stats Panel */}
        <section className="section-space">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT GUIDES US</p>
              <h2>
                Our values, <span className="muted">in action.</span>
              </h2>
            </div>
            <p>
              These principles shape how we think, work, and make decisions.
            </p>
          </div>

          <div className="three-grid">
            {values.map(([t, d], i) => (
              <article className="info-card" key={t}>
                <span className="card-number">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>

          <div className="stats-panel">
            <div>
              <strong>01</strong>
              <span>Curious mindset</span>
            </div>
            <div>
              <strong>02</strong>
              <span>People-first thinking</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Room to grow</span>
            </div>
          </div>
        </section>

        {/* Section 4: Call to Action */}
        <section className="cta-panel section-space">
          <div>
            <p className="eyebrow">WORK WITH US</p>
            <h2>Let's make something matter.</h2>
            <p>We would love to hear what you are thinking about.</p>
          </div>
          <Link className="button button-dark" to="/contact">
            Get in touch ↗
          </Link>
        </section>
      </div>
    </>
  );
}
