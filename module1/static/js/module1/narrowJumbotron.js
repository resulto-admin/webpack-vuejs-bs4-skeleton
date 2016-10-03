var Vue = require('vue');
var helloWorld = require('module1/libs/helloworld');

var SubHeading = require('module1/components/subheading.vue');

new Vue({
    el: '#narrow-jumbotron',
    components: {
        'subheading': SubHeading
    }
});

console.log(helloWorld('Bob King III'));
