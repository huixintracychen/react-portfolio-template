import Typewriter from "typewriter-effect";
import "./Profile.css"

interface ProfileData {
  typewriterName: string[];
  graduatingClass: number;
  majorMinor: string;
  websiteHref: string;
  imgSrc: string;
  currentPosition?: string;
}

/**
 * TODO: replace each `typewriterName`, `graduatingClass`, `majorMinor`,
 * `websiteHref`, and `imgSrc` with your personal information.
 */
const profileData: ProfileData = {
  typewriterName: [
    "Hellooo, I'm Tracy.",
    "I love to learn.",
    "Huixin (Tracy) Chen :)",
  ],
  graduatingClass: 2028,
  majorMinor: "B.S. in Business Administration, Minor in Data Science",
  websiteHref: "www.linkedin.com/in/huixintracychen",
  imgSrc: "/images/profile/tracy.png",
  currentPosition: "QST Lab Computer Assistant/Programmer"
};  

/**
 * `Profile` returns info about yourself. Be sure to replace
 * all of the information in the `profileData` above.
 */
export default function Profile() {
  return (
    <div className="profile-flex">
      <div>
        <h1>
          <Typewriter
            options={{
              strings: profileData.typewriterName,
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <ul>
          <li>Class of {profileData.graduatingClass}</li>
          <li>{profileData.majorMinor}</li>
          {profileData.currentPosition && (
            <li>{profileData.currentPosition}</li>
          )}
        </ul>
      </div>

      <div className="profile tilt">
        <a
          href={profileData.websiteHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="profile-img"
            src={profileData.imgSrc}
            alt="Profile picture."
          />
        </a>
      </div>
    </div>
  );
}
