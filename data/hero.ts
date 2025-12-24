// data/hero.ts

import { PersonalInfo,SocialLink } from "@/lib/types";

export const heroData: PersonalInfo = {
  name: "Naveen Sai Alapati",
  resume: "/Naveen-Software Engineer-RESUME.pdf", // path to resume in public folder
  profileImage: "/profile.webp", // path to image in public folder
  setupImage: "/setup.webp", // path to setup image
  moreInfo: `
Hi, I’m Naveen Sai — a full-stack software engineer focused on building scalable, secure, and high-performance systems used in real-world production environments.

My journey began during my Bachelor’s in Computer Science, where I discovered how thoughtfully designed software can automate complex workflows and eliminate manual effort. That curiosity led me to Dell Technologies, where I worked on modernizing enterprise systems and supporting mission-critical internal platforms.

Since then, I’ve had the opportunity to work at Uber and JPMorgan Chase & Co., contributing to distributed systems that operate at scale — from ride-matching and real-time event pipelines to banking and compliance workflows processing millions of transactions daily.

Alongside my professional work, I actively build AI-powered platforms, applying modern LLMs and cloud-native architectures to solve practical problems.

I believe great software isn’t just about writing code — it’s about designing systems that are fast, reliable, secure, and easy for people to trust.

Tech I love: Java, Python, JavaScript, TypeScript, Spring Boot, Node.js, React, Angular, AWS, MongoDB, SQL, Kafka, Docker, Kubernetes, AI/ML

Next: I’m eager to join an innovative engineering team where I can design scalable architectures, contribute across the full stack, and leverage AI to solve complex, real-world challenges that impact millions.
  `.trim(),
  email:"sainaveen1901@gmail.com",
  workingHours:"9:00 AM - 6:00 PM",
  address:"Leawood,KS,USA"
};



