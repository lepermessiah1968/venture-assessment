// NULLPOINT Venture assessment interactive engine
// May 2026 - Confidential

// Data for the entire research assessment
const assessmentData = {
  hero: {
    suits: {
      title: "The Agent Duel",
      subtitle: "A Comprehensive Venture Assessment",
      meta: "Prepared for Frederik Schutz & Noah | May 2026",
      desc: "An unbiased, multidimensional evaluation of two venture opportunities: The Hiring Platform vs. The Managed Agent Platform. Both represent technically viable paths for a two-person team, yet present starkly contrasting moats, financial profiles, and scaling potentials."
    },
    caveman: {
      title: "MAMMOTH TRAP vs MAGIC IN BOX",
      subtitle: "BIG BRAIN FIGHT FOR NULLPOINT CAVE",
      meta: "Noah and Frederik make campfire decision | Moon 5, Year 2026",
      desc: "Frederik and Noah have two ways to catch shiny rocks. One way make big tribe, other way rent magic monkeys. Here is simple truth. No big papers, no fancy words. Just real cave facts."
    }
  },
  overview: {
    ideaA: {
      suits: {
        title: "Idea A: The Hiring Platform",
        tagline: "Autonomous Agent-Driven Recruiting",
        desc: "A two-sided professional network where candidates and employers each deploy autonomous AI agents that negotiate matches using public signals. Over time, this interaction builds a verified trust network, ultimately cannibalizing static resume directories like LinkedIn and Handshake.",
        bullets: [
          "Conversational onboarding that constructs a profile passively from public signals.",
          "Dual-agent model where both sides are represented simultaneously in matching.",
          "Builds a verified, high-trust peer professional graph over years.",
          "Vanderbilt campus-first beachhead strategy bypassing enterprise sales cycles."
        ]
      },
      caveman: {
        title: "Mammoth Trap (Hiring Platform)",
        tagline: "Smart Agent Hunt Hunter For Chief",
        desc: "recruiting is broken. Resumes are pile of bad stones. LinkedIn is silly theater dance. Candidates throw fake letters in deep dark hole, Chiefs get drowned in trash. We send two magic spirits to do the work instead.",
        bullets: [
          "Hunter talk to magic mirror, mirror build profile from past hunts (GitHub, portfolio).",
          "Candidate get hunter agent, Chief get chief agent. They talk in secret.",
          "Find best match from public signals on day one.",
          "Chief only look when agent find real fat mammoth. No cold apply spam."
        ]
      }
    },
    ideaB: {
      suits: {
        title: "Idea B: The Managed Agent Platform",
        tagline: "Zero-DevOps Personal AI Container Hosting",
        desc: "A managed hosting layer on top of lightweight frameworks like NanoBot that makes 24/7 personal agents accessible to non-technical users. Features conversational onboarding, automated persona-to-capability routing, and a plain-English skill marketplace.",
        bullets: [
          "Powered by NanoBot: 4k LOC, 20MB memory, sub-200ms cold starts.",
          "One-click, conversation-driven backend container provisioning.",
          "Plain-English skill marketplace (e.g., 'texts you three key items every morning').",
          "Vertical focus leverages NULLPOINT's existing client network for distribution."
        ]
      },
      caveman: {
        title: "Magic In Box (Managed Agents)",
        tagline: "Rent Magic Monkeys To Lazy Cavemen",
        desc: "Smart agents (NanoBot, Hermes) are strong but too hard to use. Normal cavemen cannot clone git caves, spin up docker boxes, or write api keys. We put smart monkey inside tiny box. One click, box open, monkey work for you 24/7.",
        bullets: [
          "User lands on web cave, texts number, or talks to mirror.",
          "Claude god maps answers to skill kit automatically.",
          "Spin up tiny container cage (microVM) on backend instantly.",
          "Plain English Skill Shop: buy skills like 'read email, text Oog, alert danger'."
        ]
      }
    }
  },
  dimensions: [
    {
      id: "market-size",
      label: "Market Size & TAM",
      icon: "🌐",
      suits: {
        a: "Huge ($700B+ recruiting market). LinkedIn is an $18B monster locked in the past. Handshake owns college hiring but is a passive, dumb index. White space is massive for a verified professional trust identity.",
        b: "Vast workflow automation market, but consumer segment is highly fragmented. TAM is harder to size and depends entirely on which vertical niche is successfully captured.",
        verdict: "Idea A has a massive, clearly defined global TAM; Idea B has a highly fragmented target market."
      },
      caveman: {
        a: "Hiring is BIG MOUNTAIN of gold ($700B). LinkedIn is fat, lazy mammoth with $17B shiny rocks. Handshake has 18M young hunters but just sits there like dumb stone. Wide open path to capture all young hunters.",
        b: "Many caves need small chore monkeys, but hard to tell how many will pay. Market is wild jungle, must choose one narrow path (like real estate or freelance caves) to survive.",
        verdict: "Idea A: Big mammoth. Idea B: Many tiny squirrels."
      }
    },
    {
      id: "moat",
      label: "Moat & Defensibility",
      icon: "🛡️",
      suits: {
        a: "Extremely strong. Every verified profile, successful match, and peer rating builds a compounding, proprietary 'trust graph' that cannot be scraped. Competitors like LinkedIn cannot copy due to the Innovator's Dilemma—auto-matching eats their search friction revenue.",
        b: "Thin and highly vulnerable. The underlying tech (NanoBot, Claude, microVMs) is open source and easily copied. High risk of rapid commoditization as Apple, Google, and OpenAI build native consumer-agent setup experiences.",
        verdict: "Idea A builds a compounding network moat; Idea B relies on ephemeral UI and onboarding advantages."
      },
      caveman: {
        a: "BIG STONE WALL. Verified trust graph is heavy stone, hard to steal. Big blue LinkedIn mammoth too fat to run. It makes rocks from slow search. If it does auto-matching, it eats own tail! We have years to build fort.",
        b: "LOW FENCE. Any smart caveman can copy magic monkey (NanoBot). Big gods (Apple, Google, OpenAI) making free monkeys. If monkey does not have special data, users jump to next cave easily.",
        verdict: "Idea A: Heavy stone fortress. Idea B: Shiny wooden tent."
      }
    },
    {
      id: "economics",
      label: "Unit Economics",
      icon: "💰",
      suits: {
        a: "Exceptional. High-margin placement fees ($7,000–$16,500 based on 10-15% salary) paid only on success. Eliminates upfront sales friction. Marginal COGS per user since matching is software-driven.",
        b: "Precarious. A $200/mo B2B team plan is viable, but consumer plans ($20-25/mo) face extreme margin pressure. Power users running heavy workflows can generate API fuel costs that easily wipe out subscription revenues.",
        verdict: "Idea A features high ticket value and 90%+ margins; Idea B is a tight margin game vulnerable to power users."
      },
      caveman: {
        a: "BIG MEAT PILE. Chief pay zero rocks until hunter actually catch mammoth. When hunter caught, Chief pay $10,000 in shiny rocks! Cost to run magic machine is tiny pebble. 95% profit margin on every catch.",
        b: "SKINNY MEAT. B2B team plan ($200/mo) is nice fat fish. Consumer tier ($20/mo) is a trap! One power caveman run monkey all day, eat $15 in magic API wood fuel, kill profit margin. Dangerously thin.",
        verdict: "Idea A: Hunt one mammoth, eat for moon. Idea B: Catch small flies, pay for oil."
      }
    },
    {
      id: "first-dollar",
      label: "Path to First Dollar",
      icon: "⚡",
      suits: {
        a: "Immediate. The 'Wizard of Oz' approach works perfectly. Before building the product, founders can scrape public data, manually match Vanderbilt graduates to warm employers, and collect massive placement fees on day one.",
        b: "Delayed. No manual shortcuts exist because the infrastructure is the product. The containerization, skill marketplace, billing systems, and agent orchestration must be fully built and secure before the first customer can buy.",
        verdict: "Idea A can monetize in weeks via manual concierge; Idea B requires a complete, high-complexity build first."
      },
      caveman: {
        a: "LIGHTNING FAST. No need build full magic machine to get shiny rocks. Founders match hunter and Chief by hand, whisper in ear, and collect placement fee immediately. Do 'Wizard of Oz' trick!",
        b: "SLOW WALK. Cannot fake magic box. Must build container cage, skill shop, and routing wires first. If box has holes, monkey escape or burn cave. Months of building before first shiny rock.",
        verdict: "Idea A: Trade meat tomorrow. Idea B: Build full water system before first sip."
      }
    },
    {
      id: "go-to-market",
      label: "Go-to-Market Strategy",
      icon: "🎯",
      suits: {
        a: "Dense, hyper-local wedge at Vanderbilt University. Leverage student network, career center feeds, and an advisor (Francesca) with direct employer access. High density makes network effects trigger early.",
        b: "Leverage NULLPOINT's existing SMB client network. Position as a managed productized service, pivoting episodic $15k consulting into $200/mo recurring infrastructure. Narrower target but warm leads.",
        verdict: "Idea A relies on a high-density campus wedge; Idea B scales through productizing existing agency clients."
      },
      caveman: {
        a: "VANDERBILT TRIBE. Launch in one dense camp. Young hunters and advisors (Francesca) are already there. Expand campus by campus. Both agents scan public tracks on day one, so we don't need both sides on platform first.",
        b: "NULLPOINT CAMP. Sell to current friends of NULLPOINT cave. Pivot from 'build spear for $15k' (consulting) to 'rent spear-maker for $200/mo' (managed infra). Safe, but no viral wildfire.",
        verdict: "Idea A: Wildfire in dense camp. Idea B: Renting tools to neighbors."
      }
    },
    {
      id: "risks",
      label: "Primary Risks",
      icon: "⚠️",
      suits: {
        a: "Cold start network density; regulatory scrutiny (NYC Local Law 144 bias audits); potential employer concentration in early stages; credentials hallucination.",
        b: "Prompt injection security exploits (violates 'Rule of Two' security for broad permission agents); extreme support burden from non-technical users; high churn; dependency on Anthropic's pricing.",
        verdict: "Idea A's risks are operational and legal; Idea B faces critical structural security and support-scalability threats."
      },
      caveman: {
        a: "BAD SPIRITS. Need 1,000 hunters in cave first or no match. Big chief laws in NYC say no unfair magic. Agent might lie about qualifications and make Chief angry. But we keep human-in-the-loop.",
        b: "FIRE HAZARD. Bad spirits trick monkey (Prompt Injection) to steal cave secrets. Claude API god might raise fuel tax. Non-technical cavemen scream and throw rocks when monkey acts weird.",
        verdict: "Idea A: Hard to get first 1,000 hunters. Idea B: Monkey might burn down your cave."
      }
    },
    {
      id: "advantages",
      label: "Founder Advantages",
      icon: "✨",
      suits: {
        a: "Vanderbilt student access, Francesca's direct employer validation and door-opening capabilities, Frederik's target demographic empathy.",
        b: "Noah's exceptional system systems expertise (microVMs, containerization, NanoBot runtime isolation, DevOps optimization).",
        verdict: "Idea A leverages social capital and network access; Idea B leverages deep, world-class infra engineering."
      },
      caveman: {
        a: "TRIBAL ADVANTAGE. Vanderbilt tribe in hand. Francesca open big Chief doors. Frederik understands struggling young hunter because he is one.",
        b: "SPEAR MASTER. Noah is grand master of container cages. He can pack 1,000 monkeys in small cave for cheap. This is his domain.",
        verdict: "Idea A: We know the Chiefs. Idea B: We are the best blacksmiths."
      }
    },
    {
      id: "ceiling",
      label: "Exit Potential & Ceiling",
      icon: "🚀",
      suits: {
        a: "Venture scale. Delaware C-Corp. High potential for acquisition by LinkedIn, Indeed, or Workday at $10-50M when trust graph matures, or a massive $1B+ path if it replaces the resume standard.",
        b: "Lifestyle business or productized agency service. Hard to raise venture capital due to thin moat and high competition. Best suited for $1-5M ARR highly profitable bootstrapping.",
        verdict: "Idea A is a high-risk, venture-scale rocket; Idea B is a robust, profitable bootstrapped vehicle."
      },
      caveman: {
        a: "FLY TO THE SKY. Delaware C-Corp rocket. LinkedIn buy our cave for mountain of gold. Can grow to be biggest tribe in all lands, replacing paper resume pebbles forever.",
        b: "COMFY CAVE. Great lifestyle business. Make good gold every moon. Buy nice meat. But no big sky-rocket exit. Good side-hustle inside NULLPOINT.",
        verdict: "Idea A: Generational Empire. Idea B: Highly profitable blacksmith shop."
      }
    }
  ],
  timeline: {
    ideaA: [
      {
        phase: "Weeks 1–4",
        suits: {
          title: "Build the Core Scraper & Agent",
          desc: "Create conversational candidate onboarding using Claude API. Build public data agents scanning Vanderbilt career center feeds and portfolios. Deliver immediate value against public data on day one."
        },
        caveman: {
          title: "Build Spear & Tracker",
          desc: "Make candidate mirror tell stories. Build tracking agent that scans student tracks (GitHub, portfolios) and public mammoth trails (job feeds). Both sides get value immediately from public signals."
        }
      },
      {
        phase: "Weeks 5–8",
        suits: {
          title: "Wizard of Oz Concierge",
          desc: "Manually matches Vanderbilt candidates to warm employer opportunities sourced via advisor Francesca. Hand-deliver match recommendations and collect first high-ticket placement fees."
        },
        caveman: {
          title: "Wizard of Oz Trick",
          desc: "Frederik and Noah match hunters to Chiefs by hand. Deliver matches in person. Take first big piles of shiny rocks ($10k per placement) to prove it works."
        }
      },
      {
        phase: "Weeks 9–12",
        suits: {
          title: "Build The Dashboard",
          desc: "Develop self-service employer search dashboard, natural language search interface, automated references product. Solidify matching backend."
        },
        caveman: {
          title: "Build Big Mirror Board",
          desc: "Build self-service fire board for Chiefs. Let Chiefs search in plain English. Build automated reference-checker spirit. Stop matching by hand."
        }
      },
      {
        phase: "Months 3–6",
        suits: {
          title: "Scale Trust Graph & SaaS",
          desc: "Integrate ATS platforms (Greenhouse, Ashby). Implement peer-to-peer trust signals and private ratings. Transition from transaction fees to recurring SaaS."
        },
        caveman: {
          title: "Tribe Network & Moon Tax",
          desc: "Hook up to external ATS caves. Build deep trust web of private peer reviews. Charge monthly subscription rocks instead of just placement tax."
        }
      }
    ],
    ideaB: [
      {
        phase: "Weeks 1–4",
        suits: {
          title: "Containerization & Core API",
          desc: "Package NanoBot on scale-to-zero microVMs (Fly.io/Firecracker). Build Claude model routing logic. Curate initial 10-15 core skills library."
        },
        caveman: {
          title: "Build Monkey Cages",
          desc: "Noah builds ultra-cheap container cages (microVMs) for NanoBot monkeys. Set up Claude routing paths. Teach monkeys 10 simple starter chores."
        }
      },
      {
        phase: "Weeks 5–8",
        suits: {
          title: "Onboarding Flow & UX",
          desc: "Deploy conversational onboarding mapping persona to capabilities. Construct smart user dashboard, approval ledger, and Plain-English Skill Marketplace."
        },
        caveman: {
          title: "Monkey Shop UI",
          desc: "Make beautiful shop where users buy skills with one tap. Build smart dashboard showing monkey logs and approval buttons so monkey doesn't go wild."
        }
      },
      {
        phase: "Weeks 9–12",
        suits: {
          title: "Client Launch & Scaling",
          desc: "Beta-test with existing NULLPOINT SMB clients. Transition episodic projects to managed agent retainers ($200/mo). Refine support channels."
        },
        caveman: {
          title: "Rent to Neighbors",
          desc: "Rent B2B team packages ($200/mo) to current NULLPOINT clients. Turn manual consulting into monthly recurring rent. Make steady shiny rocks."
        }
      }
    ]
  }
};

