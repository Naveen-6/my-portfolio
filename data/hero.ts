// data/hero.ts

import { PersonalInfo,SocialLink } from "@/lib/types";

export const heroData: PersonalInfo = {
  name: "Naveen Sai Alapati",
  resume: "/Naveen Sai_SDE_ Resume.pdf", // path to resume in public folder
  profileImage: "/profile.webp", // path to image in public folder
  setupImage: "/setup.webp", // path to setup image
  moreInfo: `
Hi, I’m Naveen Sai — a full-stack software engineer passionate about building scalable, reliable systems that make real-world impact.

My journey started during my Bachelor’s in Computer Science, where I was fascinated by how code could automate everyday work. I began building small web apps, which led me to join Dell Technologies while still in college — modernizing legacy portals used by thousands of users.

Later, at Uber, I worked on ride optimization systems using Node.js, React, and microservices — learning how global-scale systems are built. At JPMorgan Chase, I helped automate artifact ownership processes across 12 enterprise applications using Java, Spring Boot, Kafka, and AWS — making complex workflows simpler and auditable.

Alongside my professional work, I’ve built AI-powered platforms, including a mock interview platform, image generation, and emotion detection, applying machine learning models to real-world problems.

I’m driven by the belief that great software isn’t just about code — it’s about creating intelligent systems that make people’s work faster, simpler, and more secure.

Tech I love: Java, Python, JavaScript, TypeScript, Spring Boot, Node.js, React, AWS, MongoDB, SQL, Kafka, Docker, Kubernetes, AI/ML

Next: I’m eager to join an innovative engineering team where I can design scalable architectures, contribute across the full stack, and leverage AI to solve complex, real-world challenges that impact millions.
  `.trim(),
  email:"sainaveen1901@gmail.com",
  workingHours:"9:00 AM - 6:00 PM",
  address:"Leawood,KS,USA"
};



