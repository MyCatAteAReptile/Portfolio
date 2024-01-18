import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="md:my12 my-12 grid gap-4 py-24 md:grid-cols-2 relative">
      <div className="z-0 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-white">
          Let&apos;s connect
        </h5>
        <p className="mb-4 max-w-md text-[#ADB7BE]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima
          tempora atque officia! Unde dolores quae a temporibus, accusantium
          inventore molestias soluta itaque aspernatur dignissimos voluptatum
          quidem impedit et consequatur?
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github link" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin link" />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-500 px-5 py-2.5 font-medium text-white hover:bg-purple-600"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
