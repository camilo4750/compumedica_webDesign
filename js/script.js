$(window).scroll(function (event) {
  let scrollTop = $(window).scrollTop();
  if (scrollTop >= 630) {
    $('#menu').css("background", "#fff");
    $('#menu').css("transition", "0.7s");
    $('#menu').css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px");
    $('.nav-link').css("color", "#000");
    $('.navbar-toggler').css("border-color", "#000");
    $('.fa-bars').css("color", "#000");
  }

  if (scrollTop < 630) {
    $('#menu').css("background", "transparent");
    $('#menu').css("transition", "0.5s");
    $('#menu').css("box-shadow", "none");
    $('.nav-link').css("color", "#fff")
    $('.navbar-toggler').css("border-color", "#fff");
    $('.fa-bars').css("color", "#fff");
  }
});

let locationPrincipal = window.pageYOffset;
window.onscroll = function () {
  let nowLocation = window.pageYOffset;
  if (locationPrincipal >= nowLocation) {
    $('#menu').css("top", "0");
  } else {
    $('#menu').css("top", "-100px");
  }
  locationPrincipal = nowLocation;
}

const typed = new Typed('#element', {
  strings: [
    "No somos los unicos, pero nos esforzamos por ser los mejores.",
  ],
  typeSpeed: 50,
  fadeOut: true,
  loop: true
});

$('.owl-carousel').owlCarousel({
  loop: true,
  dots: false,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 5,
      nav: true,
      loop: false
    }
  }
});

$(".ir-arriba").click(function () {
  $("body, html").animate(
    {
      scrollTop: "0px",
    },
    500
  );
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1500) {
    $(".ir-arriba").slideDown(500);
  } else {
    $(".ir-arriba").slideUp(500);
  }
});

$('.navbar-nav a').on('click', function() {
  $('.navbar-collapse').collapse('hide');
});
