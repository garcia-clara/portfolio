import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mnnvzlkz");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowAlert(true);
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5000); // 5 secondes
      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);

  return (
    <div className="p-8 py-20">
      <div className="text-6xl font-extrabold">CONTACT</div>
      <div className="py-8 px-4 mx-auto">
        <p className="mb-8 font-light sm:text-xl">
          If you have any questions or just want to say hello, feel free to
          reach out! I'm always open to discussing new projects, creative ideas,
          or opportunities to be part of your vision.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder="name@mail.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="textarea w-full"
              placeholder="Leave a message..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" disabled={state.submitting} className="btn">
              Send
            </button>
            {showAlert && (
              <div
                className={`transition-opacity duration-1000 ${
                  state.succeeded ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`alert ${
                    state.succeeded ? "alert-success" : "alert-error"
                  }`}
                >
                  <span>
                    {state.succeeded
                      ? "Message sent successfully."
                      : "Message failed to send."}
                  </span>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
