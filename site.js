/* Shared behavior: menu, year, form, home featured cards, portfolio gallery + lightbox */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const P = window.PORTFOLIO || { categories: [], featured: [] };
  const IMG = 'images/';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // mobile menu
  const menu = $('#menu'), nav = $('#navlinks');
  if (menu && nav) {
    menu.addEventListener('click', () => { const o = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(o)); });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
  }
  const yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();

  // home: featured cards
  const feat = $('#featured');
  if (feat) {
    feat.innerHTML = P.featured.map(f => {
      const cat = P.categories.find(c => c.id === f.category) || {};
      return `<a class="photo" href="portfolio.html#${esc(f.category)}" aria-label="${esc(f.title)} — view the full gallery">
        <img src="${IMG}${esc(f.photo)}" alt="${esc(cat.alt || f.title)}" loading="lazy">
        <div class="photo-label"><strong>${esc(f.title)}</strong><span>${esc(f.tag || '')}</span></div></a>`;
    }).join('');
  }

  // portfolio: galleries
  const root = $('#galleries');
  if (root) {
    const all = [];
    root.innerHTML = P.categories.map(c => {
      const figs = c.photos.map(p => {
        const src = typeof p === 'string' ? p : p.src;
        const alt = (typeof p === 'object' && p.alt) || c.alt || c.title;
        const i = all.push({ src: IMG + src, alt }) - 1;
        return `<figure><button type="button" data-i="${i}" aria-label="Enlarge photo: ${esc(alt)}"><img src="${IMG}${esc(src)}" alt="${esc(alt)}" loading="lazy"></button></figure>`;
      }).join('');
      return `<section class="gallery-section" id="${esc(c.id)}"><h2>${esc(c.title)}</h2><div class="gal"><div class="grid">${figs}</div></div></section>`;
    }).join('');
    root.querySelectorAll('figure img').forEach(img => {
      const tag = () => { if (img.naturalHeight > img.naturalWidth * 1.1) img.closest('figure').classList.add('tall'); };
      img.complete && img.naturalWidth ? tag() : img.addEventListener('load', tag);
    });
    const bar = $('#cats');
    if (bar) bar.innerHTML = P.categories.map(c => `<a href="#${esc(c.id)}">${esc(c.title)}</a>`).join('');

    // lightbox
    const lb = document.createElement('div');
    lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Photo viewer');
    lb.innerHTML = '<button class="x" aria-label="Close">×</button><button class="prev" aria-label="Previous photo">‹</button><img alt=""><button class="next" aria-label="Next photo">›</button>';
    document.body.appendChild(lb);
    const big = $('img', lb); let cur = 0, opener = null;
    const show = i => { cur = (i + all.length) % all.length; big.src = all[cur].src; big.alt = all[cur].alt; };
    const open = (i, el) => { opener = el; show(i); lb.classList.add('open'); document.body.classList.add('lb-open'); $('.x', lb).focus(); };
    const close = () => { lb.classList.remove('open'); document.body.classList.remove('lb-open'); if (opener) opener.focus(); };
    root.addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if (b) open(+b.dataset.i, b); });
    $('.x', lb).onclick = close;
    $('.prev', lb).onclick = () => show(cur - 1);
    $('.next', lb).onclick = () => show(cur + 1);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(cur - 1);
      if (e.key === 'ArrowRight') show(cur + 1);
    });
  }

  // inquiry form
  const form = $('#inquiry-form');
  if (form) form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = $('button[type="submit"]', form), status = $('#form-status');
    btn.disabled = true; btn.textContent = 'Sending…'; status.textContent = 'Sending your inquiry…';
    try {
      const r = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (r.ok) { status.textContent = 'Thank you! Your inquiry has been sent. Maddy will be in touch soon.'; form.reset(); }
      else status.textContent = 'Sorry, your inquiry could not be sent. Please email milestoneswithmaddy@gmail.com directly.';
    } catch (err) {
      status.textContent = 'A connection issue prevented your inquiry from sending. Please email milestoneswithmaddy@gmail.com directly.';
    } finally { btn.disabled = false; btn.textContent = 'Send inquiry'; }
  });
})();
