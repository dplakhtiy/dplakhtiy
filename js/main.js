

$(document).ready(function() {
    document.querySelectorAll("[data-scrollTo").forEach((item)=>{
        item.addEventListener('click', function() {
            var elementClick = item.dataset.scrollto;
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
              scrollTop: destination
            }, 800);
            return false;
        });
    })
    // $("a.scrollto").click(function() {
    //   var elementClick = $(this).attr("href")
    //   var destination = $(elementClick).offset().top;
    //   jQuery("html:not(:animated),body:not(:animated)").animate({
    //     scrollTop: destination
    //   }, 800);
    //   return false;
    // });
  });