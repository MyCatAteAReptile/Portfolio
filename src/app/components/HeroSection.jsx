"use client";
import React from "react";
import Image from "next/image";
import { TextTypeAnimation } from "./UI/TextTypeAnimation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center justify-self-start text-center sm:text-left"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-8xl lg:leading-normal">
            <span className="from-primary-400 to-secondary-600 bg-gradient-to-r bg-clip-text text-transparent">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TextTypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Sergey",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Frontend-Developer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            quibusdam, iure corporis saepe reiciendis eligendi.
          </p>
          <div>
            <button className="via-primary-500 to-secondary-500 mr-4 w-full rounded-full bg-gradient-to-br from-blue-500 px-6 py-3 text-white hover:bg-slate-200 sm:w-fit">
              Hire me
            </button>
            <button className="via-primary-500 to-secondary-500 mt-3 w-full rounded-full bg-gradient-to-br from-blue-500 px-1 py-1 text-white hover:bg-slate-800 sm:w-fit">
              <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div className="relative h-[250px] w-[250px] rounded-full bg-[#181818] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
