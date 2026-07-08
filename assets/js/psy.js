/* ============================================================
   PSYTEN — interactions
   ============================================================ */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* year */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  /* reveal on scroll */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* cursor-follow blob (desktop, pointer devices) */
  var cursor = document.querySelector("[data-cursor]");
  if (cursor && !reduce && window.matchMedia("(pointer: fine)").matches) {
    var tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    var cx = tx, cy = ty;
    window.addEventListener("pointermove", function (e) { tx = e.clientX; ty = e.clientY; }, { passive: true });
    (function loop() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      cursor.style.transform = "translate(" + (cx - cursor.offsetWidth / 2) + "px," + (cy - cursor.offsetHeight / 2) + "px)";
      requestAnimationFrame(loop);
    })();
  }

  /* melting hero letters react to hover */
  document.querySelectorAll("[data-melt] span").forEach(function (s) {
    s.addEventListener("pointerenter", function () {
      s.style.transform = "translateY(10%) scale(1.15) rotate(" + (Math.random() * 10 - 5) + "deg)";
      setTimeout(function () { s.style.transform = ""; }, 400);
    });
  });

  /* TRIP MODE toggle */
  var tripBtn = document.querySelector("[data-trip]");
  var tripState = document.querySelector("[data-trip-state]");
  if (tripBtn) {
    tripBtn.addEventListener("click", function () {
      var on = document.body.classList.toggle("trip");
      tripBtn.setAttribute("aria-pressed", String(on));
      if (tripState) tripState.textContent = on ? "ON" : "OFF";
    });
  }
})();
