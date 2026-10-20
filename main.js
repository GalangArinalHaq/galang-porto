/**
 * =============================================================================
 * MAIN.JS - CINEMATIC ENGINE & UI CONTROLLER
 * =============================================================================
 * Berkas JavaScript utama yang mengatur rendering dinamis, navigasi,
 * timecode HUD, modal case study, dan interaksi formulir.
 * 
 * Data diambil langsung dari window.PORTFOLIO_DATA di content.js.
 * =============================================================================
 */

(function () {
  'use strict';

  // 1. DATA ACCESS & FALLBACK
  const data = window.PORTFOLIO_DATA || {};
  const profile = data.profile || {};
  const clapperboard = data.clapperboard || {};

  // HELPER: Path Resolver untuk Gambar
  // Mendukung direct file://, subfolder, atau server hosting
  function getImagePath(fileName) {
    if (!fileName) return '';
    if (fileName.startsWith('http://') || fileName.startsWith('https://')) return fileName;
    // Cek apakah di folder assets/images/
    return `./assets/images/${fileName}`;
  }

  // 2. LIVE SMPTE TIMECODE COUNTER
  let frameCounter = 0;
  function startLiveTimecode() {
    const timecodeEls = document.querySelectorAll('.live-timecode');
    if (!timecodeEls.length) return;

    setInterval(() => {
      frameCounter = (frameCounter + 1) % 24;
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      const ff = String(frameCounter).padStart(2, '0');
      const tcString = `${hh}:${mm}:${ss}:${ff}`;

      timecodeEls.forEach(el => {
        el.textContent = tcString;
      });
    }, 1000 / 24); // 24 FPS
  }

  // 3. INJEKSI HEADER (TOP BAR CONTRACT 3 ZONES)
  function renderHeader(activePage = 'home') {
    const headerContainer = document.getElementById('site-header-container');
    if (!headerContainer) return;

    const navLinks = [
      { id: 'home', label: '01. Home', url: 'index.html' },
      { id: 'work', label: '02. Work', url: 'work.html' },
      { id: 'about', label: '03. Story', url: 'about.html' },
      { id: 'services', label: '04. Services', url: 'services.html' },
      { id: 'journal', label: '05. Journal', url: 'journal.html' },
      { id: 'contact', label: '06. Contact', url: 'contact.html' }
    ];

    const navHtml = navLinks
      .map(item => `<a href="${item.url}" class="nav-link ${activePage === item.id ? 'active' : ''}">${item.label}</a>`)
      .join('');

    const mobileNavHtml = navLinks
      .map(item => `<a href="${item.url}" class="${activePage === item.id ? 'active' : ''}">${item.label}</a>`)
      .join('');

    headerContainer.innerHTML = `
      <header class="site-header">
        <div class="container site-header-inner">
          <!-- Zona 1: Brand Wordmark -->
          <a href="index.html" class="brand-wordmark" title="Kembali ke beranda">
            <span class="brand-dot"></span>
            <span>${profile.shortName || 'GALANG'} <span style="font-weight:400; opacity:0.6;">// REEL</span></span>
          </a>

          <!-- Zona 2: Navigasi Desktop 4-5 Link Single-Line -->
          <nav class="desktop-nav" aria-label="Navigasi Utama">
            ${navHtml}
          </nav>

          <!-- Zona 3: 1 Primary Action + Mobile Hamburger -->
          <div class="header-actions">
            <a href="contact.html" class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.75rem;">
              <span>Let's Shoot</span>
              <span aria-hidden="true">→</span>
            </a>
            <button class="mobile-menu-btn" id="mobile-toggle" aria-label="Buka navigasi mobile">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer -->
        <div class="mobile-menu-drawer" id="mobile-drawer">
          <div class="mobile-nav-links">
            ${mobileNavHtml}
          </div>
          <div style="border-top: 1px solid var(--border-dark); padding-top: 1.5rem;">
            <div class="mono-label" style="color: var(--text-muted-dark); margin-bottom: 0.5rem;">DIRECTOR CONTACT</div>
            <p style="font-size: 0.9375rem; margin-bottom: 1rem;">${profile.email || 'galangarinalhaq23@gmail.com'}</p>
            <div class="on-air-badge">
              <span class="on-air-dot"></span>
              <span>${profile.statusBadge || 'AVAILABLE FOR WORK'}</span>
            </div>
          </div>
        </div>
      </header>
    `;

    // Pasang event handler mobile toggle
    const toggleBtn = document.getElementById('mobile-toggle');
    const drawer = document.getElementById('mobile-drawer');
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => {
        drawer.classList.toggle('open');
      });
    }
  }

  // 4. INJEKSI FOOTER CLAPPERBOARD
  function renderFooter() {
    const footerContainer = document.getElementById('site-footer-container');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
      <footer class="clapperboard-footer" aria-label="Footer Portofolio">
        <!-- Angled Clapperboard Stripes -->
        <div class="clapperboard-stripes"></div>

        <div class="container">
          <!-- Clapperboard Production Grid -->
          <div class="clapperboard-grid">
            <div class="clapperboard-cell">
              <div class="clapperboard-label">PRODUCTION</div>
              <div class="clapperboard-value">${clapperboard.production || 'PORTFOLIO 2026'}</div>
            </div>
            <div class="clapperboard-cell">
              <div class="clapperboard-label">SCENE / TAKE</div>
              <div class="clapperboard-value">${clapperboard.scene || 'SCENE: 04'} · ${clapperboard.take || 'TAKE: 02'}</div>
            </div>
            <div class="clapperboard-cell">
              <div class="clapperboard-label">ROLL / SOUND</div>
              <div class="clapperboard-value">${clapperboard.roll || 'ROLL: A1'} · ${clapperboard.sound || 'SYNC'}</div>
            </div>
            <div class="clapperboard-cell">
              <div class="clapperboard-label">LIVE TIMECODE</div>
              <div class="clapperboard-value live-timecode" style="color: var(--accent);">00:09:25:14</div>
            </div>
          </div>

          <!-- Bottom Credits Row -->
          <div style="display: flex; flex-direction: column; gap: 1.5rem; justify-content: space-between; align-items: flex-start; padding-top: 1.5rem; border-top: 1px solid var(--border-dark);">
            <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; align-items: center; justify-content: space-between; width: 100%;">
              <div>
                <p class="mono-label" style="color: var(--text-muted-dark); margin-bottom: 0.25rem;">DIRECTOR & LEAD DESIGNER</p>
                <p style="font-size: 1.125rem; font-weight: 700; color: var(--text-light);">${profile.name} — ${profile.role}</p>
              </div>

              <!-- Social Reel Links -->
              <div style="display: flex; flex-wrap: wrap; gap: 1.25rem;">
                ${(profile.socials || []).map(s => `
                  <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="nav-link" style="font-size: 0.75rem;">
                    ${s.name} ↗
                  </a>
                `).join('')}
              </div>
            </div>

            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; font-size: 0.8125rem; color: var(--text-muted-dark); padding-top: 1rem;">
              <span>${clapperboard.copyright || '© 2026 All rights reserved.'}</span>
              <span class="mono-label" style="color: var(--accent);">24.000 FPS · ANALOG DISCIPLINE</span>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // 5. MODAL CASE STUDY
  window.openProjectModal = function (projectId) {
    const project = (data.projects || []).find(p => p.id === projectId);
    if (!project) return;

    let modal = document.getElementById('project-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'project-modal';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="cinema-modal-backdrop" id="modal-backdrop">
        <div class="cinema-modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button class="modal-close-btn" onclick="window.closeProjectModal()" aria-label="Tutup modal">✕</button>
          
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
            <span class="on-air-badge">${project.number}</span>
            <span class="mono-label" style="color: var(--text-muted-dark);">${project.category} · ${project.year}</span>
          </div>

          <h2 id="modal-title" style="font-size: clamp(1.75rem, 4vw, 2.5rem); margin-bottom: 1rem;">${project.title}</h2>
          <p style="font-size: 1.125rem; color: var(--accent); margin-bottom: 2rem; font-family: var(--font-mono);">${project.client}</p>

          <!-- Frame Preview -->
          <div style="margin-bottom: 2rem; border-radius: 4px; overflow: hidden; border: 1px solid var(--border-dark);">
            <img src="${getImagePath(project.image)}" alt="${project.title}" style="width: 100%; max-height: 400px; object-fit: cover;" onerror="this.onerror=null; this.style.display='none';">
          </div>

          <!-- Deep-dive Case Study Flow -->
          <div style="display: flex; flex-direction: column; gap: 2rem; border-top: 1px solid var(--border-dark); padding-top: 2rem;">
            <!-- 1. The Brief -->
            <div>
              <div class="mono-label" style="color: var(--accent); margin-bottom: 0.5rem;">01 / THE BRIEF</div>
              <p style="color: var(--text-light); font-size: 1rem; line-height: 1.7;">${project.brief}</p>
            </div>

            <!-- 2. What I Did -->
            <div>
              <div class="mono-label" style="color: var(--accent); margin-bottom: 0.5rem;">02 / WHAT I DID</div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
                ${(project.whatIDid || []).map(item => `
                  <li style="display: flex; gap: 0.75rem; color: var(--text-light); font-size: 0.9375rem;">
                    <span style="color: var(--accent); font-weight: bold;">—</span>
                    <span>${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- 3. Tech Stack -->
            <div>
              <div class="mono-label" style="color: var(--text-muted-dark); margin-bottom: 0.5rem;">03 / DESIGN & CODE STACK</div>
              <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; color: var(--text-muted-dark); font-size: 0.875rem;">
                ${(project.techStack || []).join(' · ')}
              </div>
            </div>

            <!-- 4. The Result (Metrics) -->
            <div>
              <div class="mono-label" style="color: var(--accent); margin-bottom: 0.75rem;">04 / THE RESULT</div>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
                ${(project.results || []).map(r => `
                  <div style="background-color: #1a1918; padding: 1.25rem; border: 1px solid var(--border-dark); border-radius: 4px;">
                    <div style="font-size: 1.75rem; font-weight: 800; color: var(--accent); font-family: var(--font-display);">${r.metric}</div>
                    <div class="mono-label" style="color: var(--text-muted-dark); font-size: 0.6875rem; margin-top: 0.25rem;">${r.label}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- More Frames / Action Buttons -->
            <div style="display: flex; flex-wrap: wrap; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--border-dark);">
              ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">Visit Live Reel ↗</a>` : ''}
              ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline">View Repository</a>` : ''}
              <button onclick="window.closeProjectModal()" class="btn-outline">Close Frame</button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.style.overflow = 'hidden';

    // Click outside to close
    document.getElementById('modal-backdrop').addEventListener('click', (e) => {
      if (e.target.id === 'modal-backdrop') {
        window.closeProjectModal();
      }
    });

    // ESC key listener
    window.addEventListener('keydown', handleEscKey);
  };

  function handleEscKey(e) {
    if (e.key === 'Escape') {
      window.closeProjectModal();
    }
  }

  window.closeProjectModal = function () {
    const modal = document.getElementById('project-modal');
    if (modal) modal.innerHTML = '';
    document.body.style.overflow = '';
    window.removeEventListener('keydown', handleEscKey);
  };

  // 6. HELPER SPROCKET HOLES HTML GENERATOR
  function generateSprocketHolesHtml(count = 8) {
    let holes = '';
    for (let i = 0; i < count; i++) {
      holes += '<span class="sprocket-hole"></span>';
    }
    return holes;
  }

  function generateVerticalSprocketsHtml(count = 6) {
    let holes = '';
    for (let i = 0; i < count; i++) {
      holes += '<span class="sprocket-hole-v"></span>';
    }
    return holes;
  }

  // EXPORT KE WINDOW
  window.CinematicApp = {
    data,
    profile,
    getImagePath,
    startLiveTimecode,
    renderHeader,
    renderFooter,
    generateSprocketHolesHtml,
    generateVerticalSprocketsHtml
  };
})();
