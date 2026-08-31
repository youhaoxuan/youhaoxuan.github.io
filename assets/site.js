/* TRAVELER — interaction layer. No dependencies, no build step. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Reveal, stamp-landing, counters, chart draw ---------- */
  function activate(el) {
    if (el.classList.contains('reveal')) el.classList.add('is-in');
    if (el.hasAttribute('data-land')) {
      var delay = parseInt(el.getAttribute('data-land'), 10) || 0;
      setTimeout(function () { el.classList.add('is-landed'); }, reduced ? 0 : delay);
    }
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

  var watched = document.querySelectorAll('.reveal, [data-land], [data-count], [data-draw]');
  Array.prototype.forEach.call(watched, function (el) {
    if (io) io.observe(el); else activate(el);
  });

  /* ---------- 2. Counting readouts ---------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    if (reduced || isNaN(target)) { el.textContent = target.toFixed(decimals); return; }
    var dur = 1100;
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- 3. Ramp chart: the line draws itself ---------- */
  function drawPath(el) {
    var paths = el.querySelectorAll('[data-line]');
    Array.prototype.forEach.call(paths, function (p, i) {
      var len = p.getTotalLength();
      p.style.strokeDasharray = len;
      if (reduced) { p.style.strokeDashoffset = 0; return; }
      p.style.strokeDashoffset = len;
      p.getBoundingClientRect();
      p.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(.16,1,.3,1) ' + (i * 0.18) + 's';
      p.style.strokeDashoffset = 0;
    });
    var dots = el.querySelectorAll('[data-dot]');
    Array.prototype.forEach.call(dots, function (d, i) {
      if (reduced) { d.style.opacity = 1; return; }
      d.style.opacity = 0;
      setTimeout(function () {
        d.style.transition = 'opacity .3s ease-out';
        d.style.opacity = 1;
      }, 500 + i * 190);
    });
  }

  /* ---------- 4. Operation detail toggles ---------- */
  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.op-more');
    if (!btn) return;
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    var open = panel.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open
      ? btn.getAttribute('data-less') || 'Collapse detail'
      : btn.getAttribute('data-more') || 'Full operation detail';
  });

  /* ---------- 5. Project filter (deep-linkable) ---------- */
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
        w.classList.toggle('is-hidden', !ok);
        if (ok) shown++;
      });
      if (countEl) {
        countEl.textContent = shown === works.length
          ? 'ALL ' + works.length + ' OPERATIONS'
          : shown + ' OF ' + works.length + ' OPERATIONS';
      }
      if (push && history.replaceState) {
        history.replaceState(null, '', want === 'all' ? location.pathname : location.pathname + '#phase=' + want);
      }
    }

    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener('click', function () {
        applyFilter(chip.getAttribute('data-filter'), true);
      });
    });

    var m = /#phase=([a-z]+)/.exec(location.hash);
    if (m) applyFilter(m[1], false);
  }

  /* ---------- 5b. Expand or collapse every operation at once ---------- */
  var allBtn = document.querySelector('[data-expand-all]');
  if (allBtn) {
    allBtn.addEventListener('click', function () {
      var panels = document.querySelectorAll('.op-detail');
      var opening = allBtn.getAttribute('aria-expanded') !== 'true';
      Array.prototype.forEach.call(panels, function (p) {
        p.classList.toggle('is-open', opening);
        var b = document.querySelector('[aria-controls="' + p.id + '"]');
        if (b) {
          b.setAttribute('aria-expanded', opening ? 'true' : 'false');
          b.textContent = opening ? b.getAttribute('data-less') : b.getAttribute('data-more');
        }
      });
      allBtn.setAttribute('aria-expanded', opening ? 'true' : 'false');
      allBtn.textContent = opening ? 'Collapse all operations' : 'Expand all operations';
    });
  }

  /* ---------- 6. Copy address, stamped ---------- */
  var copyBtns = document.querySelectorAll('[data-copy]');
  Array.prototype.forEach.call(copyBtns, function (btn) {
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      var value = btn.getAttribute('data-copy');
      var label = btn.querySelector('[data-copy-label]') || btn;
      var original = label.textContent;
      function done(ok) {
        label.textContent = ok ? 'Copied to clipboard' : value;
        setTimeout(function () { label.textContent = original; }, 2200);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
  });

  /* ---------- 7. Revision date ---------- */
  var y = document.querySelectorAll('[data-year]');
  Array.prototype.forEach.call(y, function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
