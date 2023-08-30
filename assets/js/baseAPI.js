// 每次调用 $.get() 或 $.post() 或 $.ajax() 的时候，会先调用 $.ajaxPrefilter()
// options 为 Ajax 提供的配置对象
$.ajaxPrefilter(function(options) {
    // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
    options.url = '根路径' + options.url
    console.log(options.url)
})