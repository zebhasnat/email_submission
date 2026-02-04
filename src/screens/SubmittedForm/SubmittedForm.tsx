import { Link } from "react-router-dom";

export const SubmittedForm = (): JSX.Element => {
  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[1280px] min-h-[832px] relative"
      data-model-id="27:128"
    >
      <img
        className="absolute top-0 left-0 w-[1280px] h-[352px] object-cover"
        alt="Header background"
        src="https://c.animaapp.com/7hQguZgO/img/rectangle-19.png"
      />

      <div className="absolute top-0 left-0 w-[1282px] h-[352px] bg-black opacity-15" />

      <header className="absolute top-[66px] left-[489px] w-[243px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-white text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
        Get in touch
      </header>

      <p className="absolute top-[158px] left-[350px] w-[551px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] text-center tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
        Tell me a bit about your project and I&apos;ll get back to you as soon
        as possible to discuss the next steps.
      </p>

      <Link to="/mysite" aria-label="Return to home page">
        <img
          className="absolute top-2.5 left-[350px] w-[61px] h-14 object-cover block"
          alt="Home logo"
          src="https://c.animaapp.com/7hQguZgO/img/rectangle-20-1@2x.png"
        />
      </Link>

      <div className="absolute top-[416px] left-[304px] w-[611px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-[length:var(--heading-1-font-size)] text-center tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
        Thanks for reaching out!
      </div>
    </div>
  );
};
