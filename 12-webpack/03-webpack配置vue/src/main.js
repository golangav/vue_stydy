import {name, age} from './js/mathUtils';

console.log(name);
console.log(age);

// 3. 依赖css文件
require('./css/normal.css')

// 4. 依赖less文件
require('./css/special.less')
document.writeln('<h2>Hello World </h2>')

import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App'

const app = new Vue({
  el: "#app",
  template: '<App/>',
  components:{
    App
  }
})