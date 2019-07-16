// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");
var container = document.getElementById("myContainer");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    document.getElementById("myContainer").style.paddingTop = "8rem";
  } else {
    header.classList.remove("sticky");
  }
}
// container.attributeList.remove("paddingTop");

// document.getElementsByTagName("sticky").style.paddingTop = "100rem";

// $(window).scroll(function() {
// // 100 = The point you would like to fade the nav in.
//
// 	if ($(window).scrollTop() > 100 ){
//
//  		$('.bg').addClass('shows
//
//   } else {
//
//     $('.bg').removeClass('show');
//
//  	};
// });
//
// $('.scroll').on('click', function(e){
// 		e.preventDefault()
//
//   $('html, body').animate({
//       scrollTop : $(this.hash).offset().top
//     }, 1500);
// });
