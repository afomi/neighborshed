// Tells Google Tag Manager when someone follows one of the site's ways out:
// qart.app, GitHub or civic.studio. Links carry data-exit="<name>".
// GTM picks up the "exit_click" event; the links work the same without it.
document.addEventListener("click", function (event) {
  var link = event.target.closest("a[data-exit]");
  if (!link) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "exit_click",
    exit_name: link.dataset.exit,
    link_url: link.href,
  });
});
