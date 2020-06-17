(function($) {

    var parallax = -0.5;

    var $bg_images = $('.p-section-header__upper'); //パララックス効果を与えるクラスを指定

    $(window).scroll(function() {

        var offset_tops = [];
        var clientHeights = [];
        $bg_images.each(function(i, el) {
            offset_tops.push($(el).offset().top);
            clientHeights.push($(el).outerHeight());
            console.dir($(el).offset().top);
        });
        
        var dy = $(this).scrollTop();
        $bg_images.each(function(i, el) {
        var ot = offset_tops[i];
        var slideHeight = ( ot - dy ) / 4 * parallax;
        $(el).css('background-position', 'center ' + slideHeight + 'px');
        });
    });

})(jQuery);