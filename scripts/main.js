        function showSlides() {
          const slides = document.querySelectorAll('.mySlides')
          const dots = document.querySelectorAll('.dot')
          slides.forEach((slide) => (slide.style.display = 'none'))
          slideIndex++
          if (slideIndex > slides.length) slideIndex = 1
          dots.forEach((dot) => (dot.className = dot.className.replace(' active', '')))    
          slides[slideIndex - 1].style.display = 'block'
          dots[slideIndex - 1].className += ' active'
        } 
        showSlides()
        setInterval(showSlides, 4000)
$(function () {
    
    $("#nav_toggle").on("click", function(event) {
       event.preventDefault();
        
        $("#nav").toggleClass("active");
    });
    
    
    });
