(function () {
  const config = window.SYLLABUS_CONFIG;

  function getLang() {
    return window.SyllabusShared.getSavedLanguage();
  }

  function setPageMeta() {
    const pageKey = document.body.dataset.page;
    const pageData = config.pageContent[pageKey];
    const lang = getLang();

    if (!pageData) return;

    const pageTitle = document.querySelector('[data-page-title]');
    const pageSubtitle = document.querySelector('[data-page-subtitle]');
    const heroTag = document.querySelector('[data-page-tag]');

    document.title = `${pageData.title[lang]} | ${config.siteName}`;

    if (pageTitle) pageTitle.textContent = pageData.title[lang];
    if (pageSubtitle) pageSubtitle.textContent = pageData.subtitle[lang];
    if (heroTag) heroTag.textContent = config.siteName;
  }

  function renderHomepageCards() {
    const grid = document.getElementById('topic-grid');
    if (!grid) return;

    const lang = getLang();
    const cards = config.featuredTopics
      .map(
        (topic) => `
          <a class="topic-card" href="${topic.href}" data-search="${topic.label.it.toLowerCase()} ${topic.label.en.toLowerCase()} ${topic.keywords.join(' ').toLowerCase()}">
            <span class="topic-card__eyebrow">${config.siteName}</span>
            <h3 class="topic-card__title">${topic.label[lang]}</h3>
            <p class="topic-card__text">${topic.description[lang]}</p>
            <span class="topic-card__cta">${config.ui.ctaExplore[lang]}</span>
          </a>
        `
      )
      .join('');

    grid.innerHTML = cards;
  }

  function initSearch() {
    const searchInput = document.getElementById('topic-search');
    const cards = document.querySelectorAll('.topic-card');
    const resultCounter = document.getElementById('results-counter');
    const emptyState = document.getElementById('search-empty-state');
    const searchLabel = document.getElementById('search-label');
    const searchHint = document.getElementById('search-hint');
    const lang = getLang();

    if (!searchInput || !cards.length) return;

    searchInput.setAttribute('placeholder', config.ui.searchPlaceholder[lang]);
    if (searchLabel) searchLabel.textContent = config.ui.searchLabel[lang];
    if (searchHint) searchHint.textContent = config.ui.searchHint[lang];

    const updateResults = () => {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCards = 0;

      cards.forEach((card) => {
        const matches = card.dataset.search.includes(query);
        card.classList.toggle('is-hidden', !matches);
        if (matches) visibleCards += 1;
      });

      if (resultCounter) {
        resultCounter.textContent = `${visibleCards} ${config.ui.resultsCount[lang]}`;
      }

      if (emptyState) {
        emptyState.hidden = visibleCards !== 0;
        emptyState.textContent = config.ui.noResults[lang];
      }
    };

    searchInput.addEventListener('input', updateResults);
    updateResults();
  }

  function localizeStaticElements() {
    const lang = getLang();
    const placeholderTitle = document.querySelector('[data-placeholder-title]');
    const placeholderText = document.querySelector('[data-placeholder-text]');

    if (placeholderTitle) placeholderTitle.textContent = config.ui.sectionTitle[lang];
    if (placeholderText) placeholderText.textContent = config.ui.sectionText[lang];
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.SyllabusShared.renderSharedLayout();
    setPageMeta();
    localizeStaticElements();
    renderHomepageCards();
    initSearch();
  });
})();
