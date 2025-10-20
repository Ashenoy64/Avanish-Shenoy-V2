"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Captcha from "react-google-recaptcha";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const recaptchaRef = useRef();

  const [loading, setLoading] = useState(false);
  const [notificationState, setNotifyState] = useState(0);
  const [notification, setNotifyText] = useState("");
  const [progress, setProgress] = useState(100);

  const handleNotification = (state, text) => {
    setNotifyState(state);
    setNotifyText(text);
    setProgress(100);
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 1);
    }, 20);

    setTimeout(() => {
      clearInterval(interval);
      setNotifyState(0);
    }, 2000);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const recaptchaResponse = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current.reset();

    const response = await fetch("/api/validatePathToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recaptchaResponse }),
    });

    if (response.ok) {
      const emailBody = {
        from_name: formData.name,
        subject_sub: formData.subject,
        to_name: "Avanish",
        message: formData.message,
        from_email: formData.email,
      };

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
          emailBody,
          process.env.NEXT_PUBLIC_EMAIL_JS
        )
        .then((response) => {
          handleNotification(1, "Mail has been sent successfully!");
          setLoading(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        })
        .catch((error) => {
          setLoading(false);
          handleNotification(2, "Failed to send mail. Please try again.");
        });
    } else {
      handleNotification(2, "Captcha validation failed");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16">
      {/* Toast Notifications */}
      {notificationState !== 0 && (
        <div className="toast toast-top toast-end z-50">
          {notificationState === 1 && (
            <div className="alert alert-success shadow-lg">
              <div className="flex items-center gap-3">
                <div
                  className="radial-progress bg-success text-success-content"
                  style={{ "--value": progress, "--size": "2rem", "--thickness": "3px" }}
                  role="progressbar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="font-medium">{notification}</span>
              </div>
            </div>
          )}
          {notificationState === 2 && (
            <div className="alert alert-error shadow-lg">
              <div className="flex items-center gap-3">
                <div
                  className="radial-progress bg-error text-error-content"
                  style={{ "--value": progress, "--size": "2rem", "--thickness": "3px" }}
                  role="progressbar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="font-medium">{notification}</span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Info Section */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Let's Work Together
              </h1>
              <p className="text-base-content/70 text-lg">
                Have a project in mind? I'm always open to discussing new opportunities,
                creative ideas, or partnerships.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="card bg-base-200 hover:bg-base-300 transition-colors">
                <div className="card-body flex-row items-center gap-4 p-4 sm:p-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-base-content/60">Email</h3>
                    <p className="text-base sm:text-lg">your.email@example.com</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="card bg-base-200 hover:bg-base-300 transition-colors">
                <div className="card-body flex-row items-center gap-4 p-4 sm:p-6">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-base-content/60">Location</h3>
                    <p className="text-base sm:text-lg">India</p>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="card bg-base-200 hover:bg-base-300 transition-colors">
                <div className="card-body flex-row items-center gap-4 p-4 sm:p-6">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-base-content/60">Response Time</h3>
                    <p className="text-base sm:text-lg">Within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-3 text-base-content/70">Connect with me</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Ashenoy64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost hover:btn-primary"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost hover:btn-primary"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost hover:btn-primary"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="card bg-base-200 shadow-2xl">
            <div className="card-body p-6 sm:p-8">
              <h2 className="card-title text-2xl sm:text-3xl mb-2">Send a Message</h2>
              <p className="text-base-content/70 mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Name</span>
                    <span className="label-text-alt text-error">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="input input-bordered w-full focus:input-primary"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                    <span className="label-text-alt text-error">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="input input-bordered w-full focus:input-primary"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                  <label className="label">
                    <span className="label-text-alt text-base-content/60">
                      We'll never share your email
                    </span>
                  </label>
                </div>

                {/* Subject Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Subject</span>
                    <span className="label-text-alt text-error">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    className="input input-bordered w-full focus:input-primary"
                    onChange={handleChange}
                    value={formData.subject}
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Message</span>
                    <span className="label-text-alt text-error">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    className="textarea textarea-bordered h-32 w-full focus:textarea-primary resize-none"
                    onChange={handleChange}
                    value={formData.message}
                    required
                  ></textarea>
                  <label className="label">
                    <span className="label-text-alt text-base-content/60">
                      {formData.message.length} characters
                    </span>
                  </label>
                </div>

                {/* reCAPTCHA */}
                <div className="hidden">
                  <Captcha
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-full gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
