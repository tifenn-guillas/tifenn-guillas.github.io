import type { ResumeData } from "../types";

export const resume: ResumeData = {
  title: {
    fr: "Expériences professionnelles",
    en: "Professional experience",
  },
  download: {
    fr: "Téléchargez mon CV",
    en: "Download my resume",
  },
  download_href: {
    fr: "https://drive.google.com/file/d/1ZRJfRWh7VgBdC2HCWPvmAbCfQ8XFCA8h/view?usp=sharing",
    en: "https://drive.google.com/file/d/1ZRJfRWh7VgBdC2HCWPvmAbCfQ8XFCA8h/view?usp=sharing",
  },
  download_description: {
    fr: "Téléchargez mon CV",
    en: "Download my resume",
  },
  jobs: [
    {
      title: {
        fr: "Product Engineer",
        en: "Product Engineer",
      },
      start: "04/2025",
      end: "Aujourd'hui",
      location: {
        fr: "Prozon - Marseille",
        en: "Prozon - Marseille, France",
      },
      description: {
        fr: "Prozon est une plateforme e-commerce B2B spécialisée dans les fournitures et équipements techniques pour professionnels et collectivités (signalisation, sécurité, mobilier urbain, etc...). Surnommée « l'Amazon des professionnels », elle cible entreprises de TP, grands comptes et collectivités avec un nombre croissant de références.",
        en: 'Prozon is the B2B e-commerce platform for professionals and organizations. Specializing in technical supplies and equipment—signage, safety, urban furniture, and more—it\'s often called "the Amazon for professionals." It serves construction firms, major accounts, and local authorities with an ever-growing product catalog.',
      },
      tasks: {
        fr: "Mise en place de la brique back-office dans le cadre de la migration e-commerce, basée sur Symfony, gRPC et Angular. Contribution à la démarche qualité par la création d'outils dédiés aux développeurs. Intégration de l'IA dans le workflow de développement, avec les bases d'une approche inspirée de la méthode BMAD.",
        en: "Built the back-office module for the e-commerce migration using Symfony, gRPC, and Angular. Created developer-focused tools to raise code quality standards. Pioneered AI integration into the development workflow, establishing practices inspired by the BMAD methodology.",
      },
      technologies: [
        "Symfony",
        "gRPC",
        "Angular",
        "CI/CD",
        "IA",
        "Claude",
        "BMAD",
        "WMS",
      ],
    },
    {
      title: {
        fr: "Développeuse fullstack",
        en: "Fullstack developer",
      },
      start: "04/2022",
      end: "04/2025",
      location: {
        fr: "Mailinblack - Marseille",
        en: "Mailinblack - Marseille, France",
      },
      description: {
        fr: "Mailinblack est une entreprise française spécialisée en cybersécurité, reconnue pour ses solutions dédiées à la protection des messageries professionnelles ainsi qu'à la sensibilisation des collaborateurs aux cybermenaces. Aujourd'hui, Mailinblack propose une gamme de quatre produits : Protect - sécurisation des emails, Cyber Coach - sensibilisation, Cyber Academy - e-learning et Sikker - gestion des mots de passe.",
        en: "Mailinblack is a leading French cybersecurity company protecting professional email systems and educating organizations about cyber threats. The company offers four key products: Protect for email security, Cyber Coach for awareness training, Cyber Academy for e-learning, and Sikker for password management.",
      },
      tasks: {
        fr: "Mise en place du socle technique frontend et gestion de projet pour Cyber Academy. Développement de fonctionnalités et maintenance de Cyber Coach. Développement du Cockpit, plateforme de visualisation centralisée de l'écosystème Mailinblack orientée utilisateur.",
        en: "Established the frontend technical foundation and managed the Cyber Academy project. Developed features and maintained Cyber Coach. Built the Cockpit, a unified dashboard for visualizing the entire Mailinblack ecosystem.",
      },
      technologies: [
        "Angular",
        "Bootstrap5",
        "ResponsiveDesign",
        "Java",
        "API",
        "REST",
        "SonarQube",
        "CI/CD",
        "i18n",
        "SCRUM",
        "Shape",
      ],
    },
    {
      title: {
        fr: "Ingénieur en développement et déploiement d'applications",
        en: "Software Engineer - Application Development and Deployment",
      },
      start: "04/2018",
      end: "04/2022",
      location: {
        fr: "CNRS - Laboratoire d'Astrophysique de Marseille",
        en: "CNRS - Laboratoire d'Astrophysique de Marseille, France",
      },
      description: {
        fr: "La mission SVOM est un projet spatial franco-chinois dédié à la détection et l'étude des sursauts gamma, phénomènes émis lors de la mort des étoiles. Le satellite, lancé avec succès en juin 2024, intercepte ces rayonnements et coordonne les alertes vers les télescopes au sol.",
        en: "The SVOM mission is a Franco-Chinese space project for detecting and studying gamma-ray bursts—the emissions from dying stars. The satellite, successfully launched in June 2024, intercepts these rays and coordinates alerts to ground-based observatories.",
      },
      tasks: {
        fr: "Développement du framework ANIS de mise à disposition et de visualisation de données astrophysiques. Développement des modules spécifiques à la mission SVOM. Mise en place de la suite de tests unitaires frontend sous Angular.",
        en: "Developed the ANIS framework for distributing and visualizing astrophysical data. Built SVOM mission-specific modules. Implemented a comprehensive frontend unit test suite using Angular.",
      },
      technologies: [
        "Angular",
        "RxJS",
        "Jasmine",
        "Jest",
        "Bootstrap4",
        "ResponsiveDesign",
        "API",
        "REST",
        "git",
        "Docker",
        "CI/CD",
      ],
    },
    {
      title: {
        fr: "Ingénieur software",
        en: "Software engineer",
      },
      start: "08/2017",
      end: "02/2018",
      location: {
        fr: "The Currency Shop - Melbourne, Australie",
        en: "The Currency Shop - Melbourne, Australia",
      },
      description: {
        fr: "The Currency Shop est un site de comparaison de taux de change et frais liés au transfert d'argent à l'étranger. Ils fournissent des guides, revues et convertisseurs afin de trouver le meilleur taux.",
        en: "The Currency Shop is a comparison platform for international money transfers and travel currency. It offers guides, reviews, and calculators to help users find the best exchange rates.",
      },
      tasks: {
        fr: "Mise en production de sites web pour l'international en WordPress hébergés sur Microsoft Azure. Rapatriement en interne du site web principal sous Symfony, sous-traité par une agence web. Création d'un convertisseur de devises communiquant avec les API de TransferWise.",
        en: "Deployed WordPress websites on Microsoft Azure to reach international customers. Brought the main website in-house from an external agency, rebuilding it in Symfony. Built a currency converter integrating TransferWise APIs.",
      },
      technologies: [
        "Azure",
        "Symfony3",
        "Bootstrap3",
        "ResponsiveDesign",
        "PHPOO",
        "Doctrine2",
        "MySQL",
      ],
    },
    {
      title: {
        fr: "Ingénieur en développement et déploiement d'applications",
        en: "Software Engineer - Application Development and Deployment",
      },
      start: "04/2016",
      end: "04/2017",
      location: {
        fr: "CNRS - Laboratoire d'Astrophysique de Marseille",
        en: "CNRS - Laboratoire d'Astrophysique de Marseille, France",
      },
      description: {
        fr: "GAZPAR est une application qui permet de traiter des catalogues d'étoiles. Ses utilisateurs peuvent exécuter à distance un ensemble d'outils développés par le LAM et ses partenaires. Ils obtiennent ainsi des résultats à valeurs ajoutées du fait de l'expertise du responsable scientifique de l'outil choisi.",
        en: "GAZPAR is an application for processing star catalogs. Users can remotely execute tools developed by the LAM and partners, receiving expert-validated results tailored to their specific needs.",
      },
      tasks: {
        fr: "Restructuration de la base de données sous PostgreSQL. Réécriture en Angular2 et PHP de GAZPAR, précédemment en Django (Python). Prise en compte de nouvelles spécificités, comme par exemple l'upload de fichiers de gros volumes. Ajout de nouveaux algorithmes de traitements de catalogues.",
        en: "Restructured the database with PostgreSQL. Rewrote the application in Angular2 and PHP (previously Django/Python). Added support for large file uploads and new catalog processing algorithms. Optimized database performance.",
      },
      technologies: [
        "Angular2",
        "Bootstrap3",
        "ResponsiveDesign",
        "PHPOO",
        "Slim3",
        "Doctrine2",
        "PostgreSQL",
      ],
    },
    {
      title: {
        fr: "Ingénieur en base de données et programmation",
        en: "Database and programming engineer",
      },
      start: "10/2015",
      end: "01/2016",
      location: {
        fr: "GIS Posidonie - Marseille",
        en: "GIS Posidonie, France",
      },
      description: {
        fr: "POPCOrn est un outil de comptage des poissons et coraux présents dans le Parc National des Calanques afin de déterminer l'efficacité de l'espace protégé. Cette application interne est destinée aux plongeurs du Groupement d'Intérêt Scientifique Posidonie, du parc, et à terme à ceux du Parc National de Port Cros.",
        en: "POPCOrn is a data collection tool for monitoring fish and coral populations in the Parc National des Calanques. This internal application lets divers record observations to assess the marine protected area's health.",
      },
      tasks: {
        fr: "Conception d'une base de données PostgreSQL et importation de données provenant d'une base Access. Stockage et manipulation de données spatiales grâce à PostGIS. Conception d'une application web afin d'intégrer de nouvelles données dans la base.",
        en: "Designed a PostgreSQL database and migrated data from Microsoft Access. Managed spatial data using PostGIS. Built a web application allowing divers to submit observations directly into the database.",
      },
      technologies: [
        "PostgreSQL",
        "PostGIS",
        "jQuery",
        "Twig",
        "Bootstrap3",
        "PHP",
        "Doctrine2",
      ],
    },
    {
      title: {
        fr: "Stage Développeur Web",
        en: "Web developer internship",
      },
      start: "04/2015",
      end: "08/2015",
      location: {
        fr: "CNRS - Institut de Biologie du Développement de Marseille",
        en: "CNRS - Institut de Biologie du Développement de Marseille, France",
      },
      description: {
        fr: "Création d'une application interne de gestion des publications de l'institut et des préférences utilisateurs liées à ces publications. Opération faite manuellement auparavant.",
        en: "Built an internal application to manage IBDM publications and user preferences. Previously handled entirely by manual processes.",
      },
      tasks: {
        fr: "Création d'une base de données MySQL avec MERISE. Création d'une interface web afin de recenser les publications du laboratoire et gestion des préférences utilisateurs en PHP, HTML/CSS et jQuery (+ différents plugins jQuery).",
        en: "Designed a MySQL database using MERISE methodology. Built a web interface in PHP, HTML/CSS, and jQuery for researchers to catalog publications and configure preferences.",
      },
      technologies: [
        "MySQL",
        "MERISE",
        "PHP",
        "Doctrine2",
        "Twig",
        "jQuery",
        "jQueryPlugins",
      ],
    },
  ],
};
