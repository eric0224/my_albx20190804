$(function () {
    $('.btnLogin').on('click', () => {
        // 非空判断
        if (!$('#email').val().trim() || !$('#password').val().trim()) {
            $('.alert-danger').fadeIn(500).delay(1500).fadeOut(500);
            $('.alert-danger>span').text('邮箱或者密码不能为空!');
            return;
        };
        $.ajax({
            type: "post",
            url: "/login",
            data: $('form').serialize(),
            dataType: "json", 
            success: function (res) {
                if (res.code == 400) {
                    $('.alert-danger').fadeIn(500).delay(1500).fadeOut(500);
                    $('.alert-danger>span').text(res.msg);
                } else {
                    location.href = '/admin/index'
                }
            }
        });
    })
})