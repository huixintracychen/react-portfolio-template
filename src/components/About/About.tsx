import { JSX } from "react";

interface AboutData {
  info: JSX.Element;
}

/**
 * TODO: replace `info` with your personal information.
 */
const aboutData: AboutData = {
  info: (
    <>
      <p>
        Hi there, my name is Tracy, and I am from New York City. Currently, I'm a freshman and aspiring business intelligent analyst studying at Boston University.
      </p>
      <p>
        I absolutely love learning new skills and challenging myself in
        different respects. To learn more about what I've done, free free to check out my  <a href="www.linkedin.com/in/huixintracychen">LinkedIn</a>{" "}
        😁.
      </p>
    </>
  ),
};

export default function About() {
  return (
    <>
      <h2 id="about">About me</h2>
      {aboutData.info}
    </>
  );
}
