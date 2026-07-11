/* Shared rendering + navigation + motion. You should not need to edit this file. */

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s || "";
  return d.innerHTML;
}

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Section pages: bento-style content cards ---------- */
function cardHTML(item, i) {
  const tags = (item.tags || []).map((t) => `<span class="pill">${esc(t)}</span>`).join("");
  const links = (item.links || [])
    .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} →</a>`)
    .join("");
  const colors = ["#0058A8", "#22D3EE", "#2B8FE0"];
  const delay = Math.min(i * 60, 360);
  return `<article class="bento card reveal" data-tilt style="transition-delay:${delay}ms">
    <div class="corner-grad" style="background:${colors[i % 3]}"></div><div class="sheen"></div>
    <div class="inner">
      ${item.meta ? `<div class="card-meta">${esc(item.meta)}</div>` : ""}
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.description)}</p>
      ${tags ? `<div class="pills">${tags}</div>` : ""}
      ${links ? `<div class="card-links">${links}</div>` : ""}
    </div>
  </article>`;
}

function renderSection(key, targetId = "cards") {
  const el = document.getElementById(targetId);
  const items = (typeof SECTIONS !== "undefined" && SECTIONS[key]) || [];
  el.innerHTML = items.length
    ? items.map(cardHTML).join("")
    : `<p style="color:var(--slate)">Nothing here yet — check back soon.</p>`;
  observeReveals();
  initTilt();
}

/* ---------- Homepage ---------- */
function renderHome() {
  // News timeline
  const tl = document.getElementById("news-timeline");
  if (tl && typeof NEWS !== "undefined") {
    tl.innerHTML = NEWS.map(
      (n, i) => `<div class="tl-item reveal" style="transition-delay:${Math.min(i * 80, 400)}ms">
        <div class="tl-dot"></div>
        <div class="tl-card">
          <div class="date">${esc(n.date)}</div>
          <h3>${n.link ? `<a href="${esc(n.link)}">${esc(n.title)}</a>` : esc(n.title)}</h3>
          <p>${esc(n.text)}</p>
        </div>
      </div>`
    ).join("");
  }
  // Latest-update chip on the portrait
  const chip = document.getElementById("chip-latest");
  if (chip && typeof NEWS !== "undefined" && NEWS.length) chip.textContent = NEWS[0].title;

  // Marquee topics (duplicated for seamless loop)
  const mq = document.getElementById("marquee");
  if (mq && SITE.topics) {
    const row = SITE.topics
      .map((t) => `<span>${esc(t)}</span><span class="diamond">◆</span>`)
      .join("");
    mq.innerHTML = `<div>${row}</div><div aria-hidden="true">${row}</div>`;
  }

  // Footer profile links (after the Email button)
  const fl = document.getElementById("footer-links");
  if (fl && SITE.links) {
    SITE.links.forEach((l) => {
      const a = document.createElement("a");
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = l.label;
      fl.appendChild(a);
    });
  }

  observeReveals();
  initTilt();
}

/* Fill in text bound to SITE fields */
function renderSite() {
  document.querySelectorAll("[data-site]").forEach((el) => {
    const k = el.getAttribute("data-site");
    if (SITE[k]) el.textContent = SITE[k];
  });
}

/* ---------- Reveal on scroll ---------- */
let _observer;
function observeReveals() {
  if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }
  if (!_observer) {
    _observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            _observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => _observer.observe(el));
}

/* ---------- Subtle 3D tilt on bento cards ---------- */
function initTilt() {
  if (REDUCED_MOTION || !window.matchMedia("(hover: hover)").matches) return;
  document.querySelectorAll("[data-tilt]:not([data-tilt-ready])").forEach((el) => {
    el.setAttribute("data-tilt-ready", "1");
    el.addEventListener("mousemove", (ev) => {
      const r = el.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width - 0.5;
      const y = (ev.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-4px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

/* ---------- Nav ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderSite();
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });
  const toggle = document.getElementById("nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  observeReveals();
  initTilt();
});
