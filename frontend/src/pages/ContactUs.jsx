import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({
        name: "",
        email: "",
        message: "",
      });
      setForm({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Form submitted successfully");
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-15 md:pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-600">
          Contact Us
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Have a project in mind? Let's build something impactful together.
        </p>
      </section>

      {/* Main Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <p className="font-medium text-gray-800">Email</p>
              <p>contact@landminesoft.com</p>
            </div>

            <div>
              <p className="font-medium text-gray-800">Phone</p>
              <p>+91-9059024653</p>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-300">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Enter your name..."
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-2">{errors.name}</p>
              )}
            </div>
            {/* E-mail */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Enter your email..."
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-2">{errors.email}</p>
              )}
            </div>
            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Enter your message..."
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-2">{errors.message}</p>
              )}
            </div>
            {/* Button */}
            <button
              type="submit"
              className="bg-[#ff9800] w-full text-white py-3 rounded-lg hover:bg-emerald-600 transition duration-300 font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
