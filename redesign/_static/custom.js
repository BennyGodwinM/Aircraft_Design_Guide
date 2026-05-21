/**
 * Aircraft Design Guide — custom.js
 * Lightweight interactive enhancements. No dependencies.
 */

(function () {
  'use strict';

  /* ── Page-load fade-in ──────────────────────────────────────────────────── */
  function onLoad() {
    document.body.classList.add('ag-loaded');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onLoad);
  } else {
    onLoad();
  }

  /* ── Navbar scroll opacity ──────────────────────────────────────────────── */
  // Slightly deepen the header background blur when the user scrolls down.
  var header = null;

  function initNavbar() {
    header = document.querySelector('.bd-header');
    if (!header) return;

    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrolled = window.scrollY > 24;
          header.style.borderBottomColor = scrolled
            ? 'rgba(28, 28, 36, 0.8)'
            : '';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── Smooth anchor scrolling ────────────────────────────────────────────── */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;

      var id = link.getAttribute('href').slice(1);
      if (!id) return;

      var target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ── Code block copy button ─────────────────────────────────────────────── */
  // Jupyter Book already ships a copy button, but this ensures it looks right.
  function styleExistingCopyButtons() {
    var style = document.createElement('style');
    style.textContent = [
      'html[data-theme="dark"] .copybtn {',
      '  background: var(--ag-bg-elevated) !important;',
      '  border: 1px solid var(--ag-border-mid) !important;',
      '  border-radius: 5px !important;',
      '  color: var(--ag-text-muted) !important;',
      '  opacity: 0;',
      '  transition: opacity 0.15s ease, background 0.15s ease !important;',
      '}',
      'html[data-theme="dark"] pre:hover .copybtn,',
      'html[data-theme="dark"] .cell_input:hover .copybtn {',
      '  opacity: 1 !important;',
      '}',
      'html[data-theme="dark"] .copybtn:hover {',
      '  background: var(--ag-bg-deep) !important;',
      '  color: var(--ag-text-heading) !important;',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }

  /* ── Active sidebar item highlighting ──────────────────────────────────── */
  // PyData already handles this, but we nudge the scroll position so the
  // active item is never hidden off-screen in the sidebar.
  function scrollSidebarToActive() {
    var sidebar = document.querySelector('.bd-sidebar-primary');
    if (!sidebar) return;

    var active = sidebar.querySelector('.nav-link.active, .current > a');
    if (!active) return;

    var sidebarRect = sidebar.getBoundingClientRect();
    var activeRect = active.getBoundingClientRect();

    if (activeRect.top < sidebarRect.top + 60 ||
        activeRect.bottom > sidebarRect.bottom - 60) {
      active.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }

  /* ── Initialise on DOMContentLoaded ────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initSmoothScroll();
    styleExistingCopyButtons();
    scrollSidebarToActive();
  });

})();
