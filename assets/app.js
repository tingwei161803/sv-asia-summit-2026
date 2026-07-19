/* =========================================================================
   app.js — renders the whole page from window.SITE_* globals (see data/data.js)

   One render() repaints every section, the sticky nav, chrome and <title>
   in the active language, so the zh/en toggle never leaves stale text.
   ========================================================================= */
(function () {
  "use strict";

  var META = window.SITE_META || {};
  var EVENT = window.SITE_EVENT || {};
  var SPEAKERS = Array.isArray(window.SITE_SPEAKERS) ? window.SITE_SPEAKERS : [];
  var NOTES = Array.isArray(window.SITE_NOTES) ? window.SITE_NOTES : [];
  var LETTER = window.SITE_LETTER || {};
  var FACTCHECK = window.SITE_FACTCHECK || {};

  /* ---------- UI chrome strings ---------- */
  var I18N = {
    en: {
      statusChip: "July 19, 2026 · Taipei · event concluded",
      metaDate: "Date", metaTime: "Time", metaVenue: "Venue", metaFormat: "Format",
      format: "Ticketed — single NT$500 tier via Accupass",
      navOverview: "Overview", navEvent: "The event", navSpeakers: "Speakers",
      navNotes: "My notes", navContext: "Context", navFactcheck: "Fact-check",
      secEvent: "The event, verified", secEventSub: "What can actually be confirmed about this summit — and what only the organizer says.",
      secSpeakers: "Speakers", secSpeakersSub: "Backgrounds rebuilt from independent sources. Click any speaker for the claim-by-claim fact-check and references.",
      secNotes: "My session notes", secNotesSub: "Personal takeaways from each talk on the day.",
      secContext: "Context", secFactcheck: "Fact-check & sources",
      secFactcheckSub: "How the verification was done, and where it disagrees with the organizer's copy.",
      groupDay: "Spoke on the day", groupAbsent: "Announced, not on the day list",
      attendYes: "Spoke on the day", attendNo: "Not on day list · video per organizer",
      viewCheck: "Fact-check", close: "Close",
      dlgBio: "Verified profile", dlgFacts: "Claim-by-claim", dlgRefs: "References",
      notePlaceholder: "Notes coming soon — I'll write up this session shortly.",
      legendTitle: "Status legend",
      eventLinks: "Primary links",
      letterLinks: "Sources",
      researchLink: "Full research notes (GitHub)",
      statusLabels: { verified: "Verified", partial: "Partially verified", claimed: "Organizer claim only" }
    },
    zh: {
      statusChip: "2026 年 7 月 19 日・台北・活動已結束",
      metaDate: "日期", metaTime: "時間", metaVenue: "地點", metaFormat: "形式",
      format: "收費活動・Accupass 單一票種 NT$500",
      navOverview: "總覽", navEvent: "活動", navSpeakers: "講者",
      navNotes: "聽講心得", navContext: "背景脈絡", navFactcheck: "事實查核",
      secEvent: "活動資訊（已查證）", secEventSub: "這場峰會有哪些事實可以被證實——哪些只有主辦方單方面的說法。",
      secSpeakers: "講者", secSpeakersSub: "以獨立來源重建的講者背景。點擊任一位可看逐項查核與參考來源。",
      secNotes: "聽講心得", secNotesSub: "當天每場分享的個人筆記與收穫。",
      secContext: "背景脈絡", secFactcheck: "事實查核與來源",
      secFactcheckSub: "查證方法，以及與主辦方文案不符之處。",
      groupDay: "當天出席", groupAbsent: "原定講師・未在當天名單",
      attendYes: "當天出席", attendNo: "未在當天名單・主辦方稱改影片分享",
      viewCheck: "查核詳情", close: "關閉",
      dlgBio: "已驗證簡介", dlgFacts: "逐項查核", dlgRefs: "參考來源",
      notePlaceholder: "心得整理中——這場的筆記稍後補上。",
      legendTitle: "狀態說明",
      eventLinks: "主要連結",
      letterLinks: "來源",
      researchLink: "完整查核筆記（GitHub）",
      statusLabels: { verified: "已驗證", partial: "部分吻合", claimed: "僅主辦方宣稱" }
    }
  };

  var STATUS_ICONS = { verified: "check_circle", partial: "error", claimed: "help" };

  /* ---------- safe localStorage ---------- */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  var state = {
    lang: lsGet("lang") || "en",
    theme: lsGet("theme") || "light"
  };

  var $ = function (id) { return document.getElementById(id); };
  var sectionsEl = $("sections");
  var navInner = $("sectionNavInner");
  var dialog = $("dialog");
  var dialogBody = $("dialogBody");

  function t(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] || obj.en || obj.zh || "";
  }
  function ui(key) { return (I18N[state.lang] || I18N.en)[key]; }
  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  function badge(status) {
    var label = (ui("statusLabels") || {})[status] || status;
    return '<span class="badge badge--' + escapeHtml(status) + '">' +
      '<span class="material-symbols-rounded" aria-hidden="true">' + (STATUS_ICONS[status] || "info") + "</span>" +
      escapeHtml(label) + "</span>";
  }

  function sectionHead(kicker, title, sub) {
    return '<header class="section-head">' +
      '<div class="section-head__kicker">' + escapeHtml(kicker) + "</div>" +
      "<h2>" + escapeHtml(title) + "</h2>" +
      (sub ? '<p class="section-head__sub">' + escapeHtml(sub) + "</p>" : "") +
      "</header>";
  }

  function linkRow(links) {
    if (!links || !links.length) return "";
    return '<div class="linkrow">' + links.map(function (l) {
      return '<a class="linkchip" href="' + escapeHtml(l.url) + '" target="_blank" rel="noopener">' +
        '<span class="material-symbols-rounded" aria-hidden="true">open_in_new</span>' +
        escapeHtml(t(l.label)) + "</a>";
    }).join("") + "</div>";
  }

  /* ---------- section renderers ---------- */
  function renderHero() {
    var meta = [
      { k: ui("metaDate"), v: t(EVENT.date) },
      { k: ui("metaTime"), v: t(EVENT.time) },
      { k: ui("metaVenue"), v: t(EVENT.venue) },
      { k: ui("metaFormat"), v: ui("format") }
    ].map(function (m) {
      return '<div class="hero__meta-item"><b>' + escapeHtml(m.k) + "</b><span>" +
        escapeHtml(m.v) + "</span></div>";
    }).join("");
    return '<div class="hero" id="overview">' +
      '<span class="hero__status"><span class="dot" aria-hidden="true"></span>' + escapeHtml(ui("statusChip")) + "</span>" +
      "<h1>" + escapeHtml(t(META.title)) + "</h1>" +
      '<p class="hero__sub">' + escapeHtml(t(META.subtitle)) + "</p>" +
      '<div class="hero__meta">' + meta + "</div>" +
      "</div>";
  }

  function renderEvent() {
    var intro = (EVENT.intro || []).map(function (p) {
      return "<p>" + escapeHtml(t(p)) + "</p>";
    }).join("");
    var facts = (EVENT.facts || []).map(function (f) {
      return '<div class="fact" data-item>' +
        '<div class="fact__label"><span class="material-symbols-rounded" aria-hidden="true">' +
          escapeHtml(f.icon || "info") + "</span><span>" + escapeHtml(t(f.label)) + "</span></div>" +
        '<div><div class="fact__value">' + escapeHtml(t(f.value)) + "</div>" +
          (f.note ? '<div class="fact__note">' + escapeHtml(t(f.note)) + "</div>" : "") + "</div>" +
        '<div class="fact__badge">' + badge(f.status) + "</div>" +
      "</div>";
    }).join("");
    return sectionHead("01 · " + ui("navEvent"), ui("secEvent"), ui("secEventSub")) +
      '<div class="prose">' + intro + "</div>" +
      '<div class="factlist">' + facts + "</div>" +
      linkRow(EVENT.links);
  }

  function speakerRow(sp, num) {
    var badges = sp.facts.map(function (f) { return f.status; });
    var counts = { verified: 0, partial: 0, claimed: 0 };
    badges.forEach(function (s) { if (counts[s] != null) counts[s]++; });
    var badgeHtml = Object.keys(counts).filter(function (k) { return counts[k] > 0; })
      .map(function (k) {
        var label = (ui("statusLabels") || {})[k];
        return '<span class="badge badge--' + k + '">' +
          '<span class="material-symbols-rounded" aria-hidden="true">' + STATUS_ICONS[k] + "</span>" +
          counts[k] + " " + escapeHtml(label) + "</span>";
      }).join("");
    return '<button class="speaker" type="button" data-item data-slug="' + escapeHtml(sp.slug) + '" ' +
      'aria-haspopup="dialog" aria-label="' + escapeHtml(t(sp.name)) + '">' +
      '<span class="speaker__num" aria-hidden="true">' + (num < 10 ? "0" + num : num) + "</span>" +
      "<span>" +
        '<span class="speaker__name serif">' + escapeHtml(t(sp.name)) + "</span>" +
        '<p class="speaker__role">' + escapeHtml(t(sp.role)) + "</p>" +
        '<span class="speaker__badges">' + badgeHtml + "</span>" +
      "</span>" +
      '<span class="speaker__cta">' + escapeHtml(ui("viewCheck")) +
        '<span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span></span>' +
    "</button>";
  }

  function renderSpeakers() {
    var attended = SPEAKERS.filter(function (s) { return s.attended; });
    var absent = SPEAKERS.filter(function (s) { return !s.attended; });
    var html = sectionHead("02 · " + ui("navSpeakers"), ui("secSpeakers"), ui("secSpeakersSub"));
    html += '<p class="speaker-group-label">' + escapeHtml(ui("groupDay")) + " · " + attended.length + "</p>";
    html += '<div class="speakers">' + attended.map(function (s, i) { return speakerRow(s, i + 1); }).join("") + "</div>";
    if (absent.length) {
      html += '<p class="speaker-group-label">' + escapeHtml(ui("groupAbsent")) + " · " + absent.length + "</p>";
      html += '<div class="speakers">' + absent.map(function (s, i) { return speakerRow(s, attended.length + i + 1); }).join("") + "</div>";
    }
    return html;
  }

  function renderNotes() {
    var cards = NOTES.map(function (n) {
      var sp = SPEAKERS.filter(function (s) { return s.slug === n.speaker; })[0];
      if (!sp) return "";
      var body;
      if (n.content == null) {
        body = '<p class="note__placeholder">' +
          '<span class="material-symbols-rounded" aria-hidden="true">edit_note</span>' +
          escapeHtml(ui("notePlaceholder")) + "</p>";
      } else {
        var val = n.content[state.lang] || n.content.en || n.content.zh || n.content;
        var paras = Array.isArray(val) ? val : [val];
        body = '<div class="note__body">' + paras.map(function (p) {
          return "<p>" + escapeHtml(p) + "</p>";
        }).join("") + "</div>";
      }
      return '<article class="note" data-item>' +
        '<div class="note__head">' +
          '<h3 class="note__title">' + escapeHtml(t(sp.name)) + "</h3>" +
          '<span class="note__speaker-role">' + escapeHtml(t(sp.role)) + "</span>" +
        "</div>" + body +
      "</article>";
    }).join("");
    return sectionHead("03 · " + ui("navNotes"), ui("secNotes"), ui("secNotesSub")) +
      '<div class="notes">' + cards + "</div>";
  }

  function renderLetter() {
    var points = (LETTER.points || []).map(function (p) {
      return "<li>" + escapeHtml(t(p)) + "</li>";
    }).join("");
    return sectionHead("04 · " + ui("navContext"), t(LETTER.title)) +
      '<div class="letter" data-item>' +
        '<p class="letter__intro">' + escapeHtml(t(LETTER.intro)) + "</p>" +
        "<ul>" + points + "</ul>" +
      "</div>" + linkRow(LETTER.links);
  }

  function renderFactcheck() {
    var legend = (FACTCHECK.legend || []).map(function (l) {
      return '<div class="legend__item" data-item>' + badge(l.status) +
        "<p>" + escapeHtml(t(l.desc)) + "</p></div>";
    }).join("");
    var items = ((FACTCHECK.highlights || {}).items || []).map(function (it) {
      return "<li>" + escapeHtml(t(it)) + "</li>";
    }).join("");
    var researchUrl = "https://github.com/" + (META.repo || "") + "/tree/main/research";
    return sectionHead("05 · " + ui("navFactcheck"), ui("secFactcheck"), ui("secFactcheckSub")) +
      '<div class="prose"><p>' + escapeHtml(t(FACTCHECK.method)) + "</p></div>" +
      '<div class="legend">' + legend + "</div>" +
      '<div class="highlights"><h3 class="serif">' + escapeHtml(t((FACTCHECK.highlights || {}).title)) + "</h3>" +
        "<ol>" + items + "</ol></div>" +
      linkRow([{ label: { en: ui("researchLink"), zh: ui("researchLink") }, url: researchUrl }]);
  }

  /* ---------- nav ---------- */
  var NAV = [
    { id: "overview", key: "navOverview", icon: "auto_awesome" },
    { id: "event", key: "navEvent", icon: "event" },
    { id: "speakers", key: "navSpeakers", icon: "groups" },
    { id: "notes", key: "navNotes", icon: "edit_note" },
    { id: "context", key: "navContext", icon: "history_edu" },
    { id: "factcheck", key: "navFactcheck", icon: "fact_check" }
  ];

  function paintNav() {
    navInner.innerHTML = "";
    NAV.forEach(function (n) {
      var a = document.createElement("a");
      a.className = "navpill";
      a.href = "#" + n.id;
      a.dataset.target = n.id;
      a.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">' + n.icon + "</span>" +
        "<span>" + escapeHtml(ui(n.key)) + "</span>";
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var el = document.getElementById(n.id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", "#" + n.id);
      });
      navInner.appendChild(a);
    });
  }

  function paintSections() {
    var defs = [
      { id: "overview", html: renderHero, bare: true },
      { id: "event", html: renderEvent },
      { id: "speakers", html: renderSpeakers },
      { id: "notes", html: renderNotes },
      { id: "context", html: renderLetter },
      { id: "factcheck", html: renderFactcheck }
    ];
    sectionsEl.innerHTML = "";
    defs.forEach(function (d) {
      if (d.bare) {
        var wrap = document.createElement("div");
        wrap.innerHTML = d.html();
        sectionsEl.appendChild(wrap.firstChild);
        return;
      }
      var el = document.createElement("section");
      el.className = "section";
      el.id = d.id;
      el.innerHTML = d.html();
      sectionsEl.appendChild(el);
    });
    wireSpeakers();
  }

  function paintChrome() {
    document.documentElement.setAttribute("lang", state.lang);
    document.title = t(META.title) + " · " + t(META.subtitle);
    var brand = $("brandName");
    if (brand) brand.textContent = t(META.title);
    var foot = $("footerText");
    if (foot) foot.textContent = "© " + new Date().getFullYear() + " " + t(META.title);
    var dc = $("dialogClose");
    if (dc) dc.setAttribute("aria-label", ui("close"));
  }

  function render() {
    paintChrome();
    paintNav();
    paintSections();
    setupScrollSpy();
  }

  /* ---------- scrollspy ---------- */
  var spy = null;
  function setupScrollSpy() {
    if (spy) { spy.disconnect(); spy = null; }
    if (!("IntersectionObserver" in window)) return;
    var pills = {};
    [].forEach.call(navInner.children, function (a) { pills[a.dataset.target] = a; });
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var pill = pills[en.target.id];
        if (!pill || !en.isIntersecting) return;
        [].forEach.call(navInner.children, function (p) {
          p.classList.remove("navpill--active");
          p.removeAttribute("aria-current");
        });
        pill.classList.add("navpill--active");
        pill.setAttribute("aria-current", "true");
        if (pill.scrollIntoView) pill.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
    NAV.forEach(function (n) {
      var el = document.getElementById(n.id);
      if (el) spy.observe(el);
    });
  }

  /* ---------- speaker dialog + deep links ---------- */
  function findSpeaker(slug) {
    return SPEAKERS.filter(function (s) { return s.slug === slug; })[0] || null;
  }

  function openDialog(slug) {
    var sp = findSpeaker(slug);
    if (!sp) return;
    var facts = (sp.facts || []).map(function (f) {
      return '<div class="factcheck-row">' + badge(f.status) +
        "<div><b>" + escapeHtml(t(f.claim)) + "</b>" +
        (f.note ? "<p>" + escapeHtml(t(f.note)) + "</p>" : "") + "</div></div>";
    }).join("");
    var refs = (sp.refs || []).map(function (r) {
      return '<li><a href="' + escapeHtml(r.url) + '" target="_blank" rel="noopener">' +
        '<span class="material-symbols-rounded" aria-hidden="true">link</span>' +
        escapeHtml(typeof r.label === "string" ? r.label : t(r.label)) + "</a></li>";
    }).join("");
    dialogBody.innerHTML =
      '<h2 id="dialogTitle" class="serif">' + escapeHtml(t(sp.name)) + "</h2>" +
      '<p class="dialog__role">' + escapeHtml(t(sp.role)) + "</p>" +
      '<div class="dialog__attend">' +
        '<span class="badge ' + (sp.attended ? "badge--verified" : "badge--partial") + '">' +
        '<span class="material-symbols-rounded" aria-hidden="true">' + (sp.attended ? "co_present" : "videocam") + "</span>" +
        escapeHtml(sp.attended ? ui("attendYes") : ui("attendNo")) + "</span></div>" +
      "<h3>" + escapeHtml(ui("dlgBio")) + "</h3>" +
      '<p class="dialog__bio">' + escapeHtml(t(sp.bio)) + "</p>" +
      "<h3>" + escapeHtml(ui("dlgFacts")) + "</h3>" +
      "<div>" + facts + "</div>" +
      "<h3>" + escapeHtml(ui("dlgRefs")) + "</h3>" +
      '<ul class="reflist">' + refs + "</ul>";
    if (!dialog.open) dialog.showModal();
    if (location.hash.slice(1) !== slug) history.replaceState(null, "", "#" + slug);
  }

  function closeDialog() {
    if (dialog.open) dialog.close();
    if (isSlugHash()) history.replaceState(null, "", location.pathname + location.search);
  }
  function isSlugHash() {
    var h = location.hash.slice(1);
    return !!h && !!findSpeaker(h);
  }

  function wireSpeakers() {
    [].forEach.call(document.querySelectorAll(".speaker[data-slug]"), function (btn) {
      btn.addEventListener("click", function () { openDialog(btn.dataset.slug); });
    });
  }

  function syncFromHash() {
    var slug = location.hash.slice(1);
    if (slug && findSpeaker(slug)) openDialog(slug);
    else if (dialog.open && !findSpeaker(slug)) dialog.close();
  }

  /* ---------- theme + lang ---------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    var icon = $("themeIcon");
    if (icon) icon.textContent = state.theme === "dark" ? "light_mode" : "dark_mode";
    lsSet("theme", state.theme);
  }
  function applyLangChrome() {
    var label = $("langLabel");
    if (label) label.textContent = state.lang === "en" ? "EN" : "中";
    lsSet("lang", state.lang);
  }

  /* ---------- wiring ---------- */
  function wire() {
    $("themeToggle").addEventListener("click", function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
    });
    $("langToggle").addEventListener("click", function () {
      state.lang = state.lang === "en" ? "zh" : "en";
      applyLangChrome();
      var openSlug = isSlugHash() ? location.hash.slice(1) : null;
      render();
      if (dialog.open && openSlug) openDialog(openSlug);
    });
    $("dialogClose").addEventListener("click", closeDialog);
    dialog.addEventListener("click", function (e) { if (e.target === dialog) closeDialog(); });
    dialog.addEventListener("close", function () {
      if (isSlugHash()) history.replaceState(null, "", location.pathname + location.search);
    });
    window.addEventListener("hashchange", syncFromHash);
  }

  function init() {
    applyTheme();
    applyLangChrome();
    render();
    wire();
    syncFromHash();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* ---------- GitHub star count (public API, no auth) ---------- */
(function () {
  var el = document.getElementById("ghStar");
  if (!el) return;
  var repo = el.dataset.repo;
  if (!repo || repo.indexOf("{{") === 0) { el.style.display = "none"; return; }
  fetch("https://api.github.com/repos/" + repo)
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (j) {
      var c = document.getElementById("ghStarCount");
      if (c && j && typeof j.stargazers_count === "number") {
        c.textContent = j.stargazers_count >= 1000
          ? (j.stargazers_count / 1000).toFixed(1).replace(/\.0$/, "") + "k"
          : String(j.stargazers_count);
      }
    })
    .catch(function () { /* offline / rate-limited: leave placeholder */ });
})();
