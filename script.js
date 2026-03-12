const CONTRIBUTORS_DIR = "contributors";

const contributorFiles = [
  "naol.json"
];

async function loadContributor(filename) {
  const response = await fetch(`${CONTRIBUTORS_DIR}/${filename}`);
  if (!response.ok) throw new Error(`Failed to load ${filename}`);
  return response.json();
}

function createCard(contributor, index) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.animationDelay = `${index * 0.1}s`;
  card.dataset.name = (contributor.name || "").toLowerCase();
  card.dataset.skills = (contributor.skills || []).join(" ").toLowerCase();

  const avatarUrl = contributor.avatar || "assets/images/placeholder.png";

  const skillsHtml = (contributor.skills || [])
    .map(skill => `<span class="skill-tag">${skill}</span>`)
    .join("");

  const socialLinks = [];
  if (contributor.github) {
    socialLinks.push(`<a href="https://github.com/${contributor.github}" target="_blank" title="GitHub">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
    </a>`);
  }
  if (contributor.social?.twitter) {
    socialLinks.push(`<a href="https://twitter.com/${contributor.social.twitter}" target="_blank" title="Twitter">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
    </a>`);
  }
  if (contributor.social?.linkedin) {
    socialLinks.push(`<a href="https://linkedin.com/in/${contributor.social.linkedin}" target="_blank" title="LinkedIn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>`);
  }
  if (contributor.social?.website) {
    socialLinks.push(`<a href="${contributor.social.website}" target="_blank" title="Website">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm9.885 11H17.4c-.1-3.075-.7-5.9-1.73-8.175A10.02 10.02 0 0121.885 11zM12 21.895c-1.4-2.1-2.4-4.8-2.6-7.895h5.2c-.2 3.1-1.2 5.8-2.6 7.895zM9.4 12c.2-3.1 1.2-5.8 2.6-7.895C13.4 6.2 14.4 8.9 14.6 12H9.4zM8.33 2.825C7.3 5.1 6.7 7.925 6.6 11H2.115A10.02 10.02 0 018.33 2.825zM2.115 13H6.6c.1 3.075.7 5.9 1.73 8.175A10.02 10.02 0 012.115 13zm13.555 8.175c1.03-2.275 1.63-5.1 1.73-8.175h4.485a10.02 10.02 0 01-6.215 8.175z"/></svg>
    </a>`);
  }

  card.innerHTML = `
    <img class="avatar" src="${avatarUrl}" alt="${contributor.name}'s avatar"
         onerror="this.src='assets/images/placeholder.png'">
    <h2 class="name">${contributor.name}</h2>
    <p class="bio">${contributor.bio || ""}</p>
    <div class="skills">${skillsHtml}</div>
    <div class="social-links">${socialLinks.join("")}</div>
  `;

  return card;
}

function fireConfetti() {
  if (typeof confetti !== "function") return;

  const duration = 1500;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#4285f4", "#ea4335", "#fbbc04", "#34a853"]
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#4285f4", "#ea4335", "#fbbc04", "#34a853"]
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

function animateCountUp(target, element) {
  const duration = 1000;
  const start = performance.now();

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.round(easeOutCubic(progress) * target);
    element.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

async function renderContributors() {
  const grid = document.getElementById("contributors-grid");
  const loading = document.getElementById("loading");
  const emptyState = document.getElementById("empty-state");
  const countEl = document.getElementById("contributor-count");

  const contributors = [];

  for (const file of contributorFiles) {
    try {
      const data = await loadContributor(file);
      contributors.push(data);
    } catch (err) {
      console.warn(`Skipping ${file}:`, err.message);
    }
  }

  loading.hidden = true;

  if (contributors.length === 0) {
    emptyState.hidden = false;
    return;
  }

  countEl.hidden = false;
  animateCountUp(contributors.length, document.getElementById("contributor-number"));

  contributors.forEach((contributor, i) => {
    grid.appendChild(createCard(contributor, i));
  });

  setTimeout(fireConfetti, 300);
}

/* ── Search / Filter ── */

function initSearch() {
  const input = document.getElementById("search");
  const grid = document.getElementById("contributors-grid");
  const noResults = document.getElementById("no-results");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    const cards = grid.querySelectorAll(".card");
    let visibleCount = 0;

    cards.forEach(card => {
      const matchesName = card.dataset.name.includes(query);
      const matchesSkill = card.dataset.skills.includes(query);
      const show = matchesName || matchesSkill;
      card.style.display = show ? "" : "none";
      if (show) visibleCount++;
    });

    noResults.hidden = visibleCount > 0;
  });
}

/* ── Dark / Light Theme Toggle ── */

function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  const saved = localStorage.getItem("theme");
  if (saved) {
    html.setAttribute("data-theme", saved);
  }

  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

/* ── Back to Top ── */

function initBackToTop() {
  const btn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ── Init ── */

document.addEventListener("DOMContentLoaded", () => {
  renderContributors();
  initSearch();
  initThemeToggle();
  initBackToTop();
});
