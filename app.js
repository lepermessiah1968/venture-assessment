// NULLPOINT Venture assessment interactive engine
// Focus: Visuals-first, extremely punchy, no wordy AI blocks.

// Data for the entire research assessment
const assessmentData = {
  hero: {
    suits: {
      title: "Venture Scorecard",
      subtitle: "The Hiring Platform vs. Managed Agents",
      meta: "NULLPOINT ENGINEERING | CONFIDENTIAL DECISION MATRIX",
      desc: "An executive, visuals-first comparison of Moats, Margins, Execution Speed, and Competitive Windows. Stop reading blocks of text. Look at the numbers."
    },
    caveman: {
      title: "MAMMOTH vs MONKEY BOX",
      subtitle: "ROCK FIGHT FOR CHEAP SHINY STONES",
      meta: "Frederik and Noah choose weapon at fire | May 2026",
      desc: "Do not read long letters. Big chiefs have no time. Look at how many bones we get, how fast we get them, and if wild beasts steal them."
    }
  },
  overview: {
    ideaA: {
      suits: {
        title: "Idea A: The Hiring Platform",
        tagline: "Autonomous Recruiting Network",
        desc: "A matching system where candidates & employers both have AI agents negotiating deals using public data from day one, growing into a locked-in verified trust network."
      },
      caveman: {
        title: "Mammoth Trap (Hiring)",
        tagline: "Smart Agent Hunt Hunter For Chief",
        desc: "LinkedIn is bad cave dance. Resumes are pile of bad stones. Candidates send trash in dark hole. We let two magic spirits talk in secret and find the catch."
      }
    },
    ideaB: {
      suits: {
        title: "Idea B: Managed Agents",
        tagline: "Zero-DevOps 24/7 Container Hosting",
        desc: "A managed hosting and onboarding layer on top of NanoBot that makes 24/7 personal agents accessible to non-technical users via a plain-English skill shop."
      },
      caveman: {
        title: "Magic In Box (Managed Agents)",
        tagline: "Rent Chores Monkeys to Lazy Cavemen",
        desc: "Smart agents are too hard for Oog to run. We lock a smart monkey inside a tiny container box. One click, box open, monkey works 24/7 for shiny rocks."
      }
    }
  },
  
  // Dimensions with numerical scores to generate custom visual progress bars
  dimensions: [
    {
      id: "market-size",
      label: "Market Size & TAM",
      icon: "🌐",
      scores: { a: 9.5, b: 6.0 }, // Scores out of 10
      metricLabel: "Total Addressable Market",
      suits: {
        a: "Huge ($700B+ recruiting market). LinkedIn is an $18B monster using static data. Handshake has 18M students but zero agent matching. Open space.",
        b: "Workflow automation is growing rapidly but highly fragmented. TAM depends heavily on vertical focus. Tougher to capture large wedges.",
        verdict: "Idea A targets a massive, unified HR industry. Idea B targets a scattered SMB/consumer market."
      },
      caveman: {
        a: " recruiting market is BIG MOUNTAIN ($700B). LinkedIn is fat, lazy mammoth with $17B rocks. Handshake has 18M young hunters but just sits there.",
        b: "Many caves need monkeys, but hard to tell who has shiny rocks. Must choose one narrow path to survive.",
        verdict: "A = Catch big mammoth. B = Shoot many tiny birds."
      }
    },
    {
      id: "moat",
      label: "Moat & Defensibility",
      icon: "🛡️",
      scores: { a: 9.0, b: 2.0 },
      metricLabel: "Competitive Defensibility",
      suits: {
        a: "Strong and compounding. Every verified profile and match creates a 'trust graph' of peer signals that cannot be copied. LinkedIn cannot compete because auto-matching cannibalizes 70% of their manual search revenue.",
        b: "Thin and time-sensitive. Underlying tech (NanoBot, Claude, microVMs) is open source and easily copied. High threat of Apple/OpenAI native consumer agent setup experiences.",
        verdict: "Idea A creates a compounding data network effect. Idea B has no technical lock-in."
      },
      caveman: {
        a: "BIG STONE WALL. Verified trust graph is heavy stone, hard to steal. Big blue LinkedIn mammoth too fat to run. If it does auto-matching, it eats own tail!",
        b: "LOW FENCE. Any caveman can copy magic monkey (NanoBot). Big gods (Apple/OpenAI) making free monkeys. If monkey doesn't have special data, users jump cave.",
        verdict: "A = Stone fortress. B = Shiny wooden tent."
      }
    },
    {
      id: "economics",
      label: "Unit Economics",
      icon: "💰",
      scores: { a: 9.5, b: 5.0 },
      metricLabel: "Gross Profit Margin",
      suits: {
        a: "Outstanding. High ticket value ($7,000–$16,500 per successful hire). Zero upfront sales friction—employers pay nothing until successfully matched. Low infra cost.",
        b: "Precarious. B2B team plan ($200/mo) is viable, but consumer plans ($20/mo) face extreme margin pressure. Power users running constant workflows can generate API fuel costs exceeding subscription.",
        verdict: "Idea A features high deal value & 90%+ margins. Idea B is a low-margin game vulnerable to power users."
      },
      caveman: {
        a: "BIG MEAT. Chief pays zero rocks until hunter caught. When hunter caught, Chief pays $10,000 in shiny rocks! Cost to run magic machine is tiny pebble.",
        b: "SKINNY FISH. B2B team plan ($200/mo) is nice. Consumer tier ($20/mo) is trap—one heavy caveman runs monkey all day, eats $15 in magic API wood fuel, kills profit.",
        verdict: "A = Hunt one mammoth, eat for moon. B = Catch small flies."
      }
    },
    {
      id: "first-dollar",
      label: "Path to First Dollar",
      icon: "⚡",
      scores: { a: 9.0, b: 3.0 },
      metricLabel: "Execution Speed to Revenue",
      suits: {
        a: "Immediate. Perfect for 'Wizard of Oz' concierge approach. Founders can manually scrape Vanderbilt portfolios, match students to employers, and collect cash in weeks before building code.",
        b: "Delayed. No manual shortcuts exist because the infrastructure is the product. The microVM containerization, billing systems, and skill marketplace must be fully built before the first sale.",
        verdict: "Idea A can monetize in weeks via manual service. Idea B requires months of heavy backend build."
      },
      caveman: {
        a: "LIGHTNING FAST. No need build full magic machine to get shiny rocks. Founders match hunter and Chief by hand, whisper in ear, and collect placement fee.",
        b: "SLOW WALK. Cannot fake magic box. Must build container cage, skill shop, and routing wires first. Months of building before first rock.",
        verdict: "A = Trade meat tomorrow. B = Build entire water system before first sip."
      }
    },
    {
      id: "big-tech",
      label: "Big Tech Threat Immunity",
      icon: "🦖",
      scores: { a: 8.0, b: 1.5 }, // High score = immune / safe, low score = highly vulnerable
      metricLabel: "Resistance to Platform Risk",
      suits: {
        a: "Highly immune. HR tech is structurally protected by trust, compliance, and human verification. Giants like Google/Apple will not build candidate-focused double agents or localized campus wedges.",
        b: "Extremely vulnerable. Google, Apple, and OpenAI are building desktop/phone automation natively. A generic managed agent layer will be crushed once OS-native agents are free.",
        verdict: "Idea A operates in a safe niche; Idea B is directly in the path of Apple/Google/OpenAI agent rollouts."
      },
      caveman: {
        a: "SAFE FROM BEASTS. Big tech gods do not care about small campus student wedges. They cannot replicate local relationships and trusted references.",
        b: "DINOSAUR FOOTPRINT. Big gods (Apple Intelligence, OpenAI Operator) are stomping. They are releasing free, fast monkeys natively. Our tiny container cage will get stepped on.",
        verdict: "A = Safe cave in mountains. B = Flat tent in path of stomping dinosaurs."
      }
    },
    {
      id: "ops-simplicity",
      label: "Support Simplicity",
      icon: "🔧",
      scores: { a: 8.0, b: 2.0 }, // High score = low operational support burden
      metricLabel: "Operational Scalability",
      suits: {
        a: "Highly scalable. Human recruiters act as validators. Standard web app. Hallucination risks are strictly mitigated by checking matches manually before delivery.",
        b: "Support nightmare. Non-technical users face non-deterministic agent failures (prompt injections, integration breakdowns). Generating enormous ticket volumes that scale linearly with users.",
        verdict: "Idea A keeps operations simple with human-in-the-loop validation. Idea B requires 24/7 technical customer support."
      },
      caveman: {
        a: "NO HEADACHE. Simple web board. Human always makes final decision, so if magic spirit makes mistake, we catch it first. Low noise.",
        b: "SCREAMING CAVEMEN. Non-technical cavemen scream and throw rocks when monkey breaks, deletes calendar, or sends wrong smoke signal. Noah must answer tickets all day.",
        verdict: "A = Low maintenance trap. B = Angry monkeys crying in cages."
      }
    }
  ],
  
  timeline: {
    ideaA: [
      { phase: "Wk 1-4", suits: "Build scraper + conversational onboarding mirror. Agent scans Vanderbilt feeds.", caveman: "Build spear. Make mirror tell stories. Scan trails." },
      { phase: "Wk 5-8", suits: "Match candidates manually. Act as concierge recruiter. Take first $10k placement fee.", caveman: "Wizard of Oz: Match by hand. Eat big meat today." },
      { phase: "Wk 9-12", suits: "Build self-serve employer dashboard, natural language search, automated references.", caveman: "Build fire board for Chiefs to search hunters." },
      { phase: "Mo 3-6", suits: "Integrate ATS (Greenhouse). Scale trust graph network and transition to SaaS.", caveman: "Connect external caves. Charge moon tax." }
    ],
    ideaB: [
      { phase: "Wk 1-4", suits: "Package NanoBot on scale-to-zero microVM cages. Set up Claude routing. Curate 10 skills.", caveman: "Build monkey cages (microVMs). Teach 10 chores." },
      { phase: "Wk 5-8", suits: "Deploy conversational onboarding mapping persona to capabilities. Build Skill Shop UI.", caveman: "Make nice Skill Shop where users tap to buy chores." },
      { phase: "Wk 9-12", suits: "Beta-test with existing NULLPOINT SMB clients. Convert episodic consulting to $200/mo.", caveman: "Rent packages to current clients. Convert spear build to monthly rent." }
    ]
  }
};

