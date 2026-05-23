const SUN = '<svg class="icon theme-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="5"/></svg>';
const MOON = '<svg class="icon theme-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 1 0 11.5 11.5z"/></svg>';

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initTheme();
    initScrollSpy();
});

function initNav() {
    document.querySelectorAll('.nav-sections .nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';

    toggle.innerHTML = isDark() ? MOON : SUN;

    toggle.addEventListener('click', () => {
        if (isDark()) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            toggle.innerHTML = SUN;
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggle.innerHTML = MOON;
        }
    });
}

function initScrollSpy() {
    const sections = [...document.querySelectorAll('.page > .section')];
    const navItems = document.querySelectorAll('.nav-sections .nav-item');
    if (!sections.length || !navItems.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navItems.forEach(item => item.classList.remove('active'));
                document.querySelector(`.nav-sections .nav-item[data-section="${entry.target.id}"]`)?.classList.add('active');
            });
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
}
