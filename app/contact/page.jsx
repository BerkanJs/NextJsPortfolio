"use client"
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Contact Me"
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="flex flex-col w-full min-h-screen bg-white"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='flex flex-col flex-grow w-full gap-10 px-6 py-12 lg:flex-row sm:px-12 md:px-20 lg:px-32 xl:px-48'>

        {/* Left Section - Animated Text + Links */}
        <div className="flex flex-col items-center justify-center flex-1 text-center lg:text-left">
          <div className="text-5xl font-semibold tracking-wide text-gray-900 md:text-6xl">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-8 text-lg font-medium lg:justify-start text-slate-700">
            <a
              href="https://github.com/BerkanJs"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-slate-900"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/berkan-%C3%B6z%C3%A7elik-2bb733313/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-slate-900"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex flex-col justify-center flex-1 gap-6 p-10 text-lg shadow-md bg-gray-50 rounded-xl"
        >
          <h2 className="mb-6 text-3xl font-semibold text-gray-800">Get in Touch</h2>

          <label className="font-medium text-gray-700">Dear Berkan Özçelik,</label>
          <textarea
            rows={5}
            className="px-3 py-2 transition-colors duration-300 bg-white border-b-2 border-gray-400 outline-none resize-none focus:border-slate-700"
            name="user_message"
            placeholder="Write your message here..."
            required
          />

          <label className="font-medium text-gray-700">My email address is:</label>
          <input
            name="user_email"
            type="email"
            className="px-3 py-2 transition-colors duration-300 bg-white border-b-2 border-gray-400 outline-none focus:border-slate-700"
            placeholder="your@email.com"
            required
          />

          <label className="font-medium text-gray-700">Regards</label>

          <button className="px-6 py-3 font-semibold text-white transition-colors duration-300 rounded-md shadow-sm bg-slate-800 hover:bg-slate-900">
            Send Message
          </button>

          {success && (
            <span className="mt-3 font-semibold text-green-700">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="mt-3 font-semibold text-red-700">
              Something went wrong. Please try again!
            </span>
          )}
        </form>
      </div>

      {/* Footer - Email Address */}
      <footer className="w-full py-6 mt-auto text-sm font-medium text-center text-gray-700 bg-gray-100">
        Email: <a href="mailto:your.email@example.com" className="underline hover:text-gray-900">berkanozcelik3.6@gmail.com</a>
      </footer>
    </motion.div>
  )
}

export default ContactPage
