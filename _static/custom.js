/* Make the theme toggle two-state (light ↔ dark), skipping the "auto" state.
   pydata-sphinx-theme cycles auto → light → dark → auto by default.
   This intercepts any landing on "auto" and immediately advances to the
   opposite of whatever the user last explicitly chose. */
(function () {
  function fixTheme() {
    const html = document.documentElement;
    if (html.dataset.theme === 'auto') {
      // Determine what to jump to: opposite of last explicit choice
      const last = localStorage.getItem('last-explicit-theme');
      const next = last === 'light' ? 'dark' : 'light';
      html.dataset.theme = next;
      localStorage.setItem('theme', next);
      localStorage.setItem('last-explicit-theme', next);
    } else {
      // Record this as an explicit choice
      localStorage.setItem('last-explicit-theme', html.dataset.theme);
    }
  }

  // Run on load to correct any "auto" state on page open
  document.addEventListener('DOMContentLoaded', fixTheme);

  // Watch for attribute changes triggered by the toggle button
  const observer = new MutationObserver(fixTheme);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
})();
