// Demo blok Scratch di halaman beranda (index.html)
(function () {
  var flag = document.getElementById('flag');
  var blocks = Array.prototype.slice.call(document.querySelectorAll('#blocks .block'));
  var timers = [];

  if (flag) {
    flag.addEventListener('click', function () {
      timers.forEach(clearTimeout);
      timers = [];
      blocks.forEach(function (b, i) {
        if (i > 0) b.hidden = true;
        b.classList.remove('pop');
      });
      blocks.slice(1).forEach(function (b, i) {
        timers.push(setTimeout(function () {
          b.hidden = false;
          b.classList.add('pop');
        }, 350 * (i + 1)));
      });
    });
  }

  // Tahun otomatis di footer
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();