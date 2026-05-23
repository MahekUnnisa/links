document.addEventListener('DOMContentLoaded', () => {
    renderIntro();
    renderAbout();
    renderExperience();
    renderSkills();
    renderProjects();
    renderOnlinePresence();
    renderEducation();
    renderFloatingNav();
    initTheme();
    initScrollSpy();
});

function renderIntro() {
    const section = document.getElementById('intro');
    const { profile } = config;

    section.innerHTML = `
        <div class="intro-content">
            <div class="intro-text">
                <h1 class="intro-greeting">${profile.greeting}</h1>
                <p class="intro-tagline">${profile.tagline}</p>
                ${config.contact.email ? `
                    <a href="mailto:${config.contact.email}" class="intro-email">
                        <i class="fa-regular fa-envelope"></i>
                        ${config.contact.email}
                    </a>
                ` : ''}
            </div>
            <div class="intro-avatar">
                ${profile.image
                    ? `<img src="${profile.image}" alt="${profile.name}" class="avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
                    : ''
                }
                <div class="avatar-fallback" style="${profile.image ? 'display:none' : ''}">${profile.initials}</div>
            </div>
        </div>
    `;

    document.title = profile.name;
}

function renderAbout() {
    const section = document.getElementById('about');
    section.innerHTML = `
        <h2 class="section-heading">About</h2>
        <p class="about-text">${config.about.text}</p>
    `;
}

function renderExperience() {
    const section = document.getElementById('experience');
    const items = config.experience;

    if (!items.length) {
        section.style.display = 'none';
        return;
    }

    section.innerHTML = `
        <h2 class="section-heading">Work Experience</h2>
        <div class="experience-list">
            ${items.map(job => `
                <article class="experience-item">
                    ${job.url
                        ? `<a href="${job.url}" target="_blank" rel="noopener noreferrer" class="experience-link">`
                        : '<div class="experience-link">'
                    }
                        <div class="experience-logo">
                            ${job.logo
                                ? `<img src="${job.logo}" alt="${job.company}">`
                                : `<span class="logo-initial">${job.logoInitial || job.company.charAt(0)}</span>`
                            }
                        </div>
                        <div class="experience-body">
                            <div class="experience-header">
                                <h3 class="experience-company">${job.company}</h3>
                                <span class="experience-period">${job.period}</span>
                            </div>
                            <p class="experience-role">${job.role}</p>
                            <ul class="experience-highlights">
                                ${job.highlights.map(h => `<li>${h}</li>`).join('')}
                            </ul>
                        </div>
                    ${job.url ? '</a>' : '</div>'}
                </article>
            `).join('')}
        </div>
    `;
}

function renderSkills() {
    const section = document.getElementById('skills');
    section.innerHTML = `
        <h2 class="section-heading">Skills</h2>
        <div class="skills-grid">
            ${config.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
}

function renderProjects() {
    const section = document.getElementById('projects');
    const { projects } = config;

    if (!projects.items.length) {
        section.style.display = 'none';
        return;
    }

    const title = projects.title || 'Latest work';

    section.innerHTML = `
        <h2 class="section-hero">${title}</h2>
        ${projects.subtitle ? `<p class="section-subtitle section-subtitle--center">${projects.subtitle}</p>` : ''}
        <div class="projects-grid">
            ${projects.items.map(project => `
                <article class="project-card">
                    <h3 class="project-name">${project.name}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.links.website ? `<a href="${project.links.website}" target="_blank" rel="noopener noreferrer" class="project-link-btn">Website</a>` : ''}
                        ${project.links.source ? `<a href="${project.links.source}" target="_blank" rel="noopener noreferrer" class="project-link-btn">Source</a>` : ''}
                        ${project.links.package ? `<a href="${project.links.package}" target="_blank" rel="noopener noreferrer" class="project-link-btn">Package</a>` : ''}
                    </div>
                </article>
            `).join('')}
        </div>
    `;
    section.classList.add('section-featured');
}

function renderOnlinePresence() {
    const section = document.getElementById('online-presence');
    const { onlinePresence } = config;

    if (!onlinePresence.items.length) {
        section.style.display = 'none';
        return;
    }

    const title = onlinePresence.title || 'Elsewhere on the web';

    section.innerHTML = `
        <h2 class="section-hero">${title}</h2>
        ${onlinePresence.subtitle ? `<p class="section-subtitle section-subtitle--center">${onlinePresence.subtitle}</p>` : ''}
        <div class="presence-list">
            ${onlinePresence.items.map(item => `
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="presence-card">
                    <div class="presence-icon">
                        <i class="fa-brands fa-${item.icon}"></i>
                    </div>
                    <div class="presence-body">
                        <h3 class="presence-title">${item.title}</h3>
                        <p class="presence-desc">${item.description}</p>
                    </div>
                    <i class="fa-solid fa-arrow-up-right-from-square presence-arrow"></i>
                </a>
            `).join('')}
        </div>
    `;
    section.classList.add('section-featured');
}

function renderEducation() {
    const section = document.getElementById('education');
    const items = config.education;

    if (!items.length) {
        section.style.display = 'none';
        return;
    }

    section.innerHTML = `
        <h2 class="section-heading">Education</h2>
        <div class="education-list">
            ${items.map(edu => `
                <article class="education-item">
                    <div class="education-logo">
                        ${edu.logo
                            ? `<img src="${edu.logo}" alt="${edu.institution}">`
                            : `<span class="logo-initial">${edu.logoInitial || edu.institution.charAt(0)}</span>`
                        }
                    </div>
                    <div class="education-body">
                        <div class="education-header">
                            <h3 class="education-institution">${edu.institution}</h3>
                            <span class="education-period">${edu.period}</span>
                        </div>
                        <p class="education-degree">${edu.degree}</p>
                    </div>
                </article>
            `).join('')}
        </div>
    `;
}

function renderFloatingNav() {
    const navSections = document.getElementById('nav-sections');

    navSections.innerHTML = config.nav.sections.map(section => `
        <a href="#${section.id}" class="nav-item" data-section="${section.id}" aria-label="${section.label}" title="${section.label}">
            <i class="fa-solid fa-${section.icon}"></i>
        </a>
    `).join('');

    navSections.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById(link.dataset.section);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const syncIcon = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        toggle.innerHTML = isDark
            ? '<i class="fa-solid fa-moon"></i>'
            : '<i class="fa-solid fa-sun"></i>';
    };

    if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    syncIcon();

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        syncIcon();
    });
}

function initScrollSpy() {
    const sections = config.nav.sections.map(s => document.getElementById(s.id)).filter(Boolean);
    const navItems = document.querySelectorAll('.nav-sections .nav-item');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navItems.forEach(item => item.classList.remove('active'));
                    const active = document.querySelector(`.nav-sections .nav-item[data-section="${entry.target.id}"]`);
                    if (active) active.classList.add('active');
                }
            });
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
}