// State variables
let currentMode = 'suits'; // 'suits' or 'caveman'
let activeTimeline = 'ideaA'; // 'ideaA' or 'ideaB'

// DOM elements
const modeToggleBtn = document.getElementById('mode-toggle-btn');
const modeToggleText = document.getElementById('mode-toggle-text');
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const heroMeta = document.getElementById('hero-meta');
const heroDesc = document.getElementById('hero-desc');

const cardATitle = document.getElementById('card-a-title');
const cardATagline = document.getElementById('card-a-tagline');
const cardADesc = document.getElementById('card-a-desc');
const cardABullets = document.getElementById('card-a-bullets');

const cardBTitle = document.getElementById('card-b-title');
const cardBTagline = document.getElementById('card-b-tagline');
const cardBDesc = document.getElementById('card-b-desc');
const cardBBullets = document.getElementById('card-b-bullets');

const matrixContainer = document.getElementById('matrix-container');

const timelineTabA = document.getElementById('timeline-tab-a');
const timelineTabB = document.getElementById('timeline-tab-b');
const timelineContainer = document.getElementById('timeline-container');

const pollContainer = document.getElementById('poll-container');

// Sound effects or slight haptic vibration feedback simulator
function triggerInteraction() {
  if (navigator.vibrate) {
    navigator.vibrate(5);
  }
}

