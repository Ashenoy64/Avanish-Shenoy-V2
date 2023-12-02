export default function ContactPage() {
    return (
      <section className="flex justify-center items-center h-screen ">
        <div className="backdrop-blur-md shadow-lg rounded-lg p-8 md:p-10 max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-white">Contact Me</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-semibold">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-semibold">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-gray-700 font-semibold">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-semibold">Message</label>
              <textarea
                id="message"
                placeholder="Your Message here"
                className="textarea textarea-bordered w-full max-w-md"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full max-w-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  