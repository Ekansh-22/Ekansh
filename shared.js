/* ── SHARED NAV & FOOTER RENDERER ── */
(function() {
  var page = location.pathname.split('/').pop() || 'index.html';

  var navHTML = '<div class="topbar"><div class="container"><div class="topbar-left"><span><i class="fas fa-map-marker-alt"></i>97B, 1st Floor, Amritpuri, East of Kailash, Delhi-110065</span><a href="mailto:cspsupport@sidhshree.com"><i class="fas fa-envelope"></i>cspsupport@sidhshree.com</a></div><div class="topbar-right"><a href="tel:01146051122"><i class="fas fa-phone"></i>011-46051122</a><a href="#"><i class="fab fa-linkedin-in"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-facebook-f"></i></a></div></div></div>'
  + '<nav><div class="nav-inner"><a href="index.html" class="logo"><div class="logo-icon">SC</div><div class="logo-text">Sidhshree Computronics <span>Pvt. Ltd. \u00b7 Authorised Dealer</span></div></a>'
  + '<ul class="nav-links">'
  + '<li><a href="index.html"'    + (page==='index.html'?' class="active"':'')    + '>Home</a></li>'
  + '<li><a href="about.html"'    + (page==='about.html'?' class="active"':'')    + '>About Us</a></li>'
  + '<li><a href="services.html"' + (page==='services.html'?' class="active"':'') + '>Services</a></li>'
  + '<li><a href="partners.html"' + (page==='partners.html'?' class="active"':'') + '>Partners</a></li>'
  + '<li><a href="products.html"' + (page==='products.html'?' class="active"':'') + '>Products</a></li>'
  + '<li><a href="team.html"'     + (page==='team.html'?' class="active"':'')     + '>Our Team</a></li>'
  + '<li><a href="contact.html"'  + (page==='contact.html'?' class="active"':'')  + '>Contact</a></li>'
  + '</ul>'
  + '<a href="contact.html" class="nav-btn">Get a Quote</a>'
  + '<div class="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></div>'
  + '</div>'
  + '<div class="mobile-menu" id="mobileMenu"><a href="index.html">Home</a><a href="about.html">About Us</a><a href="services.html">Services</a><a href="partners.html">Partners</a><a href="products.html">Products</a><a href="team.html">Our Team</a><a href="contact.html">Contact</a></div>'
  + '</nav>';

  var brands = ['Dell','HP','Lenovo','Cisco','Sophos','D-Link','Fortinet','Acer','Logitech','Microsoft','Samsung','AWS','Seqrite'];
  var marquee = brands.concat(brands).map(function(b){ return '<div class="m-logo"><div class="m-logo-inner">'+b+'</div></div>'; }).join('');

  var footerHTML = '<div class="clients"><div class="container"><div class="clients-title"><div class="section-tag">Our Brand Partners</div><h2>Authorised Dealer for <span>Leading Brands</span></h2></div></div><div class="marquee-wrap"><div class="marquee-track">'+marquee+'</div></div></div>'
  + '<footer><div class="container"><div class="footer-grid">'
  + '<div class="footer-brand"><h3>Sidhshree <em>Computronics</em> Pvt. Ltd.</h3><p>A trusted IT solutions provider and authorised channel partner in New Delhi. Supplying genuine hardware, networking, security and software solutions to businesses across India since 2000.</p><div class="footer-social"><a href="#" class="soc"><i class="fab fa-linkedin-in"></i></a><a href="#" class="soc"><i class="fab fa-twitter"></i></a><a href="#" class="soc"><i class="fab fa-facebook-f"></i></a><a href="#" class="soc"><i class="fab fa-instagram"></i></a></div></div>'
  + '<div class="footer-col"><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li><li><a href="services.html">Services</a></li><li><a href="partners.html">Partners</a></li><li><a href="products.html">Products</a></li><li><a href="team.html">Our Team</a></li><li><a href="contact.html">Contact Us</a></li></ul></div>'
  + '<div class="footer-col"><h4>Our Services</h4><ul><li><a href="services.html#hardware">IT Hardware Supply</a></li><li><a href="services.html#networking">Networking Solutions</a></li><li><a href="services.html#security">Security &amp; Firewall</a></li><li><a href="services.html#cloud">Microsoft 365</a></li><li><a href="services.html#amc">AMC &amp; IT Support</a></li><li><a href="services.html#peripherals">Peripherals</a></li></ul></div>'
  + '<div class="footer-col"><h4>Get In Touch</h4><div class="fc-item"><i class="fas fa-map-marker-alt"></i><span>97B, 1st Floor, Amritpuri, Near ISKCON Temple, East of Kailash, New Delhi \u2013 110065</span></div><div class="fc-item"><i class="fas fa-envelope"></i><span>cspsupport@sidhshree.com</span></div><div class="fc-item"><i class="fas fa-phone-alt"></i><span>011\u201146051122</span></div><div class="fc-item"><i class="fas fa-globe"></i><span>www.sidhshree.com</span></div><div class="fc-item"><i class="fas fa-clock"></i><span>Mon\u2013Sat: 9:00 AM \u2013 6:00 PM</span></div></div>'
  + '</div></div>'
  + '<div class="container"><div class="footer-bottom"><div class="footer-bottom-row"><span>\u00a9 2025 <a href="https://www.sidhshree.com">Sidhshree Computronics Pvt. Ltd.</a> All Rights Reserved.</span><span>Authorised Dealer \u00b7 Dell \u00b7 HP \u00b7 Lenovo \u00b7 Cisco \u00b7 Sophos \u00b7 Fortinet \u00b7 D-Link \u00b7 Acer \u00b7 Logitech \u00b7 Microsoft \u00b7 Samsung</span></div>'
  + '<div class="designed-by"><span style="color:#94a3b8">Designed &amp; Developed by</span><a href="https://www.linkedin.com/in/ekansh-tyagi-103201238/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;color:#60a5fa;font-weight:700;font-size:0.82rem" onmouseover="this.style.color=\'#93c5fd\'" onmouseout="this.style.color=\'#60a5fa\'"><svg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'currentColor\'><path d=\'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\'/></svg>Ekansh Tyagi</a></div>'
  + '</div></div></footer>';

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();

/* ── HAMBURGER ── */
function toggleMenu() {
  var m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}

/* ── SCROLL ANIMATIONS ── */
document.addEventListener('DOMContentLoaded', function() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.anim').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    obs.observe(el);
  });
});