// Function to update the DOM based on active mode
function updateContent() {
  triggerInteraction();
  
  const isSuits = currentMode === 'suits';
  
  // Update toggle UI
  if (isSuits) {
    modeToggleText.innerHTML = '💼 Suits Mode <span class="toggle-pill active">On</span>';
    document.body.classList.remove('caveman-active');
  } else {
    modeToggleText.innerHTML = '🍖 Caveman Mode <span class="toggle-pill active caveman">On</span>';
    document.body.classList.add('caveman-active');
  }

  // Update Hero Section with a smooth fade
  const heroText = assessmentData.hero[currentMode];
  heroTitle.textContent = heroText.title;
  heroSubtitle.textContent = heroText.subtitle;
  heroMeta.textContent = heroText.meta;
  heroDesc.textContent = heroText.desc;

  // Update Core Cards
  const cards = assessmentData.overview;
  
  cardATitle.textContent = cards.ideaA[currentMode].title;
  cardATagline.textContent = cards.ideaA[currentMode].tagline;
  cardADesc.textContent = cards.ideaA[currentMode].desc;
  
  cardABullets.innerHTML = '';
  cards.ideaA[currentMode].bullets.forEach(bullet => {
    const li = document.createElement('li');
    li.textContent = bullet;
    cardABullets.appendChild(li);
  });

  cardBTitle.textContent = cards.ideaB[currentMode].title;
  cardBTagline.textContent = cards.ideaB[currentMode].tagline;
  cardBDesc.textContent = cards.ideaB[currentMode].desc;

  cardBBullets.innerHTML = '';
  cards.ideaB[currentMode].bullets.forEach(bullet => {
    const li = document.createElement('li');
    li.textContent = bullet;
    cardBBullets.appendChild(li);
  });

  // Render Matrix Rows
  renderMatrix();

  // Render Timeline Section
  renderTimeline();
  
  // Render Voting Box
  renderPoll();
}

