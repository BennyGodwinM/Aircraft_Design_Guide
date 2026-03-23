/* Make the theme toggle two-state (light ↔ dark), skipping "auto".
   pydata-sphinx-theme cycles auto → light → dark → auto.
   We hook the button click AFTER PST's own handler (via setTimeout 0)
   and, if PST landed on "auto", immediately advance to the opposite
   of the last explicitly chosen theme. */
(function () {
  function init() {
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
