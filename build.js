const fs = require('fs');
const path = require('path');
const { svgIcon } = require('./icons');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'docs');
const ASSETS = ['DP.jpg', 'DP.png'];

function loadConfig() {
    const code = fs.readFileSync(path.join(ROOT, 'config.js'), 'utf8');
    return new Function(`${code}\nreturn config;`)();
}

function esc(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderIntro(config) {
    const { profile, contact } = config;
    const avatar = profile.image
        ? `<img src="${esc(profile.image)}" alt="${esc(profile.name)}" class="avatar-img" width="80" height="80" loading="eager" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false">`
        : '';

    return `
        <section id="intro" class="section intro">
            <div class="intro-content">
                <div class="intro-text">
                    <h1 class="intro-greeting">${esc(profile.greeting)}</h1>
                    <p class="intro-tagline">${esc(profile.tagline)}</p>
                    ${contact.email ? `
                        <a href="mailto:${esc(contact.email)}" class="intro-email">
                            ${svgIcon('envelope', 'icon icon-sm')}
                            ${esc(contact.email)}
                        </a>
                    ` : ''}
                </div>
                <div class="intro-avatar">
                    ${avatar}
                    <div class="avatar-fallback"${profile.image ? ' hidden' : ''}>${esc(profile.initials)}</div>
                </div>
            </div>
        </section>`;
}

function renderContact(config) {
    const items = config.contact.links.map(link => `
        <div class="contact-item">
            ${svgIcon(link.icon, 'icon icon-sm contact-icon')}
            ${link.url
                ? `<a href="${esc(link.url)}" class="contact-link">${esc(link.value)}</a>`
                : `<span class="contact-value">${esc(link.value)}</span>`
            }
        </div>
    `).join('');

    return `
        <section id="contact" class="section contact">
            <h2 class="section-heading">Contact</h2>
            <div class="contact-list">${items}</div>
        </section>`;
}

function renderAbout(config) {
    return `
        <section id="about" class="section about">
            <h2 class="section-heading">About</h2>
            <p class="about-text">${esc(config.about.text)}</p>
        </section>`;
}

function renderExperience(config) {
    if (!config.experience.length) return '';

    const items = config.experience.map(job => {
        const inner = `
            <div class="experience-logo">
                ${job.logo
                    ? `<img src="${esc(job.logo)}" alt="${esc(job.company)}" width="40" height="40" loading="lazy" decoding="async">`
                    : `<span class="logo-initial">${esc(job.logoInitial || job.company.charAt(0))}</span>`
                }
            </div>
            <div class="experience-body">
                <div class="experience-header">
                    <h3 class="experience-company">${esc(job.company)}</h3>
                    <span class="experience-period">${esc(job.period)}</span>
                </div>
                <p class="experience-role">${esc(job.role)}</p>
                <ul class="experience-highlights">
                    ${job.highlights.map(h => `<li>${esc(h)}</li>`).join('')}
                </ul>
            </div>`;

        return `
            <article class="experience-item">
                ${job.url
                    ? `<a href="${esc(job.url)}" target="_blank" rel="noopener noreferrer" class="experience-link">${inner}</a>`
                    : `<div class="experience-link">${inner}</div>`
                }
            </article>`;
    }).join('');

    return `
        <section id="experience" class="section experience">
            <h2 class="section-heading">Work Experience</h2>
            <div class="experience-list">${items}</div>
        </section>`;
}

function renderSkills(config) {
    const tags = config.skills.map(s => `<span class="skill-tag">${esc(s)}</span>`).join('');
    return `
        <section id="skills" class="section skills">
            <h2 class="section-heading">Skills</h2>
            <div class="skills-grid">${tags}</div>
        </section>`;
}

function renderProjects(config) {
    const { projects } = config;
    if (!projects.items.length) return '';

    const cards = projects.items.map(project => `
        <article class="project-card">
            <h3 class="project-name">${esc(project.name)}</h3>
            <p class="project-desc">${esc(project.description)}</p>
            <div class="project-tech">
                ${project.tech.map(t => `<span class="tech-tag">${esc(t)}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.links.website ? `<a href="${esc(project.links.website)}" target="_blank" rel="noopener noreferrer" class="project-link-btn">Website</a>` : ''}
                ${project.links.source ? `<a href="${esc(project.links.source)}" target="_blank" rel="noopener noreferrer" class="project-link-btn">Source</a>` : ''}
                ${project.links.package ? `<a href="${esc(project.links.package)}" target="_blank" rel="noopener noreferrer" class="project-link-btn">Package</a>` : ''}
            </div>
        </article>
    `).join('');

    return `
        <section id="projects" class="section projects">
            <p class="section-label">My Projects</p>
            <h2 class="section-heading">Check out my latest work</h2>
            ${projects.subtitle ? `<p class="section-subtitle">${esc(projects.subtitle)}</p>` : ''}
            <div class="projects-grid">${cards}</div>
        </section>`;
}

function renderOnlinePresence(config) {
    const { onlinePresence } = config;
    if (!onlinePresence.items.length) return '';

    const cards = onlinePresence.items.map(item => `
        <a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer" class="presence-card">
            <div class="presence-icon">${svgIcon(item.icon)}</div>
            <div class="presence-body">
                <h3 class="presence-title">${esc(item.title)}</h3>
                <p class="presence-desc">${esc(item.description)}</p>
            </div>
            ${svgIcon('arrow-up-right', 'icon presence-arrow')}
        </a>
    `).join('');

    return `
        <section id="online-presence" class="section online-presence">
            <p class="section-label">Knowledge Sharing</p>
            <h2 class="section-heading">Online Presence</h2>
            ${onlinePresence.subtitle ? `<p class="section-subtitle">${esc(onlinePresence.subtitle)}</p>` : ''}
            <div class="presence-list">${cards}</div>
        </section>`;
}

function renderEducation(config) {
    if (!config.education.length) return '';

    const items = config.education.map(edu => `
        <article class="education-item">
            <div class="education-logo">
                ${edu.logo
                    ? `<img src="${esc(edu.logo)}" alt="${esc(edu.institution)}" width="40" height="40" loading="lazy" decoding="async">`
                    : `<span class="logo-initial">${esc(edu.logoInitial || edu.institution.charAt(0))}</span>`
                }
            </div>
            <div class="education-body">
                <div class="education-header">
                    <h3 class="education-institution">${esc(edu.institution)}</h3>
                    <span class="education-period">${esc(edu.period)}</span>
                </div>
                <p class="education-degree">${esc(edu.degree)}</p>
            </div>
        </article>
    `).join('');

    return `
        <section id="education" class="section education">
            <h2 class="section-heading">Education</h2>
            <div class="education-list">${items}</div>
        </section>`;
}

function renderNav(config) {
    const sections = config.nav.sections.map(s => `
        <a href="#${esc(s.id)}" class="nav-item" data-section="${esc(s.id)}" aria-label="${esc(s.label)}" title="${esc(s.label)}">
            ${svgIcon(s.icon)}
        </a>
    `).join('');

    const social = config.social.map(link => `
        <a href="${esc(link.url)}" target="_blank" rel="noopener noreferrer" class="nav-item nav-social-link" aria-label="${esc(link.name)}" title="${esc(link.name)}">
            ${svgIcon(link.icon)}
        </a>
    `).join('');

    return `
        <nav class="floating-nav" aria-label="Site navigation">
            <div class="floating-nav-inner">
                <div class="nav-sections">${sections}</div>
                <div class="nav-divider" aria-hidden="true"></div>
                <div class="nav-social">${social}</div>
                <div class="nav-divider" aria-hidden="true"></div>
                <button class="nav-theme-toggle" id="theme-toggle" aria-label="Toggle theme" type="button">
                    ${svgIcon('sun', 'icon theme-icon')}
                </button>
            </div>
        </nav>`;
}

function buildHtml(config) {
    const { profile } = config;
    const description = config.site?.description || config.about.text.slice(0, 160);

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${esc(description)}">
    <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)">
    <meta property="og:title" content="${esc(profile.name)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:type" content="website">
    <link rel="stylesheet" href="style.css">
    <title>${esc(profile.name)}</title>
    <script>(function(){var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.setAttribute('data-theme','dark')})();</script>
</head>
<body>
    <main class="page">
        ${renderIntro(config)}
        ${renderContact(config)}
        ${renderAbout(config)}
        ${renderExperience(config)}
        ${renderSkills(config)}
        ${renderProjects(config)}
        ${renderOnlinePresence(config)}
        ${renderEducation(config)}
    </main>
    ${renderNav(config)}
    <script src="app.js" defer></script>
</body>
</html>`;
}

function minifyCss(css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\s+/g, ' ')
        .replace(/\s*([{}:;,])\s*/g, '$1')
        .trim();
}

function build() {
    const config = loadConfig();
    fs.mkdirSync(OUT, { recursive: true });

    fs.writeFileSync(path.join(OUT, 'index.html'), buildHtml(config));

    const css = fs.readFileSync(path.join(ROOT, 'style.css'), 'utf8');
    fs.writeFileSync(path.join(OUT, 'style.css'), minifyCss(css));

    fs.copyFileSync(path.join(ROOT, 'app.js'), path.join(OUT, 'app.js'));

    for (const asset of ASSETS) {
        const src = path.join(ROOT, asset);
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, path.join(OUT, asset));
        }
    }

    console.log('Built static site → docs/');
    console.log('  Preview: python3 -m http.server 8080 --directory docs');
}

build();
