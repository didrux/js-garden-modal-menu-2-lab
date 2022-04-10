const btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > innerHeight * 2/3) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 'innerHeight * 2/3');
});