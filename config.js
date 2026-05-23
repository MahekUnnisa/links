const config = {
    profile: {
        name: "Mahek Unnisa",
        greeting: "Hi, I'm Mahek",
        tagline: "Textile technologist turned backend engineer. Currently building automated content systems at scale at NewsBytes.",
        image: "./DP.jpg",
        initials: "MU"
    },

    contact: {
        email: "mahekunnisa011@gmail.com"
    },

    about: {
        text: "I build backend systems that automate news and developer content at scale — APIs, background jobs, AI workflows, and Chrome extensions in React. I also work on internal tooling, including a Kubernetes-based analytics platform for large-scale event data. I care about system design, automation, and shipping reliable production software."
    },

    experience: [
        {
            company: "NewsBytes",
            role: "Senior Software Engineer",
            period: "Jan 2026 — Present",
            logo: "./assets/newsbytes-logo.png",
            logoInitial: "N",
            url: "https://www.newsbytesapp.com",
            highlights: [
                "Own automated pipelines for news and developer content at scale",
                "Build event-driven analytics on Kubernetes for product and ops data",
                "Drive backend architecture, reliability, and production quality"
            ]
        },
        {
            company: "NewsBytes",
            role: "Backend Developer",
            period: "Aug 2023 — Jan 2026",
            logo: "./assets/newsbytes-logo.png",
            logoInitial: "N",
            url: "https://www.newsbytesapp.com",
            highlights: [
                "Shipped a Next.js Chrome extension with Google Calendar integration",
                "Automated image pipelines with Python, Pillow, and BeautifulSoup",
                "Tuned Laravel APIs with caching and personalization for DevBytes"
            ]
        },
        {
            company: "NewsBytes",
            role: "Backend Developer Intern",
            period: "Feb 2023 — Aug 2023",
            logo: "./assets/newsbytes-logo.png",
            logoInitial: "N",
            url: "https://www.newsbytesapp.com",
            highlights: [
                "Maintained the Laravel + Livewire CMS behind the DevBytes app",
                "Refreshed CMS UI with Bootstrap and Livewire for better editorial flow",
                "Wired GPT APIs into workflows to automate content generation"
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
                "Built full-stack features with Node.js, Express, and MongoDB",
                "Documented AWS practices and OpenAPI specs for internal APIs",
                "Helped migrate legacy endpoints to current API standards"
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
        hidden: true, // set to false to show again
        title: "Latest work",
        subtitle: "Side projects and experiments I've shipped.",
        items: [
            {
                name: "AlphaMall",
                description: "Ecommerce app with auth, categories, wishlist, and cart — Django and Bootstrap.",
                tech: ["Python", "Django", "SQLite3", "Bootstrap"],
                links: {
                    source: "https://github.com/MahekUnnisa/AlphaMall-Ecommerce-website-using-Django"
                }
            },
            {
                name: "Notion to GitHub Publisher",
                description: "Syncs code blocks from Notion pages to a GitHub repo via Notion and GitHub APIs.",
                tech: ["Node.js", "Notion API", "GitHub API"],
                links: {
                    source: "https://github.com/MahekUnnisa/Notion-GitHub-Publisher-tool"
                }
            },
            {
                name: "TimeSphere",
                description: "News reader built with React and a public News API, with category browsing.",
                tech: ["React", "News API", "JavaScript"],
                links: {
                    source: "https://github.com/MahekUnnisa/TimeSphere"
                }
            },
            {
                name: "Gemini Chatbot",
                description: "Chat UI in plain React powered by Google's Gemini API.",
                tech: ["React", "Gemini API", "JavaScript"],
                links: {
                    source: "https://github.com/MahekUnnisa/Gemini-Chatbot-using-Plain-React"
                }
            }
        ]
    },

    onlinePresence: {
        title: "Elsewhere on the web",
        subtitle: "Writing, code, and conversations about building software.",
        items: [
            {
                title: "GitHub",
                description: "Open-source projects and experiments — 300+ contributions.",
                url: "https://github.com/MahekUnnisa",
                icon: "github",
                type: "code"
            },
            {
                title: "Dev.to",
                description: "Articles on Python, JavaScript, APIs, and learning in public.",
                url: "https://dev.to/themahekunnisa",
                icon: "dev",
                type: "blog"
            },
            {
                title: "X",
                description: "Quick notes, links, and threads on tech and growth.",
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
            logo: "./assets/osmania-logo.png",
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
            { id: "about", label: "About", icon: "user" },
            { id: "experience", label: "Experience", icon: "briefcase" },
            { id: "skills", label: "Skills", icon: "code" },
            { id: "projects", label: "Projects", icon: "folder-open" },
            { id: "online-presence", label: "Writing", icon: "book-open" },
            { id: "education", label: "Education", icon: "graduation-cap" }
        ]
    }
};
