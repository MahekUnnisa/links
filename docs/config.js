const config = {
    profile: {
        name: "Mahek Unnisa",
        bio: "Software Engineer | Building and sharing insights on software development",
        image: "./DP.jpg"
    },
    social: {
        enabled: true,
        links: [
            {
                name: "Github",
                url: "http://github.com/MahekUnnisa",
                icon: "github",
                color: "#333333"
            },
            {
                name: "X",
                url: "http://x.com/themahekunnisa",
                icon: "x",
                color: "#000"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/mahekunnisa/",
                icon: "linkedin",
                color: "#0077B5"
            },
            {
                name: "Dev.to",
                url: "https://www.dev.to/themahekunnisa/",
                icon: "dev",
                color: "#000"
            }
        ]
    },
    blog: {
        enabled: false,
        title: "Latest Blog Posts",
        rssFeed: "https://dev.to/feed/themahekunnisa",
        maxPosts: 4
    },
    projects: {
        enabled: false,
        title: "Featured Projects",
        items: [
            {
                name: "Project 1",
                description: "Description of your first project",
                url: "https://github.com/username/project1",
                tech: ["JavaScript", "React", "Node.js"]
            },
            {
                name: "Project 2",
                description: "Description of your second project",
                url: "https://github.com/username/project2",
                tech: ["Python", "Django", "PostgreSQL"]
            }
        ]
    }
}; 