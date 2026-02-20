import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "BookStore E-Commerce Platform",
    shortDescription: "Full-stack e-commerce site with real-time inventory",
    fullDescription: "A complete e-commerce solution with user authentication, product management.",
    image: "/images/projects/ecommerce/main.jpg",
    screenshots: [
      "/images/projects/ecommerce/home.jpg",
      "/images/projects/ecommerce/product.jpg",
      "/images/projects/ecommerce/cart.jpg"
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    features: [
      "User authentication with JWT",
      "Real-time inventory updates",
      "Shopping cart with localStorage persistence",
      "Admin dashboard for product management"
    ],
    challenges: "Implementing real-time updates for inventory across multiple users was challenging. I used Socket.io to broadcast inventory changes and optimized the database queries to handle concurrent requests.",
    learnings: "Deepened understanding of WebSocket protocols and learned how to handle race conditions in real-time applications.",
    liveLink: "https://ecommerce-demo.com",
    githubLink: "https://github.com/username/ecommerce",
    duration: "3 months",
    role: "Full-stack Developer",
    featured: true,
    completionDate: new Date('2024-01-15')
  },
  
];