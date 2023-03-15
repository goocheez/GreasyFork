// ==UserScript==
// @name         上移知乎文章发表日期到标题
// @namespace    https://github.com/goocheez/zhihu_timestamp_to_the_top
// @version      0.1
// @description  将知乎专栏的文章发表日期移动到标题下方
// @author       Goocheez
// @match        https://zhuanlan.zhihu.com/*
// @icon         https://static.zhihu.com/heifetz/favicon.ico
// @grant        none
// @license      MIT
// ==/UserScript==

function move_zhihu_timestamp_to_the_top(){
    var title = document.getElementsByClassName('Post-Header');
    var time_stamp = document.getElementsByClassName('ContentItem-time');
    if(title.length>0 && time_stamp.length>0){ // 添加条件语句，避免 js 出错
        title[0].appendChild(time_stamp[0]);
    }
}

(function() {
    'use strict';
    move_zhihu_timestamp_to_the_top();
})();