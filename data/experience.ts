// data/experience.ts

import { WorkExperience, Skill, Certificate } from "@/lib/types";

export const data: {
  workExperience: WorkExperience[];
  skills: Skill[];
  certificates: Certificate[];
} = {
    workExperience: [
      {
        companyName: "Dell Technologies",
        companyLogo: "/Delltechnologies.png",
        position: "Software Engineer",
        startDate: "2021-09",
        endDate: "2023-08",
        jobDescription: `
      At Dell Technologies, I helped modernize enterprise internal platforms used by support and operations teams.

I built Java Spring Boot microservices and React-based dashboards to replace legacy workflows, improving reliability and reducing manual effort. I also worked on event-driven architectures using Kafka and containerized deployments using Kubernetes and AWS.

This role gave me strong exposure to enterprise-scale systems, cross-team collaboration, and production support.

Key contributions . Delivered 9 Spring Boot REST APIs serving ~7–9K internal requests per day. Built React dashboards adopted by ~40 internal users, reducing manual tracking during support triage. Designed Kafka consumers and producers processing ~300K events daily. Implemented OAuth 2.0 and RBAC across backend services to support security and compliance reviews`,
      },
      {
        companyName: "Uber",
        companyLogo: "/uber.png",
        position: "Software Engineer",
        startDate: "2024-09",
        endDate: "2025-01",
        jobDescription: `
        At Uber, I worked on distributed systems that power ride-matching and trip lifecycle management, operating under strict latency and availability requirements.

I developed Spring Boot microservices that handle trip state transitions and high-frequency API traffic. To support real-time features like driver location updates and pricing, I implemented Kafka-based event streaming consumed by downstream ETA and analytics services.

I also built React UI components used in high-traffic user flows and helped automate Kubernetes deployments on AWS using CI/CD pipelines.

Key contributions. Developed backend services handling ~180K daily API calls with ~150 ms response times. Processed ~900K Kafka messages per day for near-real-time trip and location updates. Reduced UI page load delays by ~400 ms through React performance improvements
. Enabled zero-downtime deployments through automated CI/CD and Kubernetes orchestration

        `,
      },
      {
        companyName: "JPMorgan Chase & Co",
        companyLogo: "/jpmc.png",
        position: "Software Engineer",
        startDate: "2025-02",
        jobDescription: `At JPMorgan Chase, I work on backend and full-stack systems that support regulated banking and payment workflows, where performance, security, and auditability are critical.

I design Java Spring Boot microservices that process high-volume financial transactions and integrate with multiple core banking platforms. I also build event-driven pipelines using Apache Kafka to enable reliable, real-time data flow across distributed systems.

On the frontend, I contribute to React-based operational dashboards that help internal teams monitor and manage workflows efficiently. Security is a core focus of my work — I implement OAuth 2.0 and RBAC to ensure compliance with PCI-DSS and internal governance standards.

Key contributions. Built high-throughput backend services processing ~1.2M transactions per day, reducing critical processing latency by ~18%. Integrated 15+ enterprise systems through secure REST APIs, improving response times and reliability. Designed Kafka-based event pipelines handling ~250K messages/hour with >99.9% delivery reliability. Improved internal reporting efficiency by ~20% through React dashboards and API optimization`,
      },
    ],


  

    skills: [
      {
        name: "React",
        image: "/react.webp",
        url: "https://reactjs.org/",
      },
      {
        name: "Angular",
        image: "/angular.webp",
        url: "https://angular.io/",
      },
      {
        name: "Java",
        image: "/java.png",
        url: "https://www.oracle.com/java/",
      },
      {
        name: "Spring Boot",
        image: "/springboot.png",
        url: "https://spring.io/projects/spring-boot",
      },
      {
        name: "Node.js",
        image: "/nodejs.webp",
        url: "https://nodejs.org/",
      },
      {
        name: "Python",
        image: "/Python.jpeg",
        url: "https://www.python.org/",
      },
      {
        name: "Flask",
        image: "/flask.png",
        url: "https://flask.palletsprojects.com/",
      },
      {
        name: "jQuery",
        image: "/jquery.png",
        url: "https://jquery.com/",
      },
      {
        name: "Bootstrap",
        image: "/bootstrap.webp",
        url: "https://getbootstrap.com/",
      },
      {
        name: "Material UI",
        image: "/materiaui.webp",
        url: "https://mui.com/",
      },
      {
        name: "Tailwind CSS",
        image: "/tailwind.webp",
        url: "https://tailwindcss.com/",
      },
      {
        name: "SQL",
        image: "/sql.png",
        url: "https://www.w3schools.com/sql/",
      },
      {
        name: "MongoDB",
        image: "/mongodb.png",
        url: "https://www.mongodb.com/",
      },
      {
        name: "JavaScript",
        image: "/javascript.webp",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        image: "/typescript.png",
        url: "https://www.typescriptlang.org/",
      },
       {
        name: "AI",
        image: "/AI.jpeg",
        url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
      },
    ],
    

  certificates: [
    {
      title: "AI For Everyone",
      image: "/certificates/AI For Everyone.png",
      url: "https://www.coursera.org/account/accomplishments/records/T92EL4YMHJWW",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      image: "/certificates/Supervised Machine Learning- Regression and Classification.png",
      url: "https://www.coursera.org/account/accomplishments/records/VJKT7U9PQS7R",
    },
    {
      title: "Databases and SQL for Data Science with Python",
      image: "/certificates/Databases and SQL for Data Science with Python.jpeg",
      url: "https://www.coursera.org/account/accomplishments/records/AZF2YTUMHJE7",
    },
    {
      title: "PCAP – Programming Essentials in Python",
      image: "/certificates/Python.png",
      url: "/certificates/PCAP – Programming Essentials in Python.png",
    },
    {
      title: "CLA - Programming Essentials in C",
      image: "/certificates/C.png",
      url: "/certificates/CLA - Programming Essentials in C.png",
    },
  ],
};
