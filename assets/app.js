(function(){
  // Set year in footer
  var y = new Date().getFullYear();
  var el = document.querySelector('[data-year]');
  if(el) el.textContent = String(y);

  // Optional: if you later have a fixed download URL, you can set it in one place:
  // window.APP_DOWNLOAD_URL = "https://github.com/<user>/<repo>/releases/latest";
})();
