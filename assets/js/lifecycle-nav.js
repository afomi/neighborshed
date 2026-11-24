// Highlights the step of the life of a share you are reading on the protocol page.
// Progressive enhancement: without this script every step is still a working link,
// shown as upcoming.
// Steps before the section in view show as done, that section as current.
// Past the last step's section, every step shows as done.
(function () {
  var nav = document.querySelector("nav .lifecycle");
  if (!nav) return;

  var steps = Array.prototype.slice.call(nav.querySelectorAll(".lc-step"));
  var headings = steps.map(function (step) {
    var link = step.querySelector(".lc-link");
    var id = decodeURIComponent(link.hash.slice(1));
    return document.getElementById(id);
  });
  if (headings.some(function (h) { return !h; })) return;

  // The first h2 after the last step's section ends the lifecycle.
  var end = null;
  var last = headings[headings.length - 1];
  for (var el = last.nextElementSibling; el; el = el.nextElementSibling) {
    if (el.tagName === "H2") { end = el; break; }
  }

  var OFFSET = 120;
  var labels = { done: "(done)", current: "(current step)", upcoming: "(upcoming)" };

  function update() {
    var current = -1;
    headings.forEach(function (h, i) {
      if (h.getBoundingClientRect().top <= OFFSET) current = i;
    });
    var pastEnd = end && end.getBoundingClientRect().top <= OFFSET;

    steps.forEach(function (step, i) {
      var state;
      if (pastEnd || i < current) state = "done";
      else if (i === current) state = "current";
      else state = "upcoming";

      step.dataset.state = state;
      var link = step.querySelector(".lc-link");
      if (state === "current") link.setAttribute("aria-current", "step");
      else link.removeAttribute("aria-current");
      step.querySelector(".lc-state").textContent = labels[state];
    });
  }

  var queued = false;
  window.addEventListener("scroll", function () {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(function () {
      queued = false;
      update();
    });
  }, { passive: true });
  window.addEventListener("hashchange", update);
  update();
})();
