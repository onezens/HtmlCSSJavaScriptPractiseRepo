/**
 * Created by wangzhen on 17/6/26.
 */
$(function () {

    function resize() {
        //轮播图
        var winWidth = $(window).width();
        console.log(winWidth);
        $('#home_slide .item-image').each(function (i, item) {
            var $item = $(item);
            var imgSrc = $item.data(winWidth < 768 ? 'sm-image' : 'lg-image');
            var imgHtml = '<img src="' + imgSrc + '"/>';
            $item.html(imgHtml);
            $item.css('backgroundImage', 'url('+imgSrc+')');

        });

        //特别推荐的tab
        var $tabs = $('#products .nav-tabs');

        console.log('tabs count : ' + $tabs.length);

        $tabs.each(function(i, item) {
            var $tab = $(this);
            var width = 20;
            $tab.children().each(function(ci, citem) {
                width += $(citem).width();
            });
            if (width > $tab.parent().width()) {
                $tab.css('width', width);
                $tabs.parent().css('overflow-x', 'scroll');
            } else {
                $tab.css('width', 'auto');
                $tabs.parent().css('overflow-x', 'hidden');
            }
        });
    }
    $(window).on('resize', resize).trigger('resize');

    // 提示框效果
    $('[data-toggle="tooltip"]').tooltip();

    $('#home-nav').affix({
        offset: {
            top: 40, //距顶部的距离
            bottom: function () {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })
});
