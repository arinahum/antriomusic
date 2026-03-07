(function () {
  const nav = document.querySelector('nav');
  if (!nav) return;

  // Inject hamburger button
  const btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-label', 'Toggle menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(btn);

  function openMenu() {
    nav.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  // Toggle on hamburger click
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close when a nav link is tapped
  nav.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close when tapping outside the nav
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) closeMenu();
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
})();
