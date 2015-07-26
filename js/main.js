// Shorten the navbar after scrolling a little bit down
$(window).scroll(function() {
    if ($(".navbar").offset().top > 150) {
        $(".navbar").addClass("top-nav-short");
        $(".affix").addClass("affix-short");
    } else {
        $(".navbar").removeClass("top-nav-short");
        $(".affix").removeClass("affix-short");
    }
});

// On mobile, hide the avatar when expanding the navbar menu
$('#main-navbar').on('show.bs.collapse', function () {
  $(".navbar").addClass("top-nav-expanded");
})
$('#main-navbar').on('hidden.bs.collapse', function () {
  $(".navbar").removeClass("top-nav-expanded");
})
