import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_1mfqiqg";
const TEMPLATE_ID = "template_0u9gtvc";
const USER_ID = "O4ZJEJfXv_u99-5Dm";

// Set your recipient email here (must match your EmailJS template variable)
const RECIPIENT_EMAIL = "contact@boomin.dev";

// EmailJS template variables mapping:
//   {{name}}    <-- user_name
//   {{email}}   <-- user_email
//   {{message}} <-- message
//   {{to_email}}<-- to_email (hidden field, set to contact@boomin.dev)
// Make sure your EmailJS template uses these variables.

// In your EmailJS template, set the "To" field to: {{to_email}},{{email}}
// This will send the email to both your business inbox and the user.

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ submitted: false, success: false, message: "" });

    // Validate fields before sending (to avoid 422)
    const formData = new FormData(form.current);
    if (
      !formData.get("user_name") ||
      !formData.get("user_email") ||
      !formData.get("message")
    ) {
      setStatus({
        submitted: true,
        success: false,
        message: "All fields are required"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID);
      setStatus({
        submitted: true,
        success: true,
        message: "The message has been sent! Please check your email for confirmation."
      });
      form.current.reset();
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message:
          "An error occurred while sending. Please make sure all fields are filled out correctly and try again." +
          (error?.text?.includes("recipients address is empty") || error?.message?.includes("recipients address is empty")
            ? "The recipient is not set correctly in EmailJS. In EmailJS, add the variable to_email to your template and set the recipient’s email address in the ‘To’ field."
            : error?.text ? ` [${error.text}]` : error?.message ? ` [${error.message}]` : "")
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="space-y-8">
        {/* Hidden recipient field for EmailJS */}
        <input type="hidden" name="to_email" value={RECIPIENT_EMAIL} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Your name"
              required
              disabled={isSubmitting}
              className="w-full rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 input-gradient-border p-3 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="your@email.com"
              required
              disabled={isSubmitting}
              className="w-full rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 input-gradient-border p-3 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            rows={6}
            placeholder="Tell us about your project"
            required
            disabled={isSubmitting}
            className="w-full rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 input-gradient-border p-3 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full button-gradient text-white py-4 px-8 rounded-lg text-lg font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
        {status.submitted && (
          <div 
            className={`mt-4 p-4 rounded-lg border-l-4 ${
              status.success 
                ? "bg-green-50 border-green-400 text-green-700" 
                : "bg-red-50 border-red-400 text-red-700"
            }`}
          >
            <div className="flex items-center">
              {status.success ? 
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg> :
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              }
              <span className="font-medium">{status.message}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
