parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),i="\n/* 你好，我叫小王\n * 接下来我演示一下我的前端功底\n * 首先我要准备一个div，id就是taiji\n **/\n#taiji{\n    width: 200px;\n    height: 200px;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n}\n/* 接下来我把 taiji 变成一个八卦图\n * 注意看好了\n * 首先，把 taiji 变成一个圆\n **/\n#taiji{\n    border-radius: 50%;\n}\n/* 八卦是阴阳形成的\n * 然后将圆分两半\n * 左边一半变白色\n * 右边一半变黑色\n **/\n#taiji{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* 然后让圆转圈圈*/\n#taiji{\n    animation: 5s linear infinite  circle;\n}\n@keyframes circle{\n    from{\n        transform : rotate(0deg);\n    }\n    to{\n        transform : rotate(360deg);\n    }\n}\n/* 再画两圆\n * 一个是黑色\n * 一个是白色\n **/\n#taiji::before{\n    background: #000;\n    width: 100px;\n    height: 100px;\n    top: 0px;\n    left: 25%;\n    border-radius: 50%\n}\n#taiji::after{\n    background: #fff;\n    width: 100px;\n    height: 100px;\n    bottom: 0px;\n    left: 25%;\n    border-radius: 50%\n}\n/* 最后\n * 在黑球里加一个小白球\n * 在白球里加一个小黑球\n **/\n#taiji::before{\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);\n}\n#taiji::after{\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);\n}\n",a="",t=i.length,e=0,o=function o(){e>=t-1||setTimeout(function(){"\n"===i[e]?a+="<br>":" "===i[e]?a+="&nbsp;":a+=i[e],n.innerHTML=a,r.innerHTML=i.substring(0,e),window.scrollTo(0,9999),n.scrollTo(0,9999),o(),e++},40)};o();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.ccc7461d.js.map