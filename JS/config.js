/* MENU */
window.SYLLABUS_CONFIG = {
  siteName: 'Syllabus',
  defaultLang: 'it',
  pages: [
    { key: 'home', slug: 'index.html', label: { it: 'Home', en: 'Home' } },
    { key: 'html', slug: 'html.html', label: { it: 'HTML', en: 'HTML' } },
    { key: 'css', slug: 'css.html', label: { it: 'CSS', en: 'CSS' } },
    { key: 'js', slug: 'js.html', label: { it: 'JS', en: 'JS' } },
	{ key: 'commandline', slug: 'commandline.html', label: { it: 'Command Line', en: 'Command Line' } },
	{ key: 'node', slug: 'node.html', label: { it: 'Node', en: 'Node' } },
    { key: 'react', slug: 'react.html', label: { it: 'React', en: 'React' } },
    { key: 'redux', slug: 'redux.html', label: { it: 'Redux', en: 'Redux' } },
    { key: 'express', slug: 'express-js.html', label: { it: 'Express.js', en: 'Express.js' } },
    { key: 'git', slug: 'git.html', label: { it: 'Git', en: 'Git' } },
    { key: 'github', slug: 'github.html', label: { it: 'GitHub', en: 'GitHub' } },
    { key: 'contacts', slug: 'contatti.html', label: { it: 'Contatti', en: 'Contacts' } }
  ],
/* GRID */
  featuredTopics: [
    {
      key: 'html',
      keywords: ['semantic html', 'accessibilità', 'tag', 'structure', 'markup'],
      label: { it: 'HTML', en: 'HTML' },
      description: {
        it: 'Struttura, semantica e basi del markup.',
        en: 'Structure, semantics and markup fundamentals.'
      },
      href: 'html.html'
    },
    {
      key: 'css',
      keywords: ['style', 'layout', 'grid', 'flexbox', 'responsive'],
      label: { it: 'CSS', en: 'CSS' },
      description: {
        it: 'Stile, layout responsivi e design system.',
        en: 'Styling, responsive layouts and design systems.'
      },
      href: 'css.html'
    },
    {
      key: 'js',
      keywords: ['javascript', 'dom', 'events', 'logic', 'interattività'],
      label: { it: 'JavaScript', en: 'JavaScript' },
      description: {
        it: 'Logica, interazioni e dinamiche del browser.',
        en: 'Logic, interactions and browser dynamics.'
      },
      href: 'js.html'
    },
	{
      key: 'commandline',
      keywords: ['semantic html', 'accessibilità', 'tag', 'structure', 'markup'],
      label: { it: 'Command Line', en: 'Command Line' },
      description: {
        it: 'Struttura, semantica e basi del markup.',
        en: 'Structure, semantics and markup fundamentals.'
      },
      href: 'commandline.html'
    },
	{
      key: 'node',
      keywords: ['semantic html', 'accessibilità', 'tag', 'structure', 'markup'],
      label: { it: 'Node', en: 'Node' },
      description: {
        it: 'Struttura, semantica e basi del markup.',
        en: 'Structure, semantics and markup fundamentals.'
      },
      href: 'node.html'
    },
    {
      key: 'react',
      keywords: ['components', 'frontend', 'ui', 'hooks'],
      label: { it: 'React', en: 'React' },
      description: {
        it: 'Componenti, stato e interfacce modulari.',
        en: 'Components, state and modular interfaces.'
      },
      href: 'react.html'
    },
    {
      key: 'redux',
      keywords: ['state management', 'store', 'actions', 'reducers'],
      label: { it: 'Redux', en: 'Redux' },
      description: {
        it: 'Gestione centralizzata dello stato applicativo.',
        en: 'Centralized application state management.'
      },
      href: 'redux.html'
    },
    {
      key: 'express',
      keywords: ['backend', 'server', 'node', 'api'],
      label: { it: 'Express.js', en: 'Express.js' },
      description: {
        it: 'Routing, middleware e basi del backend con Node.',
        en: 'Routing, middleware and backend basics with Node.'
      },
      href: 'express-js.html'
    },
	{
      key: 'git',
      keywords: ['semantic html', 'accessibilità', 'tag', 'structure', 'markup'],
      label: { it: 'GIT', en: 'GIT' },
      description: {
        it: 'Pagina base pronta per versioning, commit, branch e flussi di lavoro locali..',
        en: 'Base page ready for versioning, commits, branches and local workflows.'
      },
      href: 'git.html'
    },
	{
      key: 'github',
      keywords: ['semantic html', 'accessibilità', 'tag', 'structure', 'markup'],
      label: { it: 'GitHub', en: 'GitHub' },
      description: {
        it: 'Pagina base pronta per repository, collaborazione e pubblicazione.',
        en: 'Base page ready for repositories, collaboration and publishing.'
      },
      href: 'github.html'
    },
  ],
/* GRID */
  pageContent: {
    home: {
      title: { it: 'Frontend Syllabus', en: 'Frontend Syllabus' },
      subtitle: {
        it: 'Una base ordinata per raccogliere argomenti, appunti e collegamenti del progetto portfolio.',
        en: 'A structured base to collect topics, notes and links for the portfolio project.'
      }
    },
    html: {
      title: { it: 'HTML', en: 'HTML' },
      subtitle: {
        it: 'Pagina base pronta per ospitare struttura, tag semantici e appunti operativi.',
        en: 'Base page ready to host structure, semantic tags and practical notes.'
      }
    },
    css: {
      title: { it: 'CSS', en: 'CSS' },
      subtitle: {
        it: 'Pagina base pronta per layout, selettori, responsive design e accessibilità visiva.',
        en: 'Base page ready for layouts, selectors, responsive design and visual accessibility.'
      }
    },
    js: {
      title: { it: 'JavaScript', en: 'JavaScript' },
      subtitle: {
        it: 'Pagina base pronta per logica, DOM, eventi e funzionalità dinamiche.',
        en: 'Base page ready for logic, DOM, events and dynamic functionality.'
      }
    },
	commandline: {
      title: { it: 'Command Line', en: 'Command Line' },
      subtitle: {
        it: 'Pagina base pronta per form, riferimenti e call to action finale.',
        en: 'Base page ready for form, references and final call to action.'
      }
    },
    react: {
      title: { it: 'React', en: 'React' },
      subtitle: {
        it: 'Pagina base pronta per componenti, props, stato e rendering.',
        en: 'Base page ready for components, props, state and rendering.'
      }
    },
    redux: {
      title: { it: 'Redux', en: 'Redux' },
      subtitle: {
        it: 'Pagina base pronta per store, action, reducer e data flow prevedibile.',
        en: 'Base page ready for store, actions, reducers and predictable data flow.'
      }
    },
    express: {
      title: { it: 'Express.js', en: 'Express.js' },
      subtitle: {
        it: 'Pagina base pronta per rotte, middleware e struttura server.',
        en: 'Base page ready for routes, middleware and server structure.'
      }
    },
    git: {
      title: { it: 'Git', en: 'Git' },
      subtitle: {
        it: 'Pagina base pronta per versioning, commit, branch e flussi di lavoro locali.',
        en: 'Base page ready for versioning, commits, branches and local workflows.'
      }
    },
    github: {
      title: { it: 'GitHub', en: 'GitHub' },
      subtitle: {
        it: 'Pagina base pronta per repository, collaborazione e pubblicazione.',
        en: 'Base page ready for repositories, collaboration and publishing.'
      }
    },
    contacts: {
      title: { it: 'Contatti', en: 'Contacts' },
      subtitle: {
        it: 'Pagina base pronta per form, riferimenti e call to action finale.',
        en: 'Base page ready for form, references and final call to action.'
      }
    },
	node: {
      title: { it: 'Node', en: 'Node' },
      subtitle: {
        it: 'Pagina base pronta per form, riferimenti e call to action finale.',
        en: 'Base page ready for form, references and final call to action.'
      }
    }
},
  ui: {
    skipLink: { it: 'Salta al contenuto principale', en: 'Skip to main content' },
    navLabel: { it: 'Navigazione principale', en: 'Main navigation' },
    menuToggle: { it: 'Apri o chiudi il menu', en: 'Open or close the menu' },
    themeLight: { it: 'Attiva modalità chiara', en: 'Switch to light mode' },
    themeDark: { it: 'Attiva modalità scura', en: 'Switch to dark mode' },
    langSwitch: { it: 'Passa all’inglese', en: 'Switch to Italian' },
    searchLabel: { it: 'Cerca un argomento', en: 'Search a topic' },
    searchPlaceholder: { it: 'Filtra per parola chiave...', en: 'Filter by keyword...' },
    searchHint: {
      it: 'Puoi cercare per tecnologia, concetto o parola chiave.',
      en: 'You can search by technology, concept or keyword.'
    },
    resultsCount: { it: 'argomenti trovati', en: 'topics found' },
    noResults: {
      it: 'Nessun argomento trovato. Prova con un’altra parola chiave.',
      en: 'No topic found. Try another keyword.'
    },
    footerText: {
      it: 'Progetto portfolio in evoluzione. Frontend first, caos sotto controllo.',
      en: 'Portfolio project in progress. Frontend first, chaos under control.'
    },
    ctaExplore: { it: 'Vai alla pagina', en: 'Open page' },
    sectionTitle: { it: 'Contenuto in preparazione', en: 'Content in progress' },
    sectionText: {
      it: 'Questa pagina contiene la struttura base ed è pronta per essere ampliata.',
      en: 'This page contains the base structure and is ready to be expanded.'
    },
    footerRights: { it: 'Tutti i diritti riservati.', en: 'All rights reserved.' }
  }
};
