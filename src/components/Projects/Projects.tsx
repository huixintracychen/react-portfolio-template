import Project, { ProjectProps } from "./Project";
import "./Projects.css";

/**
 * TODO: replace each `websiteHref`, `imgSrc`, `title`, and `description`
 * with your project information.
 */
const projects: ProjectProps[] = [
  // Project 1
  {
    websiteHref: "",
    imgSrc: "/images/projects/biztech.png",
    title: "BizTech x Accenture Case Competition",
    description:
      "This was the first case competition that I participated in. I gained a strong understanding of the proper format for consulting decks, including structured storytelling, concise messaging, and effective financial projections.",
  },
  // Project 2
  {
    websiteHref: "",
    imgSrc: "/images/projects/rivian.png",
    title: "Rivian Company Analysis",
    description:
      "During my Business, Ethics, and Values class, I learned about the various functions of companies, including operations, finance, marketing, and human resources. I also gained insight into business values and ethics, understanding how they shape organizational culture and guide decision-making in a socially responsible manner.",
  },
];

/**
 * `Projects` returns a list of `Project` components,
 * defined in the following component. Be sure to replace
 * all of the information in this file (do not edit `Project.tsx`
 * only edit the list of `projects` above).
 */
export default function Projects() {
  return (
    <>
      <h2 id="projects">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            websiteHref={project.websiteHref}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
}
