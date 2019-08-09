$(function () {
    let pageNum = 1;
    let pageSize = 3;
    // 加载所有文章数据
    function init(obj) {
        $.ajax({
            type: "get", //默认get
            url: "/getAllPosts", //默认当前页
            data: {
                pageNum: pageNum,
                pageSize: pageSize,
                ...obj
            }, //格式{key:value}
            dataType: "json",
            success: function (res) { //请求成功回调
                let html = template('tem', res.data);
                $('tbody').html(html);
                setPage(Math.ceil(res.data.total / pageSize))
            },
        });
    }

    init();

    // 加载分类
    $.ajax({
        type: "GET", //默认get
        url: "/getAllCate", //默认当前页 //格式{key:value}
        dataType: "json",
        success: function (res) { //请求成功回调
            // console.log(res)
            let html = `<option value="all">所有分类</option>`;
            for (let i = 0; i < res.data.length; i++) {
                html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            // console.log(html)
            $('.cateSelector').html(html)

        }
    });


    // 实现分页功能
    function setPage(total) {
        if (total > 0) {
            $(".pagination").bootstrapPaginator({
                //设置版本号
                bootstrapMajorVersion: 3,
                // 显示第几页
                currentPage: pageNum,
                // 总页数
                totalPages: total,
                //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
                onPageClicked: function (event, originalEvent, type, page) {
                    // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
                    pageNum = page
                    init(obj);
                }
            })
        } else {
            $(".pagination").html('');
        }
    }

    let obj = {};
    // 点击筛选
    $('.btn-screening').on('click', () => {
        obj.statu = $('.statuSelector').val();
        obj.cate = $('.cateSelector').val();
        pageNum = 1;
        init(obj);
    })
})