// State variables
let currentMode = 'suits';
let activeTimeline = 'ideaA';

// DOM elements
const modeToggleBtn = document.getElementById('mode-toggle-btn');
const modeToggleText = document.getElementById('mode-toggle-text');
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const heroMeta = document.getElementById('hero-meta');
const heroDesc = document.getElementById('hero-desc');

const matrixContainer = document.getElementById('matrix-container');

const timelineTabA = document.getElementById('timeline-tab-a');
const timelineTabB = document.getElementById('timeline-tab-b');
const timelineContainer = document.getElementById('timeline-container');

const pollContainer = document.getElementById('poll-container');

function triggerInteraction() {
  if (navigator.vibrate) {
    navigator.vibrate(5);
  }
}

// Update the DOM based on active mode
function updateContent() {
  triggerInteraction();
  
  const isSuits = currentMode === 'suits';
  
  // Toggle styling class
  if (isSuits) {
    modeToggleText.innerHTML = '💼 Suits Mode <span class="toggle-pill active">On</span>';
    document.body.classList.remove('caveman-active');
  } else {
    modeToggleText.innerHTML = '🍖 Caveman Mode <span class="toggle-pill active caveman">On</span>';
    document.body.classList.add('caveman-active');
  }

  // Update Hero
  const heroText = assessmentData.hero[currentMode];
  heroTitle.textContent = heroText.title;
  heroSubtitle.textContent = heroText.subtitle;
  heroMeta.textContent = heroText.meta;
  heroDesc.textContent = heroText.desc;

  // Render Matrix Rows with graphical metrics
  renderMatrix();

  // Render Timeline
  renderTimeline();
  
  // Render Voting Box
  renderPoll();
}

