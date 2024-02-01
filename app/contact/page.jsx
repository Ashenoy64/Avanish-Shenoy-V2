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
  const [notification, setNotifyText] = useState(0);
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
        .then(
          (response) => {
            handleNotification(1, "Mail has been sent");
            setLoading(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }).catch(
          (error) => {
            setLoading(false);
            handleNotification(2, "Failed to send mail");
          })
    } else {
      handleNotification(2, "Captcha failed");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="flex justify-center items-center h-screen  my-6">
      {notificationState != 0 && (
        <div className="toast toast-start z-10">
          {(notificationState == 1 && (
            <div className="alert alert-info flex flex-row">
              <div
                className="radial-progress  bg-info h-6 w-6"
                style={{ "--value": progress, "--thickness": "1px" }}
                role="progressbar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span>{notification}</span>
            </div>
          )) ||
            (notificationState == 2 && (
              <div className="alert alert-error flex flex-row">
                <div
                  className="radial-progress  bg-error h-6 w-6"
                  style={{ "--value": progress, "--thickness": "1px" }}
                  role="progressbar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span>{notification}</span>
              </div>
            ))}
        </div>
      )}

      <div className="backdrop-blur-md shadow-lg rounded-lg p-8 md:p-10 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-white">Contact Me</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-semibold">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered w-full max-w-md"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered w-full max-w-md"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-gray-700 font-semibold">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              name="subject"
              className="input input-bordered w-full max-w-md"
              onChange={handleChange}
              value={formData.subject}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message here"
              className="textarea textarea-bordered w-full max-w-md"
              rows="5"
              onChange={handleChange}
              name="message"
              value={formData.message}
              required
            ></textarea>
          </div>
          <div className="hidden">
          <Captcha  ref={recaptchaRef} size="invisible" sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}/>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full max-w-md outline"
            disabled={loading}
          >
            {!loading ? (
              "Send Message"
            ) : (
              <span
                className={`loading  loading-infinity loading-lg text-primary`}
              ></span>
            )}
          </button>
          
        </form>
      </div>
    </section>
  );
}
