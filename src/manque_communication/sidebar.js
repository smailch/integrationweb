// Script pour inclure dynamiquement le sidebar dans toutes les pages
function includeSidebar() {
  const sidebarContainer = document.getElementById('sidebar');
  if (!sidebarContainer) return;
  fetch('./sidebar.html')
    .then(response => response.text())
    .then(html => {
      sidebarContainer.innerHTML = html;
      // Highlight active link
      const links = sidebarContainer.querySelectorAll('nav a');
      const currentPath = window.location.pathname.replace(/\\/g, '/');
      links.forEach(link => {
        let href = link.getAttribute('href');
        // Ignore empty or hash links
        if (!href || href === '#') return;
        // Make href absolute for comparison
        let linkPath;
        if (href.startsWith('http')) {
          linkPath = new URL(href).pathname;
        } else if (href.startsWith('/')) {
          linkPath = href;
        } else {
          // Relative path: resolve against current location
          const base = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
          linkPath = (base + href).replace(/\/+/g, '/');
        }
        // Normalize for dev server (Vite) and static
        if (linkPath.endsWith('index.html')) linkPath = linkPath.replace('index.html', '');
        let normCurrent = currentPath;
        if (normCurrent.endsWith('index.html')) normCurrent = normCurrent.replace('index.html', '');
        if (linkPath === normCurrent) {
          link.classList.add('text-white', 'bg-blue-900');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('text-white', 'bg-blue-900');
          link.removeAttribute('aria-current');
        }
      });
    });
}

document.addEventListener('DOMContentLoaded', includeSidebar);