// Toggle Mode
function toggleMode() {
  currentMode = currentMode === 'suits' ? 'caveman' : 'suits';
  document.body.classList.add('mode-transitioning');
  setTimeout(() => {
    updateContent();
    document.body.classList.remove('mode-transitioning');
  }, 200);
}

// Generate the visual score bar or list of bones
function generateVisualIndicator(score, type) {
  const isSuits = currentMode === 'suits';
  const max = 10;
  const pct = Math.round((score / max) * 100);
  
  if (isSuits) {
    const colorClass = score >= 8 ? 'good' : (score >= 5 ? 'avg' : 'bad');
    return `
      <div class="visual-score-container">
        <div class="visual-score-bar ${colorClass}" style="width: ${pct}%"></div>
        <span class="visual-score-text">${score.toFixed(1)}/10</span>
      </div>
    `;
  } else {
    // Caveman: Output bones 🦴 or fires 🔥
    const count = Math.round(score / 2);
    const symbol = type === 'ideaA' ? '🍖' : '🐒';
    let output = '';
    for(let i=0; i<5; i++) {
      if (i < count) {
        output += `<span class="cave-icon-active">${symbol}</span>`;
      } else {
        output += `<span class="cave-icon-inactive">☠️</span>`;
      }
    }
    return `<div class="cave-rating-rack">${output} <small>(${score >= 8 ? 'FAT' : (score >= 5 ? 'OKAY' : 'WEAK')})</small></div>`;
  }
}

