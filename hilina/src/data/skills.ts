import type { skillGroup } from "../types";

export const skillGroups: skillGroup[] = [
    {
        category: 'frontend',
        title: 'Frontend Development',
        icon: 'FaCode',
        skills: [
            {
                name: 'react' , level: 85, icon: 'FaReact' , category: 'frontend'
            },
            {
                name: 'typeScript' , level: 80, icon: 'FaTypescript' , category: 'frontend'
            },
            {
                name: 'Tailwind CSS' , level: 70, icon: 'FaTailwind' , category: 'frontend'
            }
        ]
    },
    {
        category: 'backend',
        title: 'Backend Development',
        icon: 'FaServer',
        skills: [
            {
                name: 'Node.js' , level: 75, icon: 'FaNode' , category: 'backend'

            },
            {
                name: 'Python' , level: 85, icon: 'FaPython' , category: 'backend'

            },
            {
                name: 'Express' , level: 80 , icon: 'FaExpress' , category: 'backend'

            }
        ]
    }
]