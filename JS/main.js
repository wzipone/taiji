let html = document.querySelector("#html");
let style = document.querySelector("#style");
let htmlStr = `
/* 你好，我叫小王
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div，id就是taiji
 **/
#taiji{
    width: 200px;
    height: 200px;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
}
/* 接下来我把 taiji 变成一个八卦图
 * 注意看好了
 * 首先，把 taiji 变成一个圆
 **/
#taiji{
    border-radius: 50%;
}
/* 八卦是阴阳形成的
 * 然后将圆分两半
 * 左边一半变白色
 * 右边一半变黑色
 **/
#taiji{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 然后让圆转圈圈*/
#taiji{
    animation: 5s linear infinite  circle;
}
@keyframes circle{
    from{
        transform : rotate(0deg);
    }
    to{
        transform : rotate(360deg);
    }
}
/* 再画两圆
 * 一个是黑色
 * 一个是白色
 **/
#taiji::before{
    background: #000;
    width: 100px;
    height: 100px;
    top: 0px;
    left: 25%;
    border-radius: 50%
}
#taiji::after{
    background: #fff;
    width: 100px;
    height: 100px;
    bottom: 0px;
    left: 25%;
    border-radius: 50%
}
/* 最后
 * 在黑球里加一个小白球
 * 在白球里加一个小黑球
 **/
#taiji::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#taiji::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
`
let strInput = ''
let len = htmlStr.length
let n = 0;

/* 1.让htmlstr能够逐字的写入文档
*  2.处理字符串中的换行和空格
*  3.最后让文字容器自动滚动到最下面
**/
let writeHtml = () => {
    if (n >= len-1) return

    setTimeout(() => {

        if (htmlStr[n] === '\n') {
            strInput += '<br>'
        } else if (htmlStr[n] === ' ') {
            strInput += '&nbsp;'
        } else {
            strInput += htmlStr[n]
        }

        html.innerHTML = strInput
        style.innerHTML = htmlStr.substring(0, n);

        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);

        writeHtml()
        
        n++
    }, 40)
}
writeHtml()