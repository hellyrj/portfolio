import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "BookStore E-Commerce Platform",
    shortDescription: "Full-stack e-commerce site with admin page",
    fullDescription: "A complete e-commerce solution with user authentication, product management.",
    image: "../images/bookstore/Screenshot 2026-02-26 010217.png",
    screenshots: [
      "../images/bookstore/Screenshot 2026-02-26 010303.png",
      "../images/bookstore/Screenshot 2026-02-26 010926.png",
      "../images/bookstore/Screenshot 2026-02-26 010833.png",
      "../images/bookstore/Screenshot 2026-02-26 011014.png",
      "../images/bookstore/Screenshot 2026-02-26 011517.png",
      "../images/bookstore/Screenshot 2026-02-26 011459.png",
      "../images/bookstore/Screenshot 2026-02-26 010506.png"
    ],
    technologies: ["HTML", "CSS", "Vanilla Javascript", "Node.js", "Postgres", "Express"],
    features: [
      "User authentication with JWT",
      "Real-time updating orders",
      "Shopping cart with localStorage persistence",
      "Admin dashboard for product management"
    ],
    challenges: "Implementing real-time updates , integrating payment system i only have admin controlled payment method for now.",
    learnings: "Got to explore how to work with ORMS .",
    liveLink: "https://book-store-7ttu.onrender.com/",
    githubLink: "https://github.com/hellyrj/Book-store",
    duration: "3 months",
    role: "Full-stack Developer",
    featured: true,
    completionDate: new Date('2025-10-25')
  },


    {
    id: 2,
    title: "Smart Parking System",
    shortDescription: "Full-stack  site with admin page",
    fullDescription: "A complete e-commerce solution with user authentication, product management.",
    image:  "../images/parking/Screenshot 2026-02-26 022516.png",
    screenshots: [
      "../images/parking/Screenshot 2026-02-26 022557.png",
      "../images/parking/Screenshot 2026-02-26 022615.png",
      "../images/parking/Screenshot 2026-02-26 022740.png",
      "../images/parking/Screenshot 2026-02-26 022726.png",
      "../images/parking/Screenshot 2026-02-26 022907.png",
      "../images/parking/Screenshot 2026-02-26 022921.png",
      "../images/parking/Screenshot 2026-02-26 023121.png",
      "../images/parking/Screenshot 2026-02-26 023400.png",
      "../images/parking/Screenshot 2026-02-26 023444.png"
    ],
    technologies: ["HTML", "CSS", "Vanilla Javascript", "Node.js", "Postgres", "Express.js", "Sequelize" , "JWT", "Multer" , "Bcrypt" , "OpenSreetMap"],
    features: [
      "User authentication with JWT",
      "Real-time updating parking space",
      "GPS-based location detection ",
      "Admin dashboard for user managment",
      "Adding parking space & uploading legal documentation",
      "view active session and pending reservation"
    ],
    challenges: "Implementing real-time updates , integrating payment system i only have admin controlled payment method for now.",
    learnings: "Deepened understanding of role based authentication and authorization.",
    liveLink: "https://smart-parking-system-2lh9.onrender.com/",
    githubLink: "https://github.com/hellyrj/smart-parking-system",
    duration: "3 months",
    role: "Full-stack Developer",
    featured: true,
    completionDate: new Date('2026-02-01')
  },
  
];