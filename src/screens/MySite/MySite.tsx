import { Link } from "react-router-dom";

export const MySite = (): JSX.Element => {
  const whyWorkWithMeItems = [
    {
      title: "Clean, modern design",
      description:
        "I create minimalist websites that look professional, feel intuitive, and reflect your brand clearly.",
    },
    {
      title: "Built by a developer",
      description:
        "Your website is not just visually appealing, but also fast, maintainable, and technically solid.",
    },
    {
      title: "Focused on results",
      description:
        "Every decision is made to improve clarity, usability, and conversions — not just aesthetics.",
    },
  ];

  return (
    <div
      className="bg-white w-full min-w-[1267px] min-h-[2178px] relative"
      data-model-id="4:39"
    >
      <div className="absolute top-[1708px] left-0 w-[1267px] h-[317px] bg-scondary-light-green" />

      <div className="absolute top-[474px] left-0 w-[1267px] h-[625px] bg-scondary-light-green" />

      <img
        className="absolute top-0 left-[640px] w-[627px] h-[416px] object-cover"
        alt="Hero section decorative image"
        src="https://c.animaapp.com/7hQguZgO/img/rectangle-6.png"
      />

      <header className="flex-col w-[504px] items-start gap-[30px] top-[66px] left-[71px] flex absolute">
        <h1 className="relative self-stretch h-[108px] mt-[-1.00px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
          Modern websites built to grow your business.
        </h1>

        <p className="relative w-[477px] h-[123px] font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
          I&apos;m Laura Rossi, a web developer helping businesses create fast,
          reliable, and user-friendly websites that turn visitors into
          customers.
        </p>

        <div
          className="relative w-[400px] h-[67px] bg-accent-color"
          aria-hidden="true"
        />
      </header>

      <Link
        className="w-[399px] items-center justify-center gap-2.5 p-2.5 top-[357px] left-[71px] flex absolute bg-accent-color"
        to="/contact"
        aria-label="Book a free consultation"
      >
        <span className="relative w-fit mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
          Book a free consultation
        </span>
      </Link>

      <img
        className="absolute w-[100px] h-[100px] top-72 left-[114px]"
        alt=""
        src="https://c.animaapp.com/7hQguZgO/img/slice-1@2x.png"
        aria-hidden="true"
      />

      <img
        className="absolute top-[474px] left-[71px] w-[563px] h-[625px] object-cover"
        alt="Why work with me section decorative image"
        src="https://c.animaapp.com/7hQguZgO/img/rectangle-8.png"
      />

      <section className="flex-col w-[513px] items-start gap-[25px] top-[497px] left-[683px] flex absolute">
        <h2 className="relative self-stretch h-[65px] mt-[-1.00px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
          Why work with me
        </h2>

        {whyWorkWithMeItems.map((item, index) => (
          <article key={index} className="flex flex-col gap-[25px]">
            <h3 className="relative self-stretch font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
              {item.title}
            </h3>
            <p className="relative self-stretch font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <img
        className="absolute top-[1142px] left-[640px] w-[556px] h-[484px] object-cover"
        alt="About me section portrait"
        src="https://c.animaapp.com/7hQguZgO/img/rectangle-9.png"
      />

      <section className="absolute top-[1142px] left-[71px] w-[514px]">
        <h2 className="font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
          About Me
        </h2>

        <p className="mt-[63px] w-[507px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
          I&apos;m a software engineer with years of experience in backend and
          full-stack development, now focused on building modern websites for
          businesses and professionals.
          <br />I combine technical expertise with a strong attention to
          usability and design, ensuring your website works smoothly and
          communicates clearly.
        </p>
      </section>

      <section className="absolute top-[1734px] left-[325px] w-[647px] text-center">
        <h2 className="font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
          Ready to build your new website?
        </h2>

        <p className="mt-[73px] w-[978px] ml-[-107px] font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
          Let&apos;s talk about your goals and create a website that works for
          your business.
        </p>

        <Link
          className="block mt-[50px] mb-[30px] ml-[148px] w-[421px] h-[87px] bg-accent-color flex items-center justify-center"
          to="/contact"
          aria-label="Book a free consultation"
        >
          <span className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
            Book a free consultation
          </span>
        </Link>
      </section>
    </div>
  );
};
