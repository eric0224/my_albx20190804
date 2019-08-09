$(function () {
    let str = location.href;
    let index = str.indexOf('?');
    let routerName = '';
    if (index == -1) {
        routerName = str.substring(str.lastIndexOf('/') + 1);
    } else {
        routerName = str.substring(str.lastIndexOf('/') + 1, str.indexOf('?'));
    }
    // 文章分类
    if (routerName == 'posts' || routerName == 'post-add' || routerName == 'categories') {
        $('#menu-posts').addClass('in').attr('aria-expanded', true);
        $('#menu-posts').siblings('.collapsed').removeClass('collapsed');
    }
    // 设置分类
    if (routerName == 'nav-menus' || routerName == 'slides' || routerName == 'settings') {
        $('#menu-settings').addClass('in').attr('aria-expanded', true);
        $('#menu-settings').siblings('.collapsed').removeClass('collapsed');
    }
    // 高亮
    $('#' + routerName).addClass('active');
})