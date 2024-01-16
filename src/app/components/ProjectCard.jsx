import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="group relative h-52 rounded-t-xl md:h-72"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80">
          <Link
            href={gitUrl}
            className="relative h-14 w-14 mr-2 rounded-full border-2 border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="group-hover/link:text-white absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE]" />
          </Link>
          <Link
            href={previewUrl}
            className="relative h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="group-hover/link:text-white absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE]" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl mt-3 bg-[#181818] px-4 py-6 text-white">
        <h5 className="font-xl mb-2 font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
