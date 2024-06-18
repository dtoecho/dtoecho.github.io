import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "DtoEcho - log my learning",
  DESCRIPTION: "continues to record with Java, Spring, React, nextjs",
  EMAIL: "dtoecho@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Java, Spring, React, nextjs related documentation and studying",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Java, Spring, React, nextjs related documentation and studying",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Project demo with java,spring,react,nextjs",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/dtoecho",
  }
];
