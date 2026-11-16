
function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen w-full px-6 md:px-16 pt-28 pb-16 scroll-mt-20 bg-[#111827]"
        >

            {/* Main Container */}

            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}

                <div className="flex flex-col items-start">

                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Get In{" "}
                        <span className="text-blue-400">Touch</span>
                        <span className="text-blue-400">.</span>
                    </h2>

                    {/* Heading Underline */}

                    <div className="mt-4 h-1 w-20 rounded-full bg-blue-400"></div>

                    {/* Introduction */}

                    <p className="mt-6 max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed">
                        Have a project idea, a question, or just want to
                        connect? Feel free to reach out. I'd be happy
                        to hear from you.
                    </p>

                </div>

                {/* Contact Grid */}

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Section - Contact Information */}

                    <div className="border border-slate-700 rounded-2xl p-6 md:p-8">

                        <h3 className="text-2xl font-bold text-white">
                            Let's Connect
                        </h3>

                        <p className="mt-4 text-slate-400 leading-7">
                            I'm always interested in learning, sharing ideas,
                            and connecting with people who enjoy technology
                            and creativity.
                        </p>

                        {/* Social Links */}

                        <div className="mt-10">

                            <h4 className="text-lg font-semibold text-white">
                                Find Me Online
                            </h4>

                            <div className="mt-5 flex flex-col gap-4">

                                {/* GitHub */}

                                <a
                                    href="https://github.com/YOUR_USERNAME"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl border border-slate-700 bg-slate-800/40 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                                >
                                    GitHub
                                </a>

                                {/* Chess.com */}

                                <a
                                    href="https://www.chess.com/member/YOUR_USERNAME"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl border border-slate-700 bg-slate-800/40 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                                >
                                    Chess.com
                                </a>

                            </div>

                        </div>

                        {/* Bottom Message */}

                        <div className="mt-10 border-t border-slate-700 pt-5">
                            <p className="text-sm text-slate-500">
                                Let's create something meaningful.
                            </p>
                        </div>

                    </div>

                    {/* Right Section - Contact Form */}

                    <div className="border border-slate-700 rounded-2xl p-6 md:p-8">

                        <h3 className="text-2xl font-bold text-white">
                            Send a Message
                        </h3>

                        <form className="mt-8 flex flex-col gap-5">

                            {/* Name */}

                            <div>
                                <label className="block mb-2 text-sm text-slate-300">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:border-blue-400 transition-all"
                                />
                            </div>

                            {/* Email */}

                            <div>
                                <label className="block mb-2 text-sm text-slate-300">
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:border-blue-400 transition-all"
                                />
                            </div>

                            {/* Subject */}

                            <div>
                                <label className="block mb-2 text-sm text-slate-300">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:border-blue-400 transition-all"
                                />
                            </div>

                            {/* Message */}

                            <div>
                                <label className="block mb-2 text-sm text-slate-300">
                                    Your Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:border-blue-400 transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}

                            <button
                                type="submit"
                                className="w-full py-3 rounded-lg bg-blue-400 text-slate-950 font-semibold hover:bg-blue-300 transition-all duration-300"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;
