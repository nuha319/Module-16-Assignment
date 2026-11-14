import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";

function Home() {
  return (
    <>
      {/* SECTION 1: Page Introduction */}
      <PageIntro
        eyebrow="WELCOME TO NORTHSTAR"
        title={
          <>
            Thoughtful ideas.
            <br />
            <span className="gradient-text">Meaningful solutions.</span>
          </>
        }
        description="We help turn complex challenges into simple, thoughtful digital experiences through creativity, strategy, and technology."
      />

      {/* SECTION 2: Hero Panel */}
      <section className="container section-space">
        <div className="hero-panel">
          <div className="hero-content">
            <span className="pill">Ideas into impact</span>

            <h2>
              Make your next
              <br />
              big idea happen.
            </h2>

            <p>
              We combine thoughtful design, technology, and a problem-solving
              mindset to create solutions that make a difference.
            </p>

            <Link to="/services" className="button button-light">
              Explore our services <span>→</span>
            </Link>
          </div>

          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit-core">N</div>
            <span className="spark">✦</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: Our Approach */}
      <section className="container section-space">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT GUIDES US</p>
            <h2>
              A better way to
              <br />
              <span className="muted">move forward.</span>
            </h2>
          </div>

          <p>
            Every successful solution starts with understanding the problem and
            ends with creating meaningful value.
          </p>
        </div>

        <div className="three-grid">
          <div className="info-card">
            <span className="card-number">01 / UNDERSTAND</span>
            <h3>Start with people</h3>
            <p>
              We listen, ask questions, and understand the needs behind every
              challenge before creating a solution.
            </p>
          </div>

          <div className="info-card">
            <span className="card-number">02 / CREATE</span>
            <h3>Think with purpose</h3>
            <p>
              We turn ideas into practical solutions through thoughtful
              planning, creativity, and collaboration.
            </p>
          </div>

          <div className="info-card">
            <span className="card-number">03 / DELIVER</span>
            <h3>Make an impact</h3>
            <p>
              We focus on delivering useful, reliable experiences that create
              lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Quote and CTA */}
      <section className="container section-space">
        <div className="home-closing-section">
          <div className="quote-section">
            <p className="eyebrow">A SIMPLE BELIEF</p>

            <blockquote>
              “The best solutions make the complicated feel wonderfully simple.”
            </blockquote>

            <span className="quote-caption">The Northstar point of view</span>
          </div>

          <div className="cta-panel">
            <div>
              <p className="eyebrow">HAVE AN IDEA?</p>
              <h2>Let's make it happen.</h2>
              <p>
                Have a project or challenge in mind? We'd love to hear from you.
              </p>
            </div>

            <Link to="/contact" className="button button-dark">
              Get in touch <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
