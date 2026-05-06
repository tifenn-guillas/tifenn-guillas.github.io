import type { SkillsData } from "../types";

export const skills: SkillsData = {
  title: {
    fr: "Mon savoir-faire",
    en: "My skills",
  },
  description: {
    fr: "Grâce à mes différentes expériences, qu'elles soient professionnelles ou personnelles, j'ai pu acquérir des compétences, en particulier dans les catégories suivantes:",
    en: "Thanks to the various projects I have worked on, I acquired skills in these areas.",
  },
  list: [
    {
      stack: { fr: "Backend", en: "Backend" },
      technologies: [
        { label: "PHP", tech: "php", icon: "fab fa-php" },
        { label: "Symfony", tech: "symfony", icon: "fab fa-symfony" },
        { label: "Doctrine", tech: "doctrine", svg: "doctrine.svg" },
        { label: "Twig", tech: "twig", svg: "twig.svg" },
        { label: "Python", tech: "python", icon: "fab fa-python" },
        { label: "Java", tech: "java", icon: "fab fa-java" },
        { label: "gRPC", tech: "grpc" },
        { label: "REST API", tech: "restapi" },
      ],
    },
    {
      stack: { fr: "Frontend", en: "Frontend" },
      technologies: [
        { label: "Angular", tech: "angular", icon: "fab fa-angular" },
        { label: "TypeScript", tech: "typescript", icon: "fab fa-typescript" },
        { label: "RxJS", tech: "rxjs", svg: "rxjs.svg" },
        { label: "NgRx", tech: "ngrx", svg: "ngrx.svg" },
        { label: "Bootstrap", tech: "bootstrap", icon: "fab fa-bootstrap" },
        { label: "Tailwind", tech: "tailwind", icon: "fab fa-tailwind-css" },
      ],
    },
    {
      stack: { fr: "Data", en: "Data" },
      technologies: [
        { label: "PostgreSQL", tech: "postgresql", icon: "fab fa-postgresql" },
        { label: "MySQL", tech: "mysql" },
        { label: "PostGIS", tech: "postgis" },
        { label: "PL/SQL", tech: "plsql" },
      ],
    },
    {
      stack: { fr: "Tests & qualité", en: "Tests & quality" },
      technologies: [
        { label: "Jest", tech: "jest" },
        { label: "Jasmine", tech: "jasmine" },
        { label: "PHPUnit", tech: "phpunit" },
        { label: "Pest", tech: "pest" },
        { label: "SonarQube", tech: "sonarqube" },
      ],
    },
    {
      stack: { fr: "Environnement", en: "Environment" },
      technologies: [
        { label: "Docker", tech: "docker", icon: "fab fa-docker" },
        { label: "Git", tech: "git", icon: "fab fa-git-alt" },
        { label: "CI/CD", tech: "cicd" },
        { label: "Linux", tech: "linux", icon: "fab fa-linux" },
        { label: "Azure", tech: "azure" },
        { label: "Café", tech: "cafe", icon: "fas fa-mug-hot" },
      ],
    },
  ],
};
