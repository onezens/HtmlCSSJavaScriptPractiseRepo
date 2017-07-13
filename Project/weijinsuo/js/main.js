/**
 * Created by wangzhen on 17/6/26.
 */
$(function () {

    function resize() {
        var winWidth = $(window).width();
        console.log(winWidth);
        $('#home_slide .item-image').each(function (i, item) {
            var $item = $(item);
            var imgSrc = $item.data(winWidth < 768 ? 'sm-image' : 'lg-image');
            var imgHtml = '<img src="' + imgSrc + '"/>';
            $item.html(imgHtml);
            $item.css('backgroundImage', 'url('+imgSrc+')');

        });
    }
    $(window).on('resize', resize).trigger('resize');

    // 提示框效果
    $('[data-toggle="tooltip"]').tooltip();
});
