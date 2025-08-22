
"use client";
import { faCommentDots, faContactBook, faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 bg-gray-50 text-gray-800">
            <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2">

                {/* Left side: Contact Info */}
                <div className="bg-gradient-to-br from--600 to-pink-500 text-slate-600 p-10 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 flex gap-2 items-center shadow-2xl p-2 rounded-2xl border border-gray-700">
                            <FontAwesomeIcon icon={faCommentDots} className="mr-2 bg-pink-500 text-white border shadow-2xl rounded-2xl p-2" />
                            Get in Touch
                        </h2>
                        <p className="text-lg opacity-90">
                            I&apos;d love to hear from you! Whether it's a project, job opportunity, or just a chat, feel free to drop me a message.
                        </p>
                    </div>

                    <div className="mt-8 space-y-5">
                        <p className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faEnvelope} color="red" className="bg-white rounded-2xl p-2 " />
                            polvaishnavi2001@gmail.com
                        </p>
                        <p className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faContactBook} color="red" className="bg-white rounded-2xl p-2" />
                            +123 456 7890
                        </p>
                        <p className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faMap} color="red" className="bg-white rounded-2xl p-2" />
                            Pune, India
                        </p>
                    </div>
                </div>

                {/* Right side: Form */}
                <div className="p-10">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <h3 className="text-2xl font-semibold text-pink-400 mb-2">Message Sent 🎉</h3>
                            <p className="text-gray-600">Thanks for reaching out! I&apos;ll get back to you soon.</p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-6 px-6 py-2 bg-pink-500 hover:bg-red-500 text-white rounded-xl shadow-lg transition"
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                                    placeholder="Write your message..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-pink-500 hover:bg-red-500 text-white py-3 rounded-xl shadow-lg transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
