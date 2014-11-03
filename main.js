var $about = $('#about-button')
var $sites = $('#sites-button')
var $skills = $('#skills-button')
var $contact = $('#contact-button')

$( document ).ready( function() {
  $about.on("mouseover", function(e) {
    e.stopPropagation();
    changeColor("rgba(207,72,88,1)")
  });
  $about.on("mouseout", function(e) {
    e.stopPropagation();
    changeColor("white")
  });

  $sites.on("mouseover", function(e) {
    e.stopPropagation();
    changeColor("rgba(22, 167,157, 1)")
  });

  $sites.on("mouseout", function(e) {
    e.stopPropagation();
    changeColor("white")
  });

  $skills.on("mouseover", function(e) {
    e.stopPropagation();
    changeColor("rgba(128,98,139,1)")
  });

  $skills.on("mouseout", function(e) {
    e.stopPropagation();
    changeColor("white")
  });

  $contact.on("mouseover", function(e) {
    e.stopPropagation();
    changeColor("rgba(244, 172, 66, 1)")
  });

  $contact.on("mouseout", function(e) {
    e.stopPropagation();
    changeColor("white")
  });


  function changeColor (newColor) {
   $('#header').css({color: newColor});
  }


 $about.on("click", function(e) {
    e.stopPropagation();
    hideAll();
     setTimeout(function() {
      $('#about-me').fadeIn();
      $('#about-me').css({border: "5px solid rgba(207,72,88,1)"})
    }, 300);
  });

  $sites.on("click", function(e) {
    e.stopPropagation();
    hideAll();
    setTimeout(function() {
      $('#sites').fadeIn();
      $('#sites').css({border: "5px solid rgba(22, 167,157, 1)"})
    }, 300);
  });

  $skills.on("click", function(e) {
    e.stopPropagation();
    hideAll();
     setTimeout(function() {
      $('#skills').fadeIn();
      $('#skills').css({border: "5px solid rgba(128,98,139,1)"})
    }, 300);
  });

  $contact.on("click", function(e) {
    e.stopPropagation();
    hideAll();
    setTimeout(function() {
      $('#contact').fadeIn();
      $('#contact').css({border: "5px solid rgba(244, 172, 66, 1)"})
    }, 300);
  });

  function hideAll() {
    $('#skills').fadeOut(200);
    $('#sites').fadeOut(200);
    $('#about-me').fadeOut(200);
    $('#contact').fadeOut(200);
  }
});
