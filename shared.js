/* ══════════════════════════════════════════════════════
   SIDHSHREE COMPUTRONICS — shared.js
   Formspree endpoint: https://formspree.io/f/mzdkwrlo
   Contact  → cspsupport@sidhshree.com
   Careers  → cspsupport@sidhshree.com
══════════════════════════════════════════════════════ */

/* ── NAV + FOOTER INJECTION ── */
(function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  function a(p) { return page === p ? ' class="active"' : ''; }

  var navHTML =
    '<div class="topbar"><div class="container">' +
    '<div class="topbar-left">' +
    '<span><i class="fas fa-map-marker-alt"></i>97B, 1st Floor, Amritpuri, East of Kailash, Delhi-110065</span>' +
    '<a href="mailto:cspsupport@sidhshree.com"><i class="fas fa-envelope"></i>cspsupport@sidhshree.com</a>' +
    '</div><div class="topbar-right">' +
    '<a href="tel:01146051122"><i class="fas fa-phone"></i>011-46051122</a>' +
    '<a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>' +
    '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
    '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
    '</div></div></div>' +
    '<nav role="navigation" aria-label="Main navigation"><div class="nav-inner">' +
    '<a href="index.html" class="logo" aria-label="Sidhshree Computronics Home">' +
    '<div class="logo-icon" aria-hidden="true">SC</div>' +
    '<div class="logo-text">Sidhshree Computronics<span>Pvt. Ltd.</span></div>' +
    '</a>' +
    '<ul class="nav-links" role="list">' +
    '<li><a href="index.html"' + a('index.html') + '>Home</a></li>' +
    '<li><a href="about.html"' + a('about.html') + '>About Us</a></li>' +
    '<li><a href="services.html"' + a('services.html') + '>Services</a></li>' +
    '<li><a href="partners.html"' + a('partners.html') + '>Partners</a></li>' +
    '<li><a href="products.html"' + a('products.html') + '>Products</a></li>' +
    '<li><a href="team.html"' + a('team.html') + '>Our Team</a></li>' +
    '<li><a href="contact.html"' + a('contact.html') + '>Contact</a></li>' +
    '</ul>' +
    '<a href="contact.html" class="nav-btn">Get a Quote</a>' +
    '<button class="hamburger" id="hamburgerBtn" onclick="toggleMenu()" aria-label="Toggle menu" aria-expanded="false">' +
    '<span></span><span></span><span></span></button>' +
    '</div>' +
    '<div class="mobile-menu" id="mobileMenu" role="menu">' +
    '<a href="index.html"' + a('index.html') + '>Home</a>' +
    '<a href="about.html"' + a('about.html') + '>About Us</a>' +
    '<a href="services.html"' + a('services.html') + '>Services</a>' +
    '<a href="partners.html"' + a('partners.html') + '>Partners</a>' +
    '<a href="products.html"' + a('products.html') + '>Products</a>' +
    '<a href="team.html"' + a('team.html') + '>Our Team</a>' +
    '<a href="contact.html"' + a('contact.html') + '>Contact</a>' +
    '</div></nav>';

  var brands = ['Dell','HP','Lenovo','Cisco','Sophos','D-Link','Fortinet','Acer','Logitech','Microsoft','Samsung','AWS','Seqrite'];
  var mq = brands.concat(brands).map(function (b) {
    return '<div class="m-logo"><div class="m-logo-inner">' + b + '</div></div>';
  }).join('');

  var footerHTML =
    '<div class="clients"><div class="container"><div class="clients-title">' +
    '<div class="section-tag">Our Brand Partners</div>' +
    '<h2>Authorised Dealer for <span>Leading Brands</span></h2>' +
    '</div></div><div class="marquee-wrap"><div class="marquee-track">' + mq + '</div></div></div>' +
    '<footer role="contentinfo"><div class="container"><div class="footer-grid">' +
    '<div class="footer-brand"><h3>Sidhshree <em>Computronics</em> Pvt. Ltd.</h3>' +
    '<p>A trusted IT solutions provider and authorised channel partner in New Delhi. Supplying genuine hardware, networking, security and software solutions to businesses across India since 2000.</p>' +
    '<div class="footer-social">' +
    '<a href="#" class="soc" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>' +
    '<a href="#" class="soc" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
    '<a href="#" class="soc" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
    '<a href="#" class="soc" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
    '</div></div>' +
    '<div class="footer-col"><h4>Quick Links</h4><ul>' +
    '<li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li>' +
    '<li><a href="services.html">Services</a></li><li><a href="partners.html">Partners</a></li>' +
    '<li><a href="products.html">Products</a></li><li><a href="team.html">Our Team</a></li>' +
    '<li><a href="contact.html">Contact Us</a></li></ul></div>' +
    '<div class="footer-col"><h4>Our Services</h4><ul>' +
    '<li><a href="services.html#hardware">IT Hardware Supply</a></li>' +
    '<li><a href="services.html#networking">Networking Solutions</a></li>' +
    '<li><a href="services.html#security">Security &amp; Firewall</a></li>' +
    '<li><a href="services.html#cloud">Microsoft 365</a></li>' +
    '<li><a href="services.html#amc">AMC &amp; IT Support</a></li>' +
    '<li><a href="services.html#peripherals">Peripherals</a></li></ul></div>' +
    '<div class="footer-col"><h4>Get In Touch</h4>' +
    '<div class="fc-item"><i class="fas fa-map-marker-alt"></i><span>97B, 1st Floor, Amritpuri, Near ISKCON Temple, East of Kailash, New Delhi \u2013 110065</span></div>' +
    '<div class="fc-item"><i class="fas fa-envelope"></i><span>cspsupport@sidhshree.com</span></div>' +
    '<div class="fc-item"><i class="fas fa-phone-alt"></i><span>011\u201146051122</span></div>' +
    '<div class="fc-item"><i class="fas fa-globe"></i><span>www.sidhshree.com</span></div>' +
    '<div class="fc-item"><i class="fas fa-clock"></i><span>Mon\u2013Sat: 9:00 AM \u2013 6:00 PM</span></div>' +
    '</div></div></div>' +
    '<div class="container"><div class="footer-bottom">' +
    '<div class="footer-bottom-row">' +
    '<span>\u00a9 2025 <a href="https://www.sidhshree.com">Sidhshree Computronics Pvt. Ltd.</a> All Rights Reserved.</span>' +
    '<span>Authorised Dealer \u00b7 Dell \u00b7 HP \u00b7 Lenovo \u00b7 Cisco \u00b7 Sophos \u00b7 Fortinet \u00b7 D-Link \u00b7 Acer \u00b7 Logitech \u00b7 Microsoft \u00b7 Samsung</span>' +
    '</div>' +
    '<div class="designed-by">' +
    '<span>Designed &amp; Developed by</span>' +
    '<a href="https://www.linkedin.com/in/ekansh-tyagi-103201238/" target="_blank" rel="noopener noreferrer" ' +
    'style="display:inline-flex;align-items:center;gap:5px;color:#60a5fa;font-weight:700;font-size:0.8rem" ' +
    'onmouseover="this.style.color=\'#93c5fd\'" onmouseout="this.style.color=\'#60a5fa\'">' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>' +
    '</svg>Ekansh Tyagi</a></div>' +
    '</div></div></footer>';

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();

/* ── HAMBURGER ── */
function toggleMenu() {
  var m = document.getElementById('mobileMenu');
  var btn = document.getElementById('hamburgerBtn');
  if (!m) return;
  var isOpen = m.classList.toggle('open');
  if (btn) {
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
}

/* Close menu on outside click */
document.addEventListener('click', function (e) {
  var m = document.getElementById('mobileMenu');
  var btn = document.getElementById('hamburgerBtn');
  if (m && m.classList.contains('open') && !m.contains(e.target) && btn && !btn.contains(e.target)) {
    m.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
});

/* ── SCROLL ANIMATIONS ── */
document.addEventListener('DOMContentLoaded', function () {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.anim').forEach(function (el) { obs.observe(el); });
});

/* ══════════════════════════════════════════════════
   VALIDATION HELPER
══════════════════════════════════════════════════ */
function _vf(id, checkFn) {
  var fg = document.getElementById('fg-' + id);
  var el = document.getElementById(id);
  if (!fg || !el) return true;
  var ok = checkFn(el.value.trim());
  ok ? fg.classList.remove('has-error') : fg.classList.add('has-error');
  return ok;
}

/* ══════════════════════════════════════════════════
   CONTACT FORM — Formspree AJAX
   Sends to: cspsupport@sidhshree.com
══════════════════════════════════════════════════ */
window.initContactForm = function () {
  var ph = document.getElementById('phone');
  if (ph) ph.addEventListener('input', function () { this.value = this.value.replace(/\D/g, '').slice(0, 10); });

  ['fname','lname','email','phone','service'].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', function () {
      var fg = document.getElementById('fg-' + id);
      if (fg) fg.classList.remove('has-error');
      var b = document.getElementById('formErrorBanner');
      if (b) b.style.display = 'none';
    });
  });
};

