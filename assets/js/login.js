// 入口函数 $(function() {})，避免全局污染 
$(function () {
    // 点击 去注册账号 跳转到 注册div；点击 去登录 跳转到 登录 div
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.register-box').show()
    })

    $('#link_log').on('click', function () {
        $('.login-box').show()
        $('.register-box').hide()
    })

    // 获取 layui 的表单 form 对象
    let form = layui.form
    // 通过 form.verify() 方法自定义校验规则
    form.verify({
        // 密码校验
        pwd: [/^[\S]{6,12}$/, '密码必须为6到12位，且不能出现空格'],
        // 两次密码是否一致校验
        repwd: function (value) {
            // 获取密码框中的内容
            let pwd = $('.register-box [name=password]').val()
            // 形参 value 为确认密码框中的值，两者进行比较
            // 如果不一致，则返回提示信息
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })

    // 获取 layer 的弹出层 layer 对象
    let layer = layui.layer

    // 监听表单的 注册 提交事件
    $('#form_reg').on('submit', function (e) {
        // 阻止表单的默认行为
        e.preventDefault()
        
        layer.msg('注册成功，请登录！')
        // 跳转到登录界面，模拟人的点击行为
        $('#link_log').click()

        // // 发起 Ajax 的 POST 请求
        // // 传入的数据
        // data = {
        //     username: $('#form_reg [name=username]').val(), 
        //     password: $('#form_reg [name=password]').val()
        // }
        // $.post('/api/reguser', data, function(res) {
        //     // 服务器响应回来的数据
        //     if(res.status !== 0) {
        //         // return console.log(res.message)
        //         return layer.msg(res.message)
        //     }
        //     // console.log(res.message)
        //     // console.log('注册成功！');
        //     layer.msg('注册成功，请登录！')

        //     // 跳转到登录界面，模拟人的点击行为
        //     $('#link_log').click()
        // })
    })

    // 监听表单的 登录 提交事件
    $('#form_log').on('submit', function (e) {
        // 阻止表单的默认行为
        e.preventDefault()

        location.href = '/system_article/index.html'
        
        // // 发起 ajax 请求
        // $.ajax({
        //     url: '/api/login',
        //     method: 'POST',
        //     // 快速获取表单中的数据
        //     data: $(this).serialize(),
        //     success: function(res) {
        //         if(res.status !== 0) {
        //             return layer.msg('登录失败！')
        //         }
        //         layer.msg('登录成功！')
        //         // 将登录成功得到的 token 字符串，保存到 localStorage 中
        //         localStorage.setItem('token', res.token)
        //         // 跳转到后台主页
        //         location.href = '/index.html'
        //     }
        // })
    })
})