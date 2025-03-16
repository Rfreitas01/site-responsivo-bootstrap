document.addEventListener("DOMContentLoaded", function () {
    var slider = document.getElementById("slider");
    slider.addEventListener("slid.bs.carousel", function (event) {
      if (event.relatedTarget.classList.contains("active")) {
        var indicators = document.querySelectorAll(".carousel-indicators button");
        for (var i = 0; i < indicators.length; i++) {
          indicators[i].classList.remove("active");
        }
        indicators[parseInt(event.to)].classList.add("active");
      }
      
    });
  });
  $(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var target = $(this.getAttribute('href'));
      if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 800, 'swing');
      }
    });
  });
  $(window).scroll(function() {
    $('.fade-in').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass('active');
      }
    });
  });
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  