window.submitForm = function () {
  var valid =
    _vf('fname',   function (v) { return v.length > 0; }) &
    _vf('lname',   function (v) { return v.length > 0; }) &
    _vf('email',   function (v) { return /^[^\s@]+@[^\s@]+\.com$/i.test(v); }) &
    _vf('phone',   function (v) { return /^\d{10}$/.test(v); }) &
    _vf('service', function (v) { return v.length > 0; });

  if (!valid) {
    var b = document.getElementById('formErrorBanner');
    if (b) b.style.display = 'block';
    return;
  }

  var fname   = document.getElementById('fname').value.trim();
  var lname   = document.getElementById('lname').value.trim();
  var email   = document.getElementById('email').value.trim();
  var phone   = document.getElementById('phone').value.trim();
  var service = document.getElementById('service').value;
  var company = (document.getElementById('company') || {}).value || '';
  var message = (document.getElementById('message') || {}).value || '';

  var btn    = document.getElementById('submitBtn');
  var btnTxt = document.getElementById('btnText');
  btn.disabled = true;
  btnTxt.innerHTML = '<span class="spinner"></span>&nbsp;Sending\u2026';

  var data = new FormData();
  data.append('_subject', 'New Quote Request — ' + service);
  data.append('Name', fname + ' ' + lname);
  data.append('Email', email);
  data.append('Phone', phone);
  data.append('Service', service);
  if (company) data.append('Company', company);
  if (message) data.append('Message', message);
  data.append('_replyto', email);

  fetch('https://formspree.io/f/mzdkwrlo', {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(function (res) {
    if (res.ok) {
      _showContactSuccess(fname, service, email);
    } else {
      res.json().then(function (d) { _contactError(btn, btnTxt, d); }).catch(function () { _contactError(btn, btnTxt, null); });
    }
  })
  .catch(function () { _contactError(btn, btnTxt, null); });
};

function _showContactSuccess(fname, service, email) {
  var formEl = document.getElementById('quoteForm');
  var successEl = document.getElementById('formSuccess');
  if (formEl) formEl.style.display = 'none';
  if (successEl) successEl.style.display = 'block';
  var h = document.getElementById('successHeading');
  var p = document.getElementById('successMsg');
  if (h) h.textContent = 'Thank you, ' + fname + '!';
  if (p) p.textContent = 'Your enquiry about \u201c' + service + '\u201d has been sent to our team. We will get back to you at ' + email + ' within 24 hours with our best pricing.';
  _startCountdown('refreshCountdown');
}

function _contactError(btn, btnTxt, data) {
  btn.disabled = false;
  btnTxt.textContent = 'Request A Quote \u2192';
  var b = document.getElementById('formErrorBanner');
  if (b) {
    var msg = (data && data.errors) ? data.errors.map(function (e) { return e.message; }).join(', ') : 'Something went wrong. Please call us at 011\u201146051122.';
    b.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + msg;
    b.style.display = 'block';
  }
}

/* ══════════════════════════════════════════════════
   CAREERS FORM — Formspree AJAX
   Sends to: cspsupport@sidhshree.com
══════════════════════════════════════════════════ */
window.initCareersForm = function () {
  var ph = document.getElementById('c-phone');
  if (ph) ph.addEventListener('input', function () { this.value = this.value.replace(/\D/g, '').slice(0, 10); });

  ['c-name','c-email','c-phone','c-role'].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', function () {
      var fg = document.getElementById('fg-' + id);
      if (fg) fg.classList.remove('has-error');
      var b = document.getElementById('careersErrorBanner');
      if (b) b.style.display = 'none';
    });
  });
};

