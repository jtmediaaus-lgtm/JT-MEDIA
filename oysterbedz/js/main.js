/* Oysterbedz — small interactions: mobile nav, scroll reveal, click-to-load map, footer year */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && menu.classList.contains("open")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close on Escape and return focus to the toggle (keyboard accessibility)
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  var revealEls = document.querySelectorAll(
    ".about-copy, .about-media, .menu-card, .hh-copy, .hh-card, .g-item, .visit-info, .visit-map, .section-head"
  );
  revealEls.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Click-to-load map: don't load Google (and its cookies) until the visitor opts in
  var mapBtn = document.getElementById("map-load");
  if (mapBtn) {
    mapBtn.addEventListener("click", function () {
      var src = mapBtn.getAttribute("data-map-src");
      var wrap = mapBtn.parentNode;
      var iframe = document.createElement("iframe");
      iframe.title = "Map showing Oysterbedz at Dolphin Quay, Mandurah Ocean Marina";
      iframe.src = src;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      wrap.replaceChild(iframe, mapBtn);
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
