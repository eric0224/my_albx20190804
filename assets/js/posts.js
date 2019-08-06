$(function () {
    $.ajax({
        type: "get", //默认get
        url: "/getAllPosts", //默认当前页
        data: {
            pageNum: 1,
            pageSize: 3
        }, //格式{key:value}
        dataType: "json",
        success: function (res) { //请求成功回调
            let html = template('tem', res);
            $('tbody').html(html);
        },
    });
})