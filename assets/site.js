/* INSTRUMENT — interaction layer. No dependencies, no build step. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Reveal on first sight ---------- */
  function activate(el) {
    if (el.classList.contains('reveal') || el.classList.contains('bar') || el.classList.contains('rail')) el.classList.add('is-in');
    if (el.hasAttribute('data-count')) countUp(el);
    if (el.hasAttribute('data-draw')) drawPath(el);
  }

  var io = 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          activate(e.target);
          io.unobserve(e.target);
        });
      }, { threshold: 0, rootMargin: '0px 0px -12% 0px' })
    : null;

  var watched = document.querySelectorAll('.reveal, .bar, [data-count], [data-draw]');
  Array.prototype.forEach.call(watched, function (el) {
    if (io) io.observe(el); else activate(el);
  });

  /* ---------- 2. Counting values ---------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    if (reduced || isNaN(target)) { if (!isNaN(target)) el.textContent = target.toFixed(decimals); return; }
    var dur = 1000, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      el.textContent = (target * (1 - Math.pow(1 - p, 4))).toFixed(decimals);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- 3. Ramp chart draws itself ---------- */
  function drawPath(el) {
    Array.prototype.forEach.call(el.querySelectorAll('[data-line]'), function (p, i) {
      var len = p.getTotalLength();
      p.style.strokeDasharray = len;
      if (reduced) { p.style.strokeDashoffset = 0; return; }
      p.style.strokeDashoffset = len;
      p.getBoundingClientRect();
      p.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(.22,.61,.36,1) ' + (i * .15) + 's';
      p.style.strokeDashoffset = 0;
    });
    Array.prototype.forEach.call(el.querySelectorAll('[data-dot]'), function (d, i) {
      if (reduced) { d.style.opacity = 1; return; }
      d.style.opacity = 0;
      setTimeout(function () {
        d.style.transition = 'opacity .3s ease-out';
        d.style.opacity = 1;
      }, 460 + i * 180);
    });
  }

  /* ---------- 4. Nav gains a hairline once it leaves the hero ---------- */
  var nav = document.querySelector('.nav');
  if (nav) {
    function onScroll() { nav.classList.toggle('is-stuck', window.scrollY > 24); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 5. Role detail toggles ---------- */
  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.more');
    if (!btn) return;
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    var open = panel.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open
      ? btn.getAttribute('data-less') || 'Show less'
      : btn.getAttribute('data-more') || 'Show more';
    syncExpandAll();
  });

  /* Keep the expand-all control truthful about the panels below it */
  function syncExpandAll() {
    var all = document.querySelector('[data-expand-all]');
    if (!all) return;
    var panels = document.querySelectorAll('.detail');
    if (!panels.length) return;
    var open = 0;
    Array.prototype.forEach.call(panels, function (p) { if (p.classList.contains('is-open')) open++; });
    var everyOpen = open === panels.length;
    all.setAttribute('aria-expanded', everyOpen ? 'true' : 'false');
    all.textContent = everyOpen ? 'Collapse all' : 'Expand all';
  }

  /* ---------- 6. Expand or collapse every role ---------- */
  var allBtn = document.querySelector('[data-expand-all]');
  if (allBtn) {
    allBtn.addEventListener('click', function () {
      var opening = allBtn.getAttribute('aria-expanded') !== 'true';
      Array.prototype.forEach.call(document.querySelectorAll('.detail'), function (p) {
        p.classList.toggle('is-open', opening);
        var b = document.querySelector('[aria-controls="' + p.id + '"]');
        if (b) {
          b.setAttribute('aria-expanded', opening ? 'true' : 'false');
          b.textContent = opening ? b.getAttribute('data-less') : b.getAttribute('data-more');
        }
      });
      allBtn.setAttribute('aria-expanded', opening ? 'true' : 'false');
      allBtn.textContent = opening ? 'Collapse all' : 'Expand all';
    });
  }

  /* ---------- 7. Deep-linkable project filter ---------- */
  var chips = document.querySelectorAll('[data-filter]');
  if (chips.length) {
    var works = document.querySelectorAll('[data-phase]');
    var countEl = document.getElementById('filter-count');
    if (countEl) countEl.setAttribute('aria-live', 'polite');

    function applyFilter(want, push) {
      var matched = false;
      Array.prototype.forEach.call(chips, function (c) {
        var isIt = c.getAttribute('data-filter') === want;
        if (isIt) matched = true;
        c.setAttribute('aria-pressed', isIt ? 'true' : 'false');
      });
      if (!matched) return applyFilter('all', false);
      var shown = 0;
      Array.prototype.forEach.call(works, function (w) {
        var ok = want === 'all' || w.getAttribute('data-phase') === want;
        var wasHidden = w.classList.contains('is-hidden');
        w.classList.toggle('is-hidden', !ok);
        if (!ok) return;
        shown++;
        if (wasHidden) {
          w.classList.remove('is-entering');
          void w.offsetWidth;
          w.classList.add('is-entering');
        }
      });
      if (countEl) {
        countEl.textContent = shown === works.length
          ? 'Showing all ' + works.length
          : 'Showing ' + shown + ' of ' + works.length;
      }
      if (push && history.replaceState) {
        history.replaceState(null, '', want === 'all' ? location.pathname : location.pathname + '#phase=' + want);
      }
    }

    Array.prototype.forEach.call(works, function (w) {
      w.addEventListener('animationend', function () { w.classList.remove('is-entering'); });
    });

    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener('click', function () { applyFilter(chip.getAttribute('data-filter'), true); });
    });

    var m = /#phase=([a-z]+)/.exec(location.hash);
    if (m) applyFilter(m[1], false);
  }

  /* ---------- 8. Copy address ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-copy]'), function (btn) {
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      var value = btn.getAttribute('data-copy');
      var label = btn.querySelector('[data-copy-label]') || btn;
      var original = label.textContent;
      function done(ok) {
        label.textContent = ok ? 'Copied' : value;
        setTimeout(function () { label.textContent = original; }, 2000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function () { done(true); }, function () { done(false); });
      } else { done(false); }
    });
  });


  /* ---------- 10. Figure viewer ---------- */
  var figButtons = document.querySelectorAll('button.work-fig');
  if (figButtons.length && typeof HTMLDialogElement !== 'undefined') {
    var dlg = document.createElement('dialog');
    dlg.className = 'viewer';
    dlg.setAttribute('aria-label', 'Figure viewer');
    dlg.innerHTML =
      '<button type="button" class="viewer-close">Close</button>' +
      '<div class="viewer-frame"><img class="viewer-img" alt=""></div>' +
      '<p class="viewer-cap"></p>';
    document.body.appendChild(dlg);
    var vImg = dlg.querySelector('.viewer-img');
    var vCap = dlg.querySelector('.viewer-cap');
    var opener = null;

    Array.prototype.forEach.call(figButtons, function (b) {
      b.addEventListener('click', function () {
        var img = b.querySelector('img');
        if (!img) return;
        opener = b;
        vImg.src = img.currentSrc || img.src;
        vImg.alt = img.alt || '';
        var art = b.closest('.work');
        var cite = art && art.querySelector('.work-cite');
        vCap.textContent = cite ? cite.textContent.trim().replace(/s+/g, ' ') : '';
        dlg.showModal();
      });
    });

    dlg.querySelector('.viewer-close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (ev) { if (ev.target === dlg) dlg.close(); });
    dlg.addEventListener('close', function () {
      vImg.removeAttribute('src');
      if (opener) { opener.focus(); opener = null; }
    });
  }

  /* ---------- 11. Reading progress ---------- */
  if (nav) {
    var bar = document.createElement('span');
    bar.className = 'progress';
    nav.appendChild(bar);
    var maxScroll = 0;
    function measure() {
      var m = document.documentElement.scrollHeight - window.innerHeight;
      if (m > 0) maxScroll = m;  // ignore transient zero during layout flush
    }
    function drawProgress() {
      var p = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      bar.style.transform = 'scaleX(' + p + ')';
    }
    function remeasure() { measure(); drawProgress(); }
    window.addEventListener('scroll', drawProgress, { passive: true });
    window.addEventListener('resize', remeasure, { passive: true });
    // Filtering and expanding change the page height, so track it
    if ('ResizeObserver' in window) new ResizeObserver(remeasure).observe(document.body);
    remeasure();
  }

  /* ---------- 9. Year ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
