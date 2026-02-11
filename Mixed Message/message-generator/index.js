// Message Generator (Node.js)
// Run: node index.js
// Optional: node index.js qa | dev | motivation | chaos

const themes = {
  qa: {
    openers: [
      'In today’s test run,',
      'Right before the release,',
      'During regression,',
      'In the weirdest edge case,',
      'When the stakeholder says “it works on my machine”,'
    ],
    situations: [
      'a critical bug will appear',
      'a flaky test will waste your time',
      'a requirement will be “interpreted creatively”',
      'a UI change will silently break a flow',
      'a login issue will spawn three more issues'
    ],
    advice: [
      'reproduce it, isolate it, and write steps like a courtroom transcript',
      'capture evidence: logs, screenshots, and exact environment details',
      'ask for acceptance criteria and stop guessing',
      'triage by risk, not by noise',
      'simplify: one variable at a time, one hypothesis at a time'
    ],
    endings: [
      'Then ship with confidence.',
      'And yes, you get to say “told you so” (politely).',
      'That’s not paranoia. That’s quality.',
      'Your future self will thank you.',
      'Bugs fear documentation.'
    ]
  },

  dev: {
    openers: [
      'Today,',
      'This sprint,',
      'Right after you push,',
      'When you least expect it,',
      'At 2:00 AM in production,'
    ],
    situations: [
      'a missing semicolon will ruin your vibe',
      'a dependency will update itself into chaos',
      'a merge conflict will test your patience',
      'a “small hotfix” will become a saga',
      'a null value will jump-scare your app'
    ],
    advice: [
      'write the smallest fix that can possibly work',
      'add a test before you trust yourself',
      'refactor only after the bug is dead',
      'log intentionally: inputs, outputs, assumptions',
      'make it readable first, clever second'
    ],
    endings: [
      'Commit. Breathe. Repeat.',
      'Clean code is a love language.',
      'Shipping beats perfecting.',
      'Future-you is a stakeholder too.',
      'Make it work, then make it nice.'
    ]
  },

  motivation: {
    openers: [
      'Today,',
      'This week,',
      'In the next hour,',
      'Before you overthink it,',
      'Right now,'
    ],
    situations: [
      'your focus will be tested',
      'distractions will negotiate with your brain',
      'you’ll feel “not ready”',
      'your comfort zone will whisper excuses',
      'your energy will dip'
    ],
    advice: [
      'do one tiny step anyway',
      'set a 10-minute timer and start messy',
      'finish the first draft, then improve it',
      'pick the next action, not the perfect plan',
      'trade perfection for momentum'
    ],
    endings: [
      'Small moves compound.',
      'You don’t need motivation. You need a start.',
      'Discipline is just love with a schedule.',
      'Progress is louder than doubt.',
      'You’re building proof, not vibes.'
    ]
  },

  chaos: {
    openers: [
      'The universe reports:',
      'A mysterious oracle says:',
      'In the cosmic backlog,',
      'In a parallel timeline,',
      'The dice have spoken:'
    ],
    situations: [
      'a pineapple will judge your life choices',
      'your coffee will achieve sentience',
      'a keyboard will demand respect',
      'a bug will evolve into a feature',
      'a tab you forgot will become your destiny'
    ],
    advice: [
      'offer it a rubber duck and ask it to explain itself',
      'rename the variable and suddenly understand everything',
      'close 37 tabs and regain 2% sanity',
      'write a checklist and pretend it was the plan all along',
      'walk away for 3 minutes and return as a genius'
    ],
    endings: [
      'Reality is optional.',
      'Ship it anyway.',
      'The prophecy is satisfied.',
      'Chaos, but make it productive.',
      'You win by confusion.'
    ]
  }
};

// Returns a random element from an array.
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Builds a message from 4 independent random parts (>= 3 required).
const generateMessage = (themeKey) => {
  const theme = themes[themeKey] || themes.motivation;

  const opener = getRandomItem(theme.openers);
  const situation = getRandomItem(theme.situations);
  const advice = getRandomItem(theme.advice);
  const ending = getRandomItem(theme.endings);

  return `${opener} ${situation}. ${advice}. ${ending}`;
};

// Reads theme from command line: node index.js qa
const selectedTheme = (process.argv[2] || 'motivation').toLowerCase();
console.log(generateMessage(selectedTheme));