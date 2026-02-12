/* ============================================
   PeriodGuide.com — App Core
   Boot, routing, theme, global handlers
   ============================================ */

const PG_APP = (() => {
  function initTheme() {
    const stored = localStorage.getItem('pg_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.theme-toggle');
      if (!btn) return;
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('pg_theme', next);
      btn.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.innerHTML = next === 'dark' ? '&#9728;' : '&#9790;';
    });
  }

  function initMobileMenu() {
    const toggle = document.querySelector('.nav__mobile-toggle');
    const menu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu__close');
    if (!toggle || !menu) return;

    function openMenu() {
      menu.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }

    function closeMenu() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    }

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
    });
  }

  function initScrollEffects() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        nav.style.boxShadow = 'var(--shadow-md)';
      } else {
        nav.style.boxShadow = 'none';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  function initIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = '.animate-on-scroll.visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
  }

  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.focus({ preventScroll: true });
    });
  }

  function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.setAttribute('role', 'status');
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    const icons = { info: 'i', success: '\u2713', warning: '\u26A0', error: '\u2717' };
    toast.innerHTML = `<span>${icons[type] || 'i'}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(16px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function getPageName() {
    const path = window.location.pathname;
    const clean = path.replace(/^\/(en|es|fr)\//, '/').replace(/\.html$/, '').replace(/\/$/, '');
    if (clean === '' || clean === '/index' || clean === '/') return 'home';
    return clean.replace(/^\//, '').replace(/\//g, '-');
  }

  function init() {
    initTheme();
    initMobileMenu();
    initScrollEffects();
    initSmoothScroll();
    if (typeof PG_I18N !== 'undefined') PG_I18N.init();
    requestAnimationFrame(() => {
      initIntersectionObserver();
    });
  }

  document.addEventListener('DOMContentLoaded', init);

  return { init, showToast, getPageName };
})();
