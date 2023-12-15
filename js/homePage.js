window.onload = function () {
  $(".main").addClass("not_active");
};

$("#btnUcapan").on("click", function () {
  window.onload = function () {
    $(".intro").addClass("not_active");
    $(".main").removeClass("not_active");
  };
});

var song = new Audio("./../audio/audio.mp3");

$("#login").on("click", function () {
  $(".intro").fadeOut(2000);
  setTimeout(function () {
    $(".main").removeClass("not_active");
    song.play();
    $(".carousel-inner").html(function () {
      const img0 = `<div class="carousel-item active">
      <img src="https://picsum.photos/id/222/1000/500" class="d-block w-100" alt="" />
      </div>`;
      let img1 = `<div class="carousel-item">
      <img src="https://picsum.photos/id/221/1000/500" class="d-block w-100" alt="" />
      </div>`;
      for (let index = 2; index < 10; index++) {
        img1 += `<div class="carousel-item">
          <img src="https://picsum.photos/id/18${index}/1000/500" class="d-block w-100" alt="" />
          </div>`;
      }
      // return console.log(img0 + img1);
      return img0 + img1;
    });
    // for (let index = 1; index < 10; index++) {
    //   $(".carousel-inner").html(`<div class="carousel-item">
    //   <img src="../img/slide/${index}.png" class="d-block w-100" alt="" />
    //   </div>`);
    // }
  }, 2000);
});

$("#laguoff").on("click", function () {
  song.pause();
  $("#laguoff").addClass("not_active");
  $("#laguon").removeClass("not_active");
});

$("#laguon").on("click", function () {
  song.play();
  $("#laguon").addClass("not_active");
  $("#laguoff").removeClass("not_active");
});

var countDownDate = new Date("feb 15, 2023 09:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("Countdown").innerHTML =
    days +
    " Hari " +
    hours +
    " Jam " +
    minutes +
    " Menit " +
    seconds +
    " Detik ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Cemo").innerHTML = "EXPIRED";
  }
}, 1000);
