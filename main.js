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
    hideAll()
    $('#about-me').css({display: ""})
  });

  $sites.on("click", function(e) {
    e.stopPropagation();
    hideAll()
    $('#sites').css({display: ""})
  });

  $skills.on("click", function(e) {
    e.stopPropagation();
    hideAll();
    console.log("CLICKED")
    $('#skills').css({display: ""})
  });

  $contact.on("click", function(e) {
    e.stopPropagation();
    hideAll()
    $('#contact').css({display: ""})
  });

  function hideAll() {
    $('#skills').css({display: "none"});
    $('#sites').css({display: "none"});
    $('#about-me').css({display: "none"});
    $('#contact').css({display: "none"});
  }
});
