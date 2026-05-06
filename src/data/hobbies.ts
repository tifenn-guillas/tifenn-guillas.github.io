import type { HobbiesData } from "../types";

export const hobbies: HobbiesData = {
  title: {
    fr: "Ceci est un peu plus personnel",
    en: "This is a little more personal",
  },
  subtitle: {
    fr: "Quelques petites choses que j'aime en dehors du code :",
    en: "A few things I enjoy outside of code:",
  },
  items: [
    {
      svg: "ramen.svg",
      title: { fr: "Culture asiatique", en: "Asian culture" },
      text: {
        fr: "Mangas, animés, dramas coréens, nourriture... Une obssession qui s'est glissée dans tous les aspects de ma vie.",
        en: "Mangas, anime, Korean dramas, food... An obssession that has seeped into every aspect of my life.",
      },
    },
    {
      svg: "controller.svg",
      title: { fr: "Jeux", en: "Games" },
      text: {
        fr: "Jeux vidéo d'ingénierie (Satisfactory, Oxygen Not Included...) ou grandes sessions de plateau, j'aime les systèmes complexes et les parties qui durent trop longtemps.",
        en: "Engineering games (Satisfactory, Oxygen Not Included...) or long board game sessions, I love complex systems and games that go on way too long.",
      },
    },
    {
      svg: "badminton.svg",
      title: { fr: "Badminton", en: "Badminton" },
      text: {
        fr: "Je rêve de reprendre. Un jour.",
        en: "I dream of picking it back up. One day.",
      },
    },
  ],
};