// Render Matrix Rows
function renderMatrix() {
  const openIds = Array.from(document.querySelectorAll('.matrix-row.open')).map(el => el.dataset.id);
  matrixContainer.innerHTML = '';

  assessmentData.dimensions.forEach(dim => {
    const isOpen = openIds.includes(dim.id);
    const row = document.createElement('div');
    row.className = `matrix-row ${isOpen ? 'open' : ''}`;
    row.dataset.id = dim.id;

    // Header structure of row
    const rowHeader = document.createElement('div');
    rowHeader.className = 'matrix-row-header';
    rowHeader.innerHTML = `
      <div class="matrix-row-title">
        <span class="matrix-icon">${dim.icon}</span>
        <h4>${dim.label}</h4>
      </div>
      <div class="matrix-row-indicators">
        <span class="indicator-badge">${currentMode === 'suits' ? dim.metricLabel : 'CAVE SCORING'}</span>
        <span class="chevron">▼</span>
      </div>
    `;

    // Visual side-by-side graphical rating bar
    const visualRatingHeader = `
      <div class="matrix-mini-chart">
        <div class="mini-chart-row">
          <span class="mini-label">${currentMode === 'suits' ? 'Idea A (Hiring)' : 'Mammoth Trap'}</span>
          ${generateVisualIndicator(dim.scores.a, 'ideaA')}
        </div>
        <div class="mini-chart-row">
          <span class="mini-label">${currentMode === 'suits' ? 'Idea B (Agents)' : 'Magic In Box'}</span>
          ${generateVisualIndicator(dim.scores.b, 'ideaB')}
        </div>
      </div>
    `;

    // Expandable content
    const rowContent = document.createElement('div');
    rowContent.className = 'matrix-row-content';
    rowContent.innerHTML = `
      ${visualRatingHeader}
      <div class="matrix-comparison-grid">
        <div class="comparison-card idea-a-detail">
          <h5>${currentMode === 'suits' ? 'Idea A: The Hiring Platform' : 'Idea A: Mammoth Trap'}</h5>
          <p>${dim[currentMode].a}</p>
        </div>
        <div class="comparison-card idea-b-detail">
          <h5>${currentMode === 'suits' ? 'Idea B: Managed Agents' : 'Idea B: Magic In Box'}</h5>
          <p>${dim[currentMode].b}</p>
        </div>
      </div>
      <div class="matrix-row-verdict">
        <strong>${currentMode === 'suits' ? 'Verdict' : 'Cave Verdict'}:</strong> ${dim[currentMode].verdict}
      </div>
    `;

    row.appendChild(rowHeader);
    row.appendChild(rowContent);

    rowHeader.addEventListener('click', () => {
      row.classList.toggle('open');
      triggerInteraction();
    });

    matrixContainer.appendChild(row);
  });
}

// Render Timeline Progress
function renderTimeline() {
  const steps = assessmentData.timeline[activeTimeline];
  timelineContainer.innerHTML = '';

  if (activeTimeline === 'ideaA') {
    timelineTabA.classList.add('active');
    timelineTabB.classList.remove('active');
  } else {
    timelineTabA.classList.remove('active');
    timelineTabB.classList.add('active');
  }

  steps.forEach((step, idx) => {
    const card = document.createElement('div');
    card.className = 'timeline-card';
    card.style.animationDelay = `${idx * 0.1}s`;

    card.innerHTML = `
      <div class="timeline-badge">${step.phase}</div>
      <p class="timeline-desc">${currentMode === 'suits' ? step.suits : step.caveman}</p>
    `;
    timelineContainer.appendChild(card);
  });
}

