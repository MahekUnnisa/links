const config = {
    profile: {
        name: "Mahek Unnisa",
        greeting: "Hi, I'm Mahek",
        tagline: "Textile technologist turned backend engineer. Currently building automated content systems at scale at NewsBytes.",
        image: "./DP.jpg",
        initials: "MU"
    },

    contact: {
        email: "hello@mahekunnisa.dev",
        location: "Hyderabad, India",
        links: [
            {
                label: "Email",
                value: "hello@mahekunnisa.dev",
                url: "mailto:hello@mahekunnisa.dev",
                icon: "envelope"
            },
            {
                label: "LinkedIn",
                value: "linkedin.com/in/mahekunnisa",
                url: "https://www.linkedin.com/in/mahekunnisa/",
                icon: "linkedin"
            },
            {
                label: "Location",
                value: "Hyderabad, India",
                icon: "location-dot"
            }
        ]
    },

    about: {
        text: "I primarily work on building automated systems that generate and manage news and developer content at scale. This includes backend services, background processing, personalisation, and integrations with AI-driven workflows. I also build and maintain Chrome extensions using React, integrating them with backend services and internal systems. In parallel, I work on internal tooling — including an analytics platform built on a Kubernetes-based, event-driven architecture for tracking and processing large-scale application data. My core interests are backend architecture, system design, automation, and the development of reliable production systems."
    },

    experience: [
        {
            company: "NewsBytes",
            role: "Senior Software Engineer",
            period: "Jan 2026 — Present",
            logo: "",
            logoInitial: "N",
            url: "https://www.newsbytesapp.com",
            highlights: [
                "Building automated systems that generate and manage news content at scale",
                "Developing an analytics platform on Kubernetes-based, event-driven architecture",
                "Leading backend architecture and production system reliability initiatives"
            ]
        },
        {
            company: "NewsBytes",
            role: "Backend Developer",
            period: "Aug 2023 — Jan 2026",
            logo: "",
            logoInitial: "N",
            url: "https://www.newsbytesapp.com",
            highlights: [
                "Revamped Chrome Extension using Next.js with Google Calendar integration",
                "Built image processing pipeline with Python, Pillow & BeautifulSoup for automated media handling",
                "Optimized Laravel backend API with caching strategies and content personalization"
            ]
        },
        {
            company: "NewsBytes",
            role: "Backend Developer Intern",
            period: "Feb 2023 — Aug 2023",
            logo: "",
            logoInitial: "N",
            url: "https://www.newsbytesapp.com",
            highlights: [
                "Maintained Laravel and Livewire CMS for the DevBytes app",
                "Revamped CMS UI with jQuery, Bootstrap, and Livewire to improve UX",
                "Integrated GPT AI models via API to automate content generation"
            ]
        },
        {
            company: "Sanchan Info Solutions",
            role: "Node.js Developer Intern",
            period: "Sep 2020 — Jun 2021",
            logo: "",
            logoInitial: "S",
            url: "",
            highlights: [
                "Built web applications using Node.js, Express.js, and MongoDB",
                "Documented AWS practices and authored OpenAPI API documentation",
                "Assisted in modernizing APIs to current best practices"
            ]
        },
        {
            company: "The Yarn Bazaar",
            role: "Market Research Intern",
            period: "Jul 2021 — Sep 2021",
            logo: "",
            logoInitial: "Y",
            url: "https://www.theyarnbazaar.com",
            highlights: [
                "Interviewed 75+ professionals for market research across industry portals",
                "Compiled prospective client lists and improved existing market analysis data",
                "Documented detailed analysis of current market demand and supply"
            ]
        }
    ],

    skills: [
        "Python",
        "Django",
        "Laravel",
        "PHP",
        "Node.js",
        "React",
        "Next.js",
        "JavaScript",
        "HTML & CSS",
        "Chrome Extensions",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
        "Kubernetes",
        "API Development",
        "System Design",
        "Automation",
        "Event-Driven Architecture",
        "Git"
    ],

    projects: {
        subtitle: "A selection of things I've built and shipped.",
        items: [
            {
                name: "AlphaMall",
                description: "A full-featured ecommerce website where users can register, browse products by category, manage a wishlist, and checkout. Built with Django and Bootstrap.",
                tech: ["Python", "Django", "SQLite3", "Bootstrap"],
                links: {
                    source: "https://github.com/MahekUnnisa/AlphaMall-Ecommerce-website-using-Django"
                }
            },
            {
                name: "Notion to GitHub Publisher",
                description: "A tool that uses Notion and GitHub REST APIs to fetch code snippets from Notion page child blocks and publish them directly to a selected GitHub repository.",
                tech: ["Node.js", "Notion API", "GitHub API"],
                links: {
                    source: "https://github.com/MahekUnnisa/Notion-GitHub-Publisher-tool"
                }
            },
            {
                name: "TimeSphere",
                description: "A news web app built with React and a free public News API. Displays live articles across categories with a clean, responsive interface.",
                tech: ["React", "News API", "JavaScript"],
                links: {
                    source: "https://github.com/MahekUnnisa/TimeSphere"
                }
            },
            {
                name: "Gemini Chatbot",
                description: "A conversational chatbot interface built in plain React, integrated with Google's Gemini API for AI-powered responses.",
                tech: ["React", "Gemini API", "JavaScript"],
                links: {
                    source: "https://github.com/MahekUnnisa/Gemini-Chatbot-using-Plain-React"
                }
            }
        ]
    },

    onlinePresence: {
        subtitle: "I write about what I learn and share my open source work.",
        items: [
            {
                title: "GitHub",
                description: "Open-source projects, experiments, and contributions — 300+ contributions across repos.",
                url: "https://github.com/MahekUnnisa",
                icon: "github",
                type: "code"
            },
            {
                title: "Dev.to Blog",
                description: "Technical articles on Python, JavaScript, APIs, and my developer journey.",
                url: "https://dev.to/themahekunnisa",
                icon: "dev",
                type: "blog"
            },
            {
                title: "X (Twitter)",
                description: "Quick thoughts, links, and conversations about tech and building in public.",
                url: "https://x.com/themahekunnisa",
                icon: "x-twitter",
                type: "social"
            }
        ]
    },

    education: [
        {
            institution: "Osmania University, Hyderabad",
            degree: "B.Tech, Textile Technology",
            period: "2018 — 2022",
            logo: "",
            logoInitial: "O"
        }
    ],

    social: [
        {
            name: "GitHub",
            url: "https://github.com/MahekUnnisa",
            icon: "github"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/mahekunnisa/",
            icon: "linkedin"
        },
        {
            name: "X",
            url: "https://x.com/themahekunnisa",
            icon: "x-twitter"
        },
        {
            name: "Dev.to",
            url: "https://dev.to/themahekunnisa",
            icon: "dev"
        }
    ],

    nav: {
        sections: [
            { id: "intro", label: "Intro", icon: "house" },
            { id: "contact", label: "Contact", icon: "envelope" },
            { id: "about", label: "About", icon: "user" },
            { id: "experience", label: "Experience", icon: "briefcase" },
            { id: "skills", label: "Skills", icon: "code" },
            { id: "projects", label: "Projects", icon: "folder-open" },
            { id: "online-presence", label: "Online", icon: "book-open" },
            { id: "education", label: "Education", icon: "graduation-cap" }
        ]
    }
};
