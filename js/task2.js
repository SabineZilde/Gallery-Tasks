$('img').hover(function() {
    const link = $(this).attr('src');
    const altText = $(this).attr('alt');
    $('#img-large').attr({
        'src': link, 
        'alt': altText
    });
});