// Handle Voting Poll
const DEFAULT_POLL = { a: 12, b: 8 };

function getPollData() {
  const data = localStorage.getItem('nullpoint_poll_votes');
  if (data) { return JSON.parse(data); }
  return DEFAULT_POLL;
}

function castVote(option) {
  triggerInteraction();
  const votes = getPollData();
  votes[option] += 1;
  localStorage.setItem('nullpoint_poll_votes', JSON.stringify(votes));
  localStorage.setItem('nullpoint_has_voted', option);
  renderPoll();
}

function renderPoll() {
  const votes = getPollData();
  const total = votes.a + votes.b;
  const pctA = Math.round((votes.a / total) * 100);
  const pctB = Math.round((votes.b / total) * 100);
  const hasVoted = localStorage.getItem('nullpoint_has_voted');

  const isSuits = currentMode === 'suits';
  
  let headerHtml = '';
  if (isSuits) {
    headerHtml = `
      <h3>NULLPOINT Consensus Ballot</h3>
      <p class="poll-desc">Frederik & Noah, cast your initial vote. Which path matches our current priorities?</p>
    `;
  } else {
    headerHtml = `
      <h3>TRIBAL ROCK THROW</h3>
      <p class="poll-desc">Noah and Frederik: throw heavy rock at favorite cave direction!</p>
    `;
  }

  let bodyHtml = '';
  if (hasVoted) {
    bodyHtml = `
      <div class="poll-results">
        <div class="result-bar-group">
          <div class="result-label">
            <span>${isSuits ? 'Idea A: The Hiring Platform' : 'Idea A: Mammoth Trap'}</span>
            <strong>${pctA}% (${votes.a} votes)</strong>
          </div>
          <div class="progress-bar-container idea-a">
            <div class="progress-bar-fill" style="width: ${pctA}%"></div>
          </div>
        </div>

        <div class="result-bar-group">
          <div class="result-label">
            <span>${isSuits ? 'Idea B: Managed Agents' : 'Idea B: Magic In Box'}</span>
            <strong>${pctB}% (${votes.b} votes)</strong>
          </div>
          <div class="progress-bar-container idea-b">
            <div class="progress-bar-fill" style="width: ${pctB}%"></div>
          </div>
        </div>
        
        <button id="reset-vote-btn" class="secondary-btn">
          ${isSuits ? 'Reset Vote' : 'Reset Rock'}
        </button>
      </div>
    `;
  } else {
    bodyHtml = `
      <div class="poll-actions">
        <button class="poll-btn option-a" onclick="castVote('a')">
          <span class="btn-icon">💼</span>
          <span class="btn-text">
            <strong>${isSuits ? 'Vote Idea A: Hiring Platform' : 'Vote Mammoth Trap'}</strong>
            <small>${isSuits ? 'Venture scale, compounding trust graph' : 'Hunt big mammoth, get $10k rocks'}</small>
          </span>
        </button>

        <button class="poll-btn option-b" onclick="castVote('b')">
          <span class="btn-icon">🍖</span>
          <span class="btn-text">
            <strong>${isSuits ? 'Vote Idea B: Managed Agents' : 'Vote Magic In Box'}</strong>
            <small>${isSuits ? 'Productized service, predictable cashflow' : 'Rent smart monkeys to lazy cavemen'}</small>
          </span>
        </button>
      </div>
    `;
  }

  pollContainer.innerHTML = headerHtml + bodyHtml;

  const resetBtn = document.getElementById('reset-vote-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem('nullpoint_has_voted');
      triggerInteraction();
      renderPoll();
    });
  }
}

// Event Listeners
modeToggleBtn.addEventListener('click', toggleMode);

timelineTabA.addEventListener('click', () => {
  activeTimeline = 'ideaA';
  triggerInteraction();
  renderTimeline();
});

timelineTabB.addEventListener('click', () => {
  activeTimeline = 'ideaB';
  triggerInteraction();
  renderTimeline();
});

window.castVote = castVote;

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const firstRow = document.querySelector('.matrix-row');
    if (firstRow) {
      firstRow.classList.add('open');
    }
  }, 400);

  updateContent();
});
