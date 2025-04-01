import Activity, { ActivityProps } from "./Activity";
import "./Activities.css";

/**
 * TODO: replace each `imgSrc`, `imgAlt`, `title`, `description`
 * and `quicklinks` with your project information.
 */
const activities: ActivityProps[] = [
  // Activity 1
  {
    imgSrc: "/images/activities/dance.png",
    imgAlt: "My performance",
    title: "Dancing",
    description: (
      <>
        <p>
        I picked up dancing during high school, and it has since become a way for me to deeply connect with music. The rhythm and beats allow me to express emotions and ideas that I often find difficult to put into words.
        </p>
        <p>
        Dancing also serves as a wonderful way for me to destress, especially after long or challenging days. It provides a sense of freedom, allowing me to momentarily forget about everything else and fully immerse myself in the moment.  
        </p>
      </>
    ),
    quicklinks: [
      { href: "https://github.com/whyphi", name: "" },
      { href: "https://grub-gallery.vercel.app/", name: "" },
      { href: "https://github.com/wderocco8/ZipSurf", name: "" },
      {
        href: "https://github.com/alexjmiller5/BU-GCalSync",
        name: "",
      },
    ],
  },
  // Activity 2
  {
    imgSrc: "/images/activities/art.png",
    imgAlt: "Rock climbing at FitRec.",
    title: "Art",
    description: (
      <>
        <p>
        I've loved art ever since I was a kid, always finding joy in creating and exploring different mediums.
        </p>
        <p>
        While I don’t have as much time for art these days, I still cherish the opportunity to hand-make cards for my friends. It’s a way for me to express my creativity and show appreciation for the people I care about, even in the midst of a busy schedule.  
        </p>
      </>
    ),
    quicklinks: [
      {
        href: "https://www.bu.edu/fitrec/what-we-offer/outdoor-programs/rock-climbing/",
        name: "",
      },
    ],
  },
  // Activity 3
  {
    imgSrc: "/images/activities/baking.png",
    imgAlt: "Tabling with PCT (Phi Chi Theta).",
    title: "Baking",
    description: (
      <>
        <p>
        I have always loved baking, and over the years, I have baked everything from cupcakes and brownies to decorated cakes.
        </p>
        <p>
        One of my specialties is making lemon cookies, which I take great pride in. Back in high school, I would mass bake these lemon cookies as Christmas gifts for my loved ones to show my appreciation. It became a special tradition that not only let me share something I love but also gave me the chance to express my gratitude through a personal and thoughtful gesture.
        </p>
      </>
    ),
    quicklinks: [
      { href: "https://bupct.com/", name: "" },
      { href: "https://github.com/whyphi", name: "" },
    ],
  },
  // Activity 4

  {
    imgSrc: "/images/activities/cooking.png",
    imgAlt: "Cooking with my mom.",
    title: "Cooking",
    description: (
      <>
        <p>
        Since my dad worked as a chef, I have always enjoyed learning how to cook from him.
        </p>
        <p>
          He inspired my love for experimenting in the kitchen, and over time, I developed a passion for making a variety of Asian food. I enjoy exploring different flavors and techniques, always eager to try new recipes and create meals that are both delicious and meaningful.
        </p>
      </>
    ),
    quicklinks: [
      { href: "https://www.babi.sh/", name: "" },
      { href: "https://cooking.nytimes.com/", name: "" },
    ],
  },
];

/**
 * `Activities` returns a list of `Activity` components,
 * defined in the following component. Be sure to replace
 * all of the information in this file (do not edit `Activity.tsx`
 * only edit list of `activities` above.)
 */
export default function Activities() {
  return (
    <>
      {/* TODO: with your info --> */}
      <h2 id="interests">How I spend my free time?</h2>
      <div className="interests-table-container">
        <table className="interests-table">
          <tbody>
            {activities.map((activity, index) => (
              <Activity
                key={index}
                imgSrc={activity.imgSrc}
                imgAlt={activity.imgAlt}
                title={activity.title}
                description={activity.description}
                quicklinks={activity.quicklinks}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
