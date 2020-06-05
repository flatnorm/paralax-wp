(function($) {

    var parallax = -0.5;
    // var parallax = -0.25; //ここの値をと画像のサイズを変更しながら調整

    var $bg_images = $(".p-section-header__upper"); //パララックス効果を与えるクラスを指定
    var offset_tops = [];
    $bg_images.each(function(i, el) {
        offset_tops.push($(el).offset().top);
    });

    $(window).scroll(function() {
        var dy = $(this).scrollTop();
        $bg_images.each(function(i, el) {
        var ot = offset_tops[i];
        $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
        });
    });

})(jQuery);