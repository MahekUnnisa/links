const SUN = '<svg class="icon theme-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="currentColor"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
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

    const syncIcon = () => {
        toggle.innerHTML = isDark() ? MOON : SUN;
    };

    syncIcon();

    toggle.addEventListener('click', () => {
        if (isDark()) {
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
