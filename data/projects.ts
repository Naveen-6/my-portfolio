import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "AI_Interview_Platform",
    description: "AI_Interview_Platform is an AI-powered mock interview platform that helps users practice and prepare for real-world job interviews through interactive voice sessions and instant feedback. Powered by LLMs and real-time voice AI, it delivers a dynamic and personalized interview experience from start to finish.",
    gitUrl: "https://github.com/Naveen-6/AI_Interview_Platform",
    images: ["/robot.png"],
    techStack: ["Next.js", "Firebase","Tailwind CSS", "Google Gemini LLM"],
    priority: 1,
  },
  {
    title: "AI_ImageGeneration",
    description: "A full-stack MERN application that allows users to generate images using OpenAI's DALL·E API, share them with the community, and download their creations. Built with modern tools like React, Node.js, Express, MongoDB, and Tailwind CSS.",
    gitUrl: "https://github.com/Naveen-6/AI_ImageGeneration",
    images: ["/AI_ImageGen.jpg"],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
    priority: 2,
  },
  {
    title: "SocialMedia",
    description: "Full-stack social media platform built with the MERN stack (MongoDB, Express, React, Node.js). Users can create, like, and comment on posts, with a responsive UI and RESTful APIs for seamless interaction.",
    gitUrl: "https://github.com/Naveen-6/SocialMedia",
    images: ["/Social_Media.jpeg"],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    priority: 3,
  },
 
];
