$(document).ready(function() {
    $('#img2-large').hide();
    $('#img3-large').hide();
    $('#img4-large').hide();
    $('#img5-large').hide();
    $('#img6-large').hide();
});

$('#img1').hover(function() {
    $('#img1-large').show();
    $('#img2-large').hide();
    $('#img3-large').hide();
    $('#img4-large').hide();
    $('#img5-large').hide();
    $('#img6-large').hide();
});

$('#img2').hover(function() {
    $('#img1-large').hide();
    $('#img2-large').show();
    $('#img3-large').hide();
    $('#img4-large').hide();
    $('#img5-large').hide();
    $('#img6-large').hide();
});

$('#img3').hover(function() {
    $('#img1-large').hide();
    $('#img2-large').hide();
    $('#img3-large').show();
    $('#img4-large').hide();
    $('#img5-large').hide();
    $('#img6-large').hide();
});

$('#img4').hover(function() {
    $('#img1-large').hide();
    $('#img2-large').hide();
    $('#img3-large').hide();
    $('#img4-large').show();
    $('#img5-large').hide();
    $('#img6-large').hide();
});

$('#img5').hover(function() {
    $('#img1-large').hide();
    $('#img2-large').hide();
    $('#img3-large').hide();
    $('#img4-large').hide();
    $('#img5-large').show();
    $('#img6-large').hide();
});

$('#img6').hover(function() {
    $('#img1-large').hide();
    $('#img2-large').hide();
    $('#img3-large').hide();
    $('#img4-large').hide();
    $('#img5-large').hide();
    $('#img6-large').show();
});