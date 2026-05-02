/* ═══════════════════════════════════════════
   app.js — Portfolio scripts
═══════════════════════════════════════════ */

/* ── Scroll-to-top visibility ── */
const scrollTopBtn = document.querySelector('.scroll-top');

function toggleScrollTop() {
  const scrolled = document.documentElement.scrollTop > 400;
  scrollTopBtn.classList.toggle('visible', scrolled);
}

document.addEventListener('scroll', toggleScrollTop, { passive: true });


/* ── Typewriter effect on hero name ── */
const nameEl      = document.getElementById('typed-name');
const fullName    = 'John Charles Otienoh';
const typingSpeed = 65; // ms per character

function typeWriter(text, el, speed) {
  // Add blinking cursor element
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  cursor.setAttribute('aria-hidden', 'true');
  el.appendChild(cursor);

  let i = 0;
  const interval = setInterval(() => {
    el.insertBefore(document.createTextNode(text[i]), cursor);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      // Remove cursor after a short pause so screen readers get the full name
      setTimeout(() => cursor.remove(), 2000);
    }
  }, speed);

  // Provide accessible text immediately (hidden from view, available to SR)
  el.setAttribute('aria-label', text);
}

if (nameEl) {
  typeWriter(fullName, nameEl, typingSpeed);
}
