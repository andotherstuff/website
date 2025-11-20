// Unified header and footer components for AOS website

// Determine the home URL based on current page
function getHomeUrl() {
  const currentPage = window.location.pathname;
  return currentPage.includes('index.html') || currentPage === '/' ? '#top' : 'index.html';
}

// Create header HTML
function createHeader() {
  const homeUrl = getHomeUrl();
  
  return `
    <header>
      <div class="shell">
        <nav class="nav" aria-label="Main navigation">
          <a href="${homeUrl}" class="brand">
            <div class="brand-logo-wrap" aria-hidden="true">
              <img src="/AOS_Official.svg" alt="AOS logo" class="brand-logo" />
            </div>
            <div class="brand-text">
              <span>And Other Stuff</span>
              <span>Technology for Human Thriving</span>
            </div>
          </a>
          <div class="nav-links">
            <a href="about-us.html">About Us</a>
            <a href="index.html#foundry-projects">Projects</a>
            <a href="express-interest.html">Join Us</a>
            <a href="https://opencollective.com/aos-collective" target="_blank" rel="noopener noreferrer">
              Donate <span>↗</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  `;
}

// Create footer HTML
function createFooter() {
  return `
    <footer>
      <div class="shell">
        <div class="footer-inner">
          <div>
            <a href="https://github.com/andotherstuff" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.35rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Open Source
            </a>
          </div>
          <div class="footer-links">
            <a href="about-us.html">About Us</a>
            <a href="index.html#foundry-projects">Projects</a>
            <a href="express-interest.html">Join Us</a>
            <a href="https://opencollective.com/aos-collective" target="_blank" rel="noopener noreferrer">Donate</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Initialize header and footer when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Insert header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = createHeader();
  }

  // Insert footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = createFooter();
  }
});
