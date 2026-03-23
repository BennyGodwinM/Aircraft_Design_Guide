/* Make the theme toggle two-state (light ↔ dark), skipping "auto".
   pydata-sphinx-theme cycles auto → light → dark → auto.
   We hook the button click AFTER PST's own handler (via setTimeout 0)
   and, if PST landed on "auto", immediately advance to the opposite
   of the last explicitly chosen theme. */
(function () {
  function initThemeToggle() {
    const btn = document.querySelector('.theme-switch-button');
    if (!btn) return;

    btn.addEventListener('click', function () {
      setTimeout(function () {
        const html = document.documentElement;
        const current = html.dataset.theme;

        if (current === 'auto') {
          const last = localStorage.getItem('pst-theme-explicit') || 'light';
          const next = last === 'dark' ? 'light' : 'dark';
          html.setAttribute('data-theme', next);
          localStorage.setItem('theme', next);
          localStorage.setItem('pst-theme-explicit', next);
        } else {
          // Record this as the last deliberate choice
          localStorage.setItem('pst-theme-explicit', current);
        }
      }, 0);
    });
  }

  /* Move copyright text into the bottom of the secondary sidebar
     (Contents / page-TOC panel) so it appears under the TOC. */
  function moveCopyrightToSidebar() {
    const sidebar = document.querySelector('.bd-sidebar-secondary');
    if (!sidebar) return;

    // Collect the author and copyright paragraphs from the footer
    const author    = document.querySelector('.component-author');
    const copyright = document.querySelector('p.copyright');
    if (!author && !copyright) return;

    // Build a small container div
    const wrapper = document.createElement('div');
    wrapper.className = 'sidebar-copyright';

    if (author)    wrapper.appendChild(author.cloneNode(true));
    if (copyright) wrapper.appendChild(copyright.cloneNode(true));

    sidebar.appendChild(wrapper);

    // Hide the originals so they don't appear twice
    if (author)    author.style.display    = 'none';
    if (copyright) copyright.style.display = 'none';
  }

  function init() {
    initThemeToggle();
    moveCopyrightToSidebar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
