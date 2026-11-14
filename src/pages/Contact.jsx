import { useState } from "react";
import PageIntro from "../components/PageIntro.jsx";

const faqs = [
  {
    question: "What kind of projects can we discuss?",
    answer:
      "We welcome conversations about web design, digital experiences, creative direction, and front-end development.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply complete the contact form and tell us a little about your idea. We can discuss the next steps together.",
  },
  {
    question: "Can we work remotely?",
    answer:
      "Yes! We are open to collaborating with people and teams from different locations.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <>
      {/* Section 1: Page Introduction */}
      <PageIntro
        eyebrow="SAY HELLO"
        title={
          <>
            Let's start a<br />
            <span className="gradient-text">conversation.</span>
          </>
        }
        description="Have a question, an idea, or a project in mind? Send a message using the form below."
      />

      <div className="container">
        {/* Section 2: Contact Layout */}
        <section className="contact-layout section-space">
          <div className="contact-aside">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Good things begin with a hello.</h2>
            <p>
              Tell us a little about what you are working on. We would be happy
              to hear from you.
            </p>

            <div className="contact-detail">
              <span className="detail-icon">✉</span>
              <div>
                <small>EMAIL</small>
                <strong>hello@northstar.example</strong>
              </div>
            </div>

            <div className="contact-detail">
              <span className="detail-icon">⌖</span>
              <div>
                <small>LOCATION</small>
                <strong>Available worldwide</strong>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />

            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your idea..."
              required
            />

            <button className="button button-dark" type="submit">
              Send message →
            </button>

            {submitted && (
              <p className="success-message" role="status">
                Thanks! Your message has been captured in this demo form.
              </p>
            )}

            <p className="form-note">
              Demo form only — it does not send data to a server.
            </p>
          </form>
        </section>

        {/* Section 3: Frequently Asked Questions */}
        <section className="faq-section section-space">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GOT QUESTIONS?</p>
              <h2>
                A few things <span className="muted">to know.</span>
              </h2>
            </div>
            <p>
              Here are some answers to questions you might have before getting
              in touch.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <article className="faq-item" key={faq.question}>
                <span className="card-number">0{index + 1}</span>
                <div>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 4: Contact Bottom */}
        <section className="contact-bottom section-space">
          <p className="eyebrow">NO PRESSURE, JUST A CONVERSATION</p>
          <h2>Every good project starts somewhere.</h2>
          <p>We look forward to hearing from you.</p>
        </section>
      </div>
    </>
  );
}
