$('.gallery').isotope({
    itemSelector: '.photo',
    //layoutMode: 'fitRows',
    layoutMode: 'masonry',
    masonry: {
        columnWidth: 300,
        gutter: 10,
        fitWidth: true
    }
});
