var $gallery = $('.gallery').isotope({
  // options...
  imageSelector: '.photo',
  layoutMode: 'masonry'
});
// layout Isotope after each image loads
$gallery.imagesLoaded().progress( function() {
  $gallery.isotope('layout');
});

// masonry: {
//     columnWidth: 300,
//     gutter: 10,
//     //fitWidth: true //does not work with percentage widths
// }

//layoutMode: 'fitRows',