/* ══════════════════════════════════════════════════
   HELPER — field validation with red border toggle
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
   CONTACT FORM (contact.html)
   ══════════════════════════════════════════════════ */
window.initContactForm = function() {
  /* Phone: digits only, max 10 */
  var ph = document.getElementById('phone');
  if (ph) ph.addEventListener('input', function(){ this.value = this.value.replace(/\D/g,'').slice(0,10); });

  /* Clear errors on any input */
  ['fname','lname','email','phone','service'].forEach(function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', function() {
      var fg = document.getElementById('fg-' + id);
      if (fg) fg.classList.remove('has-error');
      var b = document.getElementById('formErrorBanner');
      if (b) b.style.display = 'none';
    });
  });
};

window.submitForm = function() {
  var valid =
    _vf('fname',   function(v){ return v.length > 0; }) &
    _vf('lname',   function(v){ return v.length > 0; }) &
    _vf('email',   function(v){ return /^[^\s@]+@[^\s@]+\.com$/i.test(v); }) &
    _vf('phone',   function(v){ return /^\d{10}$/.test(v); }) &
    _vf('service', function(v){ return v.length > 0; });

  if (!valid) {
    var b = document.getElementById('formErrorBanner');
    if (b) b.style.display = 'block';
    return;
  }

  var fname   = document.getElementById('fname').value.trim();
  var email   = document.getElementById('email').value.trim();
  var service = document.getElementById('service').value;
  var btn     = document.getElementById('submitBtn');
  var btnTxt  = document.getElementById('btnText');
  btn.disabled = true;
  btnTxt.innerHTML = '<span class="spinner"></span>&nbsp;Sending\u2026';

  setTimeout(function() {
    document.getElementById('quoteForm').style.display    = 'none';
    document.getElementById('formSuccess').style.display  = 'block';
    document.getElementById('successHeading').textContent = 'Thank you, ' + fname + '!';
    document.getElementById('successMsg').textContent     = 'Your enquiry about \u201c' + service + '\u201d has been received. Our team will contact you at ' + email + ' within 24 hours with the best pricing.';

    /* 5-second countdown then page refresh */
    var n = 5;
    var cd = document.getElementById('refreshCountdown');
    if (cd) cd.textContent = 'Page refreshing in ' + n + ' seconds\u2026';
    var t = setInterval(function() {
      n--;
      if (cd) cd.textContent = 'Page refreshing in ' + n + ' seconds\u2026';
      if (n <= 0) { clearInterval(t); location.reload(); }
    }, 1000);
  }, 1200);
};

/* ══════════════════════════════════════════════════
   CAREERS FORM (team.html)
   ══════════════════════════════════════════════════ */
window.initCareersForm = function() {
  var ph = document.getElementById('c-phone');
  if (ph) ph.addEventListener('input', function(){ this.value = this.value.replace(/\D/g,'').slice(0,10); });

  ['c-name','c-email','c-phone','c-role'].forEach(function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', function() {
      var fg = document.getElementById('fg-' + id);
      if (fg) fg.classList.remove('has-error');
      var b = document.getElementById('careersErrorBanner');
      if (b) b.style.display = 'none';
    });
  });
};

window.submitCareers = function() {
  var valid =
    _vf('c-name',  function(v){ return v.length > 0; }) &
    _vf('c-email', function(v){ return /^[^\s@]+@[^\s@]+\.com$/i.test(v); }) &
    _vf('c-phone', function(v){ return /^\d{10}$/.test(v); }) &
    _vf('c-role',  function(v){ return v.length > 0; });

  if (!valid) {
    var b = document.getElementById('careersErrorBanner');
    if (b) b.style.display = 'block';
    return;
  }

  var name  = document.getElementById('c-name').value.trim();
  var email = document.getElementById('c-email').value.trim();
  var role  = document.getElementById('c-role').value;
  var btn   = document.getElementById('careersSubmitBtn');
  var txt   = document.getElementById('careersBtnText');
  btn.disabled = true;
  txt.innerHTML = '<span class="spinner"></span>&nbsp;Submitting\u2026';

  setTimeout(function() {
    document.getElementById('careersForm').style.display          = 'none';
    document.getElementById('careersSuccess').style.display       = 'block';
    document.getElementById('careersSuccessHeading').textContent  = 'Application Received, ' + name + '!';
    document.getElementById('careersSuccessMsg').textContent      = 'Thank you for your interest in the \u201c' + role + '\u201d position. We\u2019ll review your application and reach out at ' + email + ' shortly.';

    var n = 5;
    var cd = document.getElementById('careersCountdown');
    if (cd) cd.textContent = 'Page refreshing in ' + n + ' seconds\u2026';
    var t = setInterval(function() {
      n--;
      if (cd) cd.textContent = 'Page refreshing in ' + n + ' seconds\u2026';
      if (n <= 0) { clearInterval(t); location.reload(); }
    }, 1000);
  }, 1200);
};
