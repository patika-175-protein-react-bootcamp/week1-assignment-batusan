const clock = document.querySelector("#myClock");
window.addEventListener("load", () => {
  let name = prompt("Merhaba , Adınız nedir ?");
  let nameSpan = document.querySelector("#myName");
  if (name.length>0) nameSpan.innerHTML = name;
});

function timeformat(date) {
  var h = date.getHours();
  var m = date.getMinutes();
  var x = h >= 12 ? "pm" : "am";
  h = h % 12;
  h = h ? h : 12;
  m = m < 10 ? "0" + m : m;
  var mytime = h + ":" + m + " " + x;
  return mytime;
}

function showTime() {
  var dt = new Date();
  clock.innerHTML =
    dt.getFullYear() +
    "/" +
    (dt.getMonth() + 1) +
    "/" +
    dt.getDate() +
    "- " +
    timeformat(new Date());
}

setInterval(showTime, 1000);
