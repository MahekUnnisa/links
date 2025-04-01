document.addEventListener('DOMContentLoaded', () => {
    const linksContainer = document.querySelector('.links-container');
    
    // Update profile information
    document.querySelector('.name').textContent = config.profile.name;
    document.querySelector('.bio').textContent = config.profile.bio;
    document.querySelector('.profile-pic').src = config.profile.image;

    // Render social links
    if (config.social.enabled) {
        const socialIcons = document.querySelector('.social-icons');
        config.social.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
            linkElement.className = 'social-icon';
            linkElement.style.backgroundColor = link.color;
            
            const icon = document.createElement('i');
            icon.className = `fa-brands fa-${link.icon}`;
            
            linkElement.appendChild(icon);
            socialIcons.appendChild(linkElement);
        });
    } else {
        document.getElementById('social-links').style.display = 'none';
    }

    // Render projects
    if (config.projects.enabled) {
        const projectGrid = document.querySelector('.project-grid');
        config.projects.items.forEach(project => {
            const projectCard = document.createElement('a');
            projectCard.href = project.url;
            projectCard.target = '_blank';
            projectCard.rel = 'noopener noreferrer';
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            `;
            
            projectGrid.appendChild(projectCard);
        });
    } else {
        document.getElementById('projects').style.display = 'none';
    }

    // Fetch and render blog posts
    if (config.blog.enabled) {
        fetchBlogPosts();
    } else {
        document.getElementById('blog-posts').style.display = 'none';
    }

    // Render links
    config.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        linkElement.className = 'link-item';
        
        // Create icon element
        const icon = document.createElement('i');
        icon.className = `fab fa-${link.icon}`;
        
        // Create text element
        const text = document.createElement('span');
        text.textContent = link.name;
        
        // Append elements
        linkElement.appendChild(icon);
        linkElement.appendChild(text);
        
        // Add to container
        linksContainer.appendChild(linkElement);
    });
});

async function fetchBlogPosts() {
    try {
        // Using a CORS proxy to fetch RSS feed
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const response = await fetch(proxyUrl + encodeURIComponent(config.blog.rssFeed));
        const data = await response.text();
        
        // Parse XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        
        // Get blog posts
        const items = xmlDoc.getElementsByTagName('item');
        const blogGrid = document.querySelector('.blog-grid');
        
        // Show only the specified number of posts
        for (let i = 0; i < Math.min(items.length, config.blog.maxPosts); i++) {
            const item = items[i];
            const title = item.getElementsByTagName('title')[0].textContent;
            const link = item.getElementsByTagName('link')[0].textContent;
            const pubDate = new Date(item.getElementsByTagName('pubDate')[0].textContent);
            
            const blogPost = document.createElement('a');
            blogPost.href = link;
            blogPost.target = '_blank';
            blogPost.rel = 'noopener noreferrer';
            blogPost.className = 'blog-post';
            
            blogPost.innerHTML = `
                <h3 class="blog-post-title">${title}</h3>
                <div class="blog-post-date">${pubDate.toLocaleDateString()}</div>
            `;
            
            blogGrid.appendChild(blogPost);
        }
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        document.getElementById('blog-posts').style.display = 'none';
    }
} 