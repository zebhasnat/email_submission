import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // NEW: useNavigate to redirect user after success

const API_BASE = import.meta.env.VITE_API_URL ?? ""; // NEW: Get backend URL from environment variables

export const Contact = (): JSX.Element => {
  const navigate = useNavigate(); // NEW: Hook to redirect user to another page

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // NEW: Track if form is "idle", "loading", or "error"
  const [errorMessage, setErrorMessage] = useState(""); // NEW: Store error message

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

// NEW: Clear error when user starts typing again
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  // NEW: Now async because we're calling an API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading"); // NEW: Show loading state
    setErrorMessage(""); // NEW: Clear any previous error

    try {
       // NEW: Send form data to our backend API
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST", // NEW: POST request to send data
        headers: { "Content-Type": "application/json" },  // NEW: Tell server we're sending JSON
        body: JSON.stringify(formData), // NEW: Convert form data to JSON string
      });
      const data = await res.json().catch(() => ({})); // NEW: Parse server response
      
      // NEW: Check if request failed
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.message ?? "Something went wrong. Please try again.");
        return;
      }

      navigate("/submitted-form"); // NEW: Redirect to success page

    } catch { // NEW: Handle network errors (no internet, server down, etc.)
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div
      className="bg-white w-full min-w-[1282px] min-h-[1207px] relative"
      data-model-id="14:72"
    >
      <img
        className="absolute top-0 left-0 w-[1282px] h-[352px] object-cover"
        alt="Background header image"
        src="https://c.animaapp.com/7hQguZgO/img/rectangle-19-1.png"
      />

      <div className="absolute top-0 left-0 w-[1282px] h-[352px] bg-black opacity-15" />

      <header className="absolute top-0 left-0 w-[1282px] h-[352px]">
        <Link to="/mysite" aria-label="Go to home page">
          <img
            className="absolute top-2.5 left-[350px] w-[61px] h-14 object-cover block"
            alt="Home logo"
            src="https://c.animaapp.com/7hQguZgO/img/rectangle-20-1@2x.png"
          />
        </Link>

        <h1 className="absolute top-[66px] left-[489px] w-[243px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-white text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
          Get in touch
        </h1>

        <p className="absolute top-[158px] left-[350px] w-[551px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] text-center tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
          Tell me a bit about your project and I&apos;ll get back to you as soon
          as possible to discuss the next steps.
        </p>
      </header>

      <main>
        <form
          onSubmit={handleSubmit}
          className="flex-col w-[553px] items-start gap-7 top-[372px] flex absolute left-[350px]"
        >
          <div className="relative self-stretch w-full">
            <label
              htmlFor="name"
              className="block h-8 mt-[-1.00px] font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]"
            >
              Name
            </label>
          </div>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            aria-required="true"
            className="relative self-stretch w-full h-[35px] bg-[#d9d9d9] px-3 py-2 text-black font-body-text font-[number:var(--body-text-font-weight)] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] focus:outline-none focus:ring-2 focus:ring-accent-color"
          />

          <div className="relative self-stretch w-full">
            <label
              htmlFor="email"
              className="block h-7 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]"
            >
              Email
            </label>
          </div>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-required="true"
            className="relative self-stretch w-full h-[35px] bg-[#d9d9d9] px-3 py-2 text-black font-body-text font-[number:var(--body-text-font-weight)] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] focus:outline-none focus:ring-2 focus:ring-accent-color"
          />

          <div className="relative self-stretch w-full">
            <label
              htmlFor="message"
              className="block h-[31px] font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]"
            >
              Message
            </label>
          </div>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            aria-required="true"
            rows={6}
            className="relative self-stretch w-full h-[182px] bg-[#d9d9d9] px-3 py-2 text-black font-body-text font-[number:var(--body-text-font-weight)] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] resize-none focus:outline-none focus:ring-2 focus:ring-accent-color"
          />

          {status === "error" && errorMessage && (
            <p className="text-red-600 text-sm" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="relative w-[411px] h-[75px] bg-accent-color hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-color disabled:opacity-70 disabled:cursor-not-allowed"
            aria-label={status === "loading" ? "Sending…" : "Submit contact form"}
          >
            <span className={status === "loading" ? "font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]" : "sr-only"}>
              {status === "loading" ? "Sending…" : "Submit"}
            </span>
          </button>
        </form>

        <div className="w-[399px] items-center justify-center gap-2.5 p-2.5 top-[883px] flex absolute left-[350px] pointer-events-none">
          <div className="relative w-fit mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
          {status !== "loading"&&  "Book a free consultation"}
          </div>
        </div>
      </main>
    </div>
  );
};
