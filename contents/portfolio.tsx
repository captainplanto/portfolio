import { IProject } from "../types/types";

export const portfolio: IProject[] = [
  {
    id: 1,
    slug: "we-talk",
    image:"https://res.cloudinary.com/captainkoder/image/upload/v1668469074/portfolio/images/wetalk-home_dy6su0.png",
    title: "WeTalk",
    subtitle:'Full-stack web application',
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    stacks: [
      "React Js",
      "Node Js",
      "NextUI",
      "TypeScript",
      "Github",
      "Rest-Api",
      "HTML",
      "CSS",
      "JavaScript",
      "Vercel",
      "Heroku",
      "Express Js",
      "MongoDB",
      "Moongoose",
      "StyledComponent",
      "ReactRouter",
      "Authentication",
      "Authorization",
    ],
 
    images: {
      imageOne: "https://res.cloudinary.com/captainkoder/image/upload/v1668469074/portfolio/images/weTalkLogin_oavdo5.png",
      imageTwo: "https://res.cloudinary.com/captainkoder/image/upload/v1668469074/portfolio/images/wetalk-home_dy6su0.png",
      imageThree: "https://res.cloudinary.com/captainkoder/image/upload/v1668469185/portfolio/images/wetalk-comment-page_d6bxbn.png",
    },
    background:"This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  }
];