// Toggle Mode
function toggleMode() {
  currentMode = currentMode === 'suits' ? 'caveman' : 'suits';
  
  // Add transitioning class for a visual pop
  document.body.classList.add('mode-transitioning');
  setTimeout(() => {
    updateContent();
    document.body.classList.remove('mode-transitioning');
  }, 200);
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
        <span class="indicator-badge ${dim.id}">${getShortIndicator(dim.id)}</span>
        <span class="chevron">▼</span>
      </div>
    `;

    // Expandable content
    const rowContent = document.createElement('div');
    rowContent.className = 'matrix-row-content';
    rowContent.innerHTML = `
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
        <strong>${currentMode === 'suits' ? 'Direct Comparison' : 'Cave Verdict'}:</strong> ${dim[currentMode].verdict}
      </div>
    `;

    row.appendChild(rowHeader);
    row.appendChild(rowContent);

    // Event listener for expanding/collapsing
    rowHeader.addEventListener('click', () => {
      row.classList.toggle('open');
      triggerInteraction();
    });

    matrixContainer.appendChild(row);
  });
}

function getShortIndicator(id) {
  const isSuits = currentMode === 'suits';
  switch (id) {
    case 'market-size': return isSuits ? "$700B+ TAM" : "🌲 Big Mountain";
    case 'moat': return isSuits ? "Compounding Moat" : "🛡️ High Fortress";
    case 'economics': return isSuits ? "90%+ Margin" : "🍖 Fat Mammoth";
    case 'first-dollar': return isSuits ? "Weeks (Concierge)" : "⚡ Fast Spear";
    case 'go-to-market': return isSuits ? "Vandy wedge" : "🎯 Vandy Camp";
    case 'risks': return isSuits ? "Operational/Legal" : "🔥 Fire Hazard";
    case 'advantages': return isSuits ? "Social + Technical" : "✨ Great Spear Maker";
    case 'ceiling': return isSuits ? "Generational Exit" : "🚀 Sky Rocket";
    default: return "";
  }
}

// Render Timeline Progress
function renderTimeline() {
  const steps = assessmentData.timeline[activeTimeline];
  timelineContainer.innerHTML = '';

  // Tab highlights
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
      <h3>${step[currentMode].title}</h3>
      <p>${step[currentMode].desc}</p>
    `;
    timelineContainer.appendChild(card);
  });
}

// Handle Voting Poll
const DEFAULT_POLL = { a: 12, b: 8 };

function getPollData() {
  const data = localStorage.getItem('nullpoint_poll_votes');
  if (data) {
    return JSON.parse(data);
  }
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
      <h3>NULLPOINT Founder Consensus Poll</h3>
      <p class="poll-desc">Frederik and Noah, cast your initial vote. Which path aligns best with our current goals for NULLPOINT Engineering?</p>
    `;
  } else {
    headerHtml = `
      <h3>TRIBAL COUNCIL BALLOT</h3>
      <p class="poll-desc">Oog and Boog, throw rock at favorite side! Which path catch best meat and keep camp safe?</p>
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
          ${isSuits ? 'Reset Vote & Re-cast' : 'Throw Another Rock'}
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

  // Set up reset button handler if visible
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

// Expose global vote function for inline click handlers
window.castVote = castVote;

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  // Pre-expand first dimension for demonstration
  setTimeout(() => {
    const firstRow = document.querySelector('.matrix-row');
    if (firstRow) {
      firstRow.classList.add('open');
    }
  }, 400);

  updateContent();
});
