import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'


$(function() {
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css('backgroundColor', 'yellow')
})

class Person {
    static info = 'aaa'
}

console.log(Person.info);

// vue的使用---------------------------------------

import Vue from 'vue'
//导入单文件组件
import App from './components/app.vue'

const vm = new Vue({
    el: '#app',
    render: h => h(App)
})