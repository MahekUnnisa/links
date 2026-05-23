const config = {
    profile: {
        name: "Mahek Unnisa",
        greeting: "Hi, I'm Mahek",
        tagline: "Textile technologist turned self-taught developer. I build, write, and share what I learn.",
        image: "./DP.jpg",
        initials: "MU"
    },

    contact: {
        email: "hello@mahekunnisa.dev",
        location: "India",
        links: [
            {
                label: "Email",
                value: "hello@mahekunnisa.dev",
                url: "mailto:hello@mahekunnisa.dev",
                icon: "envelope"
            },
            {
                label: "Location",
                value: "India",
                icon: "location-dot"
            }
        ]
    },

    about: {
        text: "I'm a software engineer and technical writer passionate about Python, JavaScript, open source, and DevOps. I started in textile technology and taught myself to code — now I build web apps, contribute to open source, and write about my learnings on Dev.to and beyond."
    },

    experience: [
        {
            company: "Your Company",
            role: "Software Engineer",
            period: "2024 — Present",
            logo: "",
            logoInitial: "Y",
            url: "",
            highlights: [
                "Built and shipped production web features with modern JavaScript",
                "Collaborated on DevOps workflows and CI/CD pipelines",
                "Contributed to internal tooling and documentation"
            ]
        },
        {
            company: "Previous Role",
            role: "Junior Developer / Intern",
            period: "2022 — 2024",
            logo: "",
            logoInitial: "P",
            url: "",
            highlights: [
                "Developed full-stack projects using Python and JavaScript",
                "Wrote technical blog posts documenting learnings and tutorials",
                "Participated in open-source contributions and code reviews"
            ]
        }
    ],

    skills: [
        "JavaScript",
        "Python",
        "React",
        "Node.js",
        "HTML & CSS",
        "Git",
        "DevOps",
        "Docker",
        "Technical Writing",
        "Open Source"
    ],

    projects: {
        subtitle: "A few things I've built and shipped.",
        items: [
            {
                name: "Project One",
                description: "A web application solving a real problem. Built with modern JavaScript and deployed to production.",
                tech: ["JavaScript", "React", "Node.js"],
                links: {
                    source: "https://github.com/MahekUnnisa",
                    website: ""
                }
            },
            {
                name: "Project Two",
                description: "An open-source tool or library. Documented, tested, and shared with the community.",
                tech: ["Python", "FastAPI"],
                links: {
                    source: "https://github.com/MahekUnnisa"
                }
            }
        ]
    },

    onlinePresence: {
        subtitle: "I like sharing what I learn — tutorials, notes, and thoughts on building software.",
        items: [
            {
                title: "Dev.to Blog",
                description: "Technical articles on Python, JavaScript, web development, and my learning journey.",
                url: "https://dev.to/themahekunnisa",
                icon: "dev",
                type: "blog"
            },
            {
                title: "GitHub",
                description: "Open-source projects, experiments, and contributions to the community.",
                url: "https://github.com/MahekUnnisa",
                icon: "github",
                type: "code"
            },
            {
                title: "X (Twitter)",
                description: "Quick thoughts, links, and conversations about tech and learning in public.",
                url: "https://x.com/themahekunnisa",
                icon: "x-twitter",
                type: "social"
            }
        ]
    },

    education: [
        {
            institution: "Your University / Institute",
            degree: "Bachelor's in Computer Science (or relevant field)",
            period: "2018 — 2022",
            logo: "",
            logoInitial: "U"
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
