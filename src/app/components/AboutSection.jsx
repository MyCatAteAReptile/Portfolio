"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [{
    title:"Skills",
    id:"skills",
    content: (
        <ul className="list-disc pl-2">
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
        </ul>
    )
},{
    title:"Education",
    id:"education",
    content: (
        <ul className="list-disc pl-2">
            <li>Node.js</li>
            <li>Node.js</li>
        </ul>
    )
},{
    title:"Certifications",
    id:"certifications",
    content: (
        <ul className="list-disc pl-2">
            <li>HTML ACAD</li>
            <li>Univer</li>
        </ul>
    )
},]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="items-start gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt={"about image"}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde
            natus fugit dolores harum aliquam molestias eaque, necessitatibus
            iusto porro doloremque soluta asperiores deleniti consectetur
            obcaecati labore, dignissimos voluptate nesciunt.
          </p>
          <div className="mt-8 flex flex-row">
            <TabButton
              selectTab={() => {
                handleTabChange("skills");
              }}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("education");
              }}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("certifications");
              }}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
