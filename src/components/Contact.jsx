import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    sender: "",
    subject: "",
    message: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    success: true,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const triggerPopup = (message, success) => {
    setPopup({ show: true, message, success });
    setTimeout(() => {
      setPopup({ show: false, message: "", success: true });
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.sender,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        triggerPopup("Message sent successfully!", true);
        setFormData({ name: "", sender: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Email send error:", error.text);
        triggerPopup("Failed to send message.", false);
      });
  };

  return (
    <div className="relative border-b border-neutral-900 pb-20">
      {popup.show && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40 flex items-center justify-center">
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-lg bg-white/5 border ${
              popup.success
                ? "border-green-400 text-green-200"
                : "border-red-400 text-red-200"
            }`}
          >
            <span className="text-xl">{popup.success ? "✅" : "❌"}</span>
            <p className="text-base">{popup.message}</p>
          </div>
        </div>
      )}

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="max-w-xl mx-auto text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.email}
        </motion.p>

        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="resize-none px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="sender"
            placeholder="Your Email"
            value={formData.sender}
            onChange={handleChange}
            required
            className="resize-none px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="resize-none px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 text-white font-medium rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
