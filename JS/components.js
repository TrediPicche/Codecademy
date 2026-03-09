(function () {
  const config = window.SYLLABUS_CONFIG;

  function getSavedLanguage() {
    return localStorage.getItem('syllabus-language') || config.defaultLang;
  }

  function getSavedTheme() {
    return localStorage.getItem('syllabus-theme') || 'light';
  }

  function setDocumentLanguage(lang) {
    document.documentElement.lang = lang;
  }

  function renderHeader() {
    const lang = getSavedLanguage();
    const currentPage = document.body.dataset.page;
    const headerRoot = document.getElementById('site-header');
    if (!headerRoot) return;

    const navItems = config.pages
      .map((page) => {
        const isCurrent = currentPage === page.key;
        return `
          <li class="site-nav__item">
            <a class="site-nav__link ${isCurrent ? 'is-active' : ''}" href="${page.slug}" ${isCurrent ? 'aria-current="page"' : ''}>
              ${page.label[lang]}
            </a>
          </li>`;
      })
      .join('');

    headerRoot.innerHTML = `
      <a class="skip-link" href="#main-content">${config.ui.skipLink[lang]}</a>
      <header class="site-header">
        <div class="container site-header__inner">
          <div class="branding">
            <a class="branding__link" href="index.html" aria-label="${config.siteName}">
              <span class="branding__logo" aria-hidden="true">S</span>
              <div>
                <p class="branding__eyebrow">Portfolio Project</p>
                <h1 class="branding__title">${config.siteName}</h1>
              </div>
            </a>
          </div>

          <div class="site-header__actions">
            <button class="icon-button" type="button" id="theme-toggle" aria-label="${config.ui.themeDark[lang]}">
              <span class="icon-button__icon" aria-hidden="true">🌙</span>
            </button>
            <button class="text-button" type="button" id="language-toggle" aria-label="${config.ui.langSwitch[lang]}">
              ${lang === 'it' ? 'EN' : 'IT'}
            </button>
            <button class="menu-button" type="button" id="menu-toggle" aria-expanded="false" aria-controls="primary-navigation" aria-label="${config.ui.menuToggle[lang]}">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <nav class="site-nav" aria-label="${config.ui.navLabel[lang]}">
          <div class="container">
            <ul class="site-nav__list" id="primary-navigation">
              ${navItems}
            </ul>
          </div>
        </nav>
      </header>
    `;
  }

  function renderFooter() {
    const lang = getSavedLanguage();
    const footerRoot = document.getElementById('site-footer');
    if (!footerRoot) return;

    footerRoot.innerHTML = `
      <footer class="site-footer">
        <div class="container site-footer__inner">
          <p>${config.ui.footerText[lang]}</p>
          <p>© <span id="current-year"></span> ${config.siteName}. ${config.ui.footerRights[lang]}</p>
        </div>
      </footer>
    `;
  }

  function applyTheme(theme) {
    document.body.classList.toggle('theme-dark', theme === 'dark');
    localStorage.setItem('syllabus-theme', theme);

    const lang = getSavedLanguage();
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('.icon-button__icon');
    if (theme === 'dark') {
      themeToggle.setAttribute('aria-label', config.ui.themeLight[lang]);
      if (icon) icon.textContent = '☀️';
    } else {
      themeToggle.setAttribute('aria-label', config.ui.themeDark[lang]);
      if (icon) icon.textContent = '🌙';
    }
  }

  function bindHeaderEvents() {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('primary-navigation');
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');

    if (menuToggle && navigation) {
      menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!expanded));
        navigation.classList.toggle('is-open', !expanded);
      });
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const nextTheme = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    }

    if (languageToggle) {
      languageToggle.addEventListener('click', () => {
        const current = getSavedLanguage();
        const next = current === 'it' ? 'en' : 'it';
        localStorage.setItem('syllabus-language', next);
        window.location.reload();
      });
    }
  }

  function setCurrentYear() {
    const year = document.getElementById('current-year');
    if (year) year.textContent = new Date().getFullYear();
  }

  function renderSharedLayout() {
    setDocumentLanguage(getSavedLanguage());
    renderHeader();
    renderFooter();
    applyTheme(getSavedTheme());
    bindHeaderEvents();
    setCurrentYear();
  }

  window.SyllabusShared = {
    getSavedLanguage,
    getSavedTheme,
    renderSharedLayout,
    setDocumentLanguage
  };
})();
