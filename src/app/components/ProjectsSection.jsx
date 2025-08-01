"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Near by places finder",
    description:
      "Nearby Places Finder project — a simple web app which build on Next.js that lets users find nearby places like hospitals, restaurants, parks, and cafes based on their current location! 🏥🍽️🏞️☕",
    image: "/Images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sanjeevb013/find-nearby-places",
    previewUrl: "https://github.com/sanjeevb013/find-nearby-places",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "This is a personal portfolio website designed which build on Next.js to showcase my skills, projects, and experience as a web developer. Built using modern technologies like Nextjs, CSS, and responsive design, it offers a clean and user-friendly interface. The site includes dedicated sections for about me, projects, contact, and resume download. It reflects my passion for front-end development and attention to UI/UX design.",
    image: "/Images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sanjeevb013/Portfolio",
    previewUrl: "https://sanjeev-portfolio-eta-12.vercel.app/"
  },
   {
    id: 3,
    title: "FV Command Center",
    description:
      "FV Command Center is an admin-side web application built for a Vietnamese hospital, designed to manage and verify patient profiles efficiently. It enables administrators to assign Hospital Numbers (HN), publish health-related articles, and manage Terms and Conditions (T&C) content. The system ensures secure handling of user information with verification controls. Developed using React.js, it offers a responsive and intuitive interface for hospital staff.",
    image: "/Images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://myclnq.co/stage/fv-cmd/#/",
    previewUrl: "https://myclnq.co/stage/fv-cmd/#/"
  },
     {
    id: 3,
    title: "Cash kar har kadam",
    description:
      "Cash Kar Har Kadam is a health rewards program integrated within the MyCLNQ platform, encouraging users to stay active and lead healthier lifestyles. Users earn rewards or cashback for every step they take, promoting daily movement and wellness. The initiative aims to make fitness both motivating and rewarding. It seamlessly tracks activity and engages users through a user-friendly interface.",
    image: "/Images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://cashkarharkadam.com/",
    previewUrl: "https://cashkarharkadam.com/"
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center mt-[100px] text-4xl font-bold text-white  mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full"
      >
   {filteredProjects.map((project, index) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const cardContent = (
    <motion.li
      key={index}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.3, delay: index * 0.4 }}
    >
      <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
      />
    </motion.li>
  );

  return isMobile ? (
    <a href={project.gitUrl} target="_blank" rel="noopener noreferrer" key={index}>
      {cardContent}
    </a>
  ) : (
    cardContent
  );
})}
      </ul>
    </section>
  );
};

export default ProjectsSection;