window.submitCareers = function () {
  var valid =
    _vf('c-name',  function (v) { return v.length > 0; }) &
    _vf('c-email', function (v) { return /^[^\s@]+@[^\s@]+\.com$/i.test(v); }) &
    _vf('c-phone', function (v) { return /^\d{10}$/.test(v); }) &
    _vf('c-role',  function (v) { return v.length > 0; });

  if (!valid) {
    var b = document.getElementById('careersErrorBanner');
    if (b) b.style.display = 'block';
    return;
  }

  var name  = document.getElementById('c-name').value.trim();
  var email = document.getElementById('c-email').value.trim();
  var phone = document.getElementById('c-phone').value.trim();
  var role  = document.getElementById('c-role').value;
  var exp   = (document.getElementById('c-exp') || {}).value || '';
  var msg   = (document.getElementById('c-msg') || {}).value || '';

  var btn = document.getElementById('careersSubmitBtn');
  var txt = document.getElementById('careersBtnText');
  btn.disabled = true;
  txt.innerHTML = '<span class="spinner"></span>&nbsp;Submitting\u2026';

  var data = new FormData();
  data.append('_subject', 'Job Application — ' + role);
  data.append('Applicant Name', name);
  data.append('Email', email);
  data.append('Phone', phone);
  data.append('Position Applied', role);
  if (exp) data.append('Experience', exp);
  if (msg) data.append('Cover Letter', msg);
  data.append('_replyto', email);

  fetch('https://formspree.io/f/mzdkwrlo', {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(function (res) {
    if (res.ok) {
      _showCareersSuccess(name, role, email);
    } else {
      _careersError(btn, txt);
    }
  })
  .catch(function () { _careersError(btn, txt); });
};

function _showCareersSuccess(name, role, email) {
  var formEl    = document.getElementById('careersForm');
  var successEl = document.getElementById('careersSuccess');
  if (formEl) formEl.style.display = 'none';
  if (successEl) successEl.style.display = 'block';
  var h = document.getElementById('careersSuccessHeading');
  var p = document.getElementById('careersSuccessMsg');
  if (h) h.textContent = 'Application Received, ' + name + '!';
  if (p) p.textContent = 'Thank you for applying for the \u201c' + role + '\u201d position. We\u2019ll review your application and reach out at ' + email + ' shortly.';
  _startCountdown('careersCountdown');
}

function _careersError(btn, txt) {
  btn.disabled = false;
  txt.textContent = 'Submit Application \u2192';
  var b = document.getElementById('careersErrorBanner');
  if (b) {
    b.innerHTML = '<i class="fas fa-exclamation-circle"></i> Something went wrong. Please try again or call us at 011\u201146051122.';
    b.style.display = 'block';
  }
}

/* ── COUNTDOWN + AUTO-REFRESH ── */
function _startCountdown(elemId) {
  var cd = document.getElementById(elemId);
  var n = 5;
  if (cd) cd.textContent = 'Page refreshing in ' + n + ' seconds\u2026';
  var t = setInterval(function () {
    n--;
    if (cd) cd.textContent = 'Page refreshing in ' + n + ' seconds\u2026';
    if (n <= 0) { clearInterval(t); location.reload(); }
  }, 1000